// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how to use agent operations with code interpreter from the Azure Agents service.
 *
 * @summary demonstrates how to use agent operations with code interpreter.
 */

const {
  AIProjectsClient,
  isOutputOfType,
  ToolUtility,
  RunStreamEvent,
  MessageStreamEvent,
  ErrorEvent,
  DoneEvent,
} = require("@azure/ai-projects");
const { DefaultAzureCredential } = require("@azure/identity");

require("dotenv").config();
const fs = require("fs");

const connectionString =
  process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] ||
  "<endpoint>>;<subscription>;<resource group>;<project>";

async function main() {
  const client = AIProjectsClient.fromConnectionString(
    connectionString || "",
    new DefaultAzureCredential(),
  );

  // Upload file and wait for it to be processed
  const localFileStream = fs.createReadStream("./samples-dev/data/nifty500QuarterlyResults.csv");
  const localFile = await client.agents.uploadFile(localFileStream, "assistants", "myLocalFile");

  console.log(`Uploaded local file, file ID : ${localFile.id}`);

  // Create code interpreter tool
  const codeInterpreterTool = ToolUtility.createCodeInterpreterTool([localFile.id]);

  // Notice that CodeInterpreter must be enabled in the agent creation, otherwise the agent will not be able to see the file attachment
  const agent = await client.agents.createAgent("gpt-4o-mini", {
    name: "my-agent",
    instructions: "You are a helpful agent",
    tools: [codeInterpreterTool.definition],
    tool_resources: codeInterpreterTool.resources,
  });
  console.log(`Created agent, agent ID: ${agent.id}`);

  // Create a thread
  const thread = await client.agents.createThread();
  console.log(`Created thread, thread ID: ${thread.id}`);

  // Create a message
  const message = await client.agents.createMessage(thread.id, {
    role: "user",
    content:
      "Could you please create a bar chart in the TRANSPORTATION sector for the operating profit from the uploaded CSV file and provide the file to me?",
  });

  console.log(`Created message, message ID: ${message.id}`);

  // Create and execute a run
  const streamEventMessages = await client.agents.createRunStreaming(thread.id, agent.id);

  for await (const eventMessage of streamEventMessages) {
    switch (eventMessage.event) {
      case RunStreamEvent.ThreadRunCreated:
        console.log(`ThreadRun status: ${eventMessage.data.status}`);
        break;
      case MessageStreamEvent.ThreadMessageDelta:
        {
          const messageDelta = eventMessage.data;
          messageDelta.delta.content.forEach((contentPart) => {
            if (contentPart.type === "text") {
              const textContent = contentPart;
              const textValue = textContent.text?.value || "No text";
              console.log(`Text delta received:: ${textValue}`);
            }
          });
        }
        break;

      case RunStreamEvent.ThreadRunCompleted:
        console.log("Thread Run Completed");
        break;
      case ErrorEvent.Error:
        console.log(`An error occurred. Data ${eventMessage.data}`);
        break;
      case DoneEvent.Done:
        console.log("Stream completed.");
        break;
    }
  }

  // Delete the original file from the agent to free up space (note: this does not delete your version of the file)
  await client.agents.deleteFile(localFile.id);
  console.log(`Deleted file, file ID : ${localFile.id}`);

  // Print the messages from the agent
  const messages = await client.agents.listMessages(thread.id);
  console.log("Messages:", messages);

  // Get most recent message from the assistant
  const assistantMessage = messages.data.find((msg) => msg.role === "assistant");
  if (assistantMessage) {
    const textContent = assistantMessage.content.find((content) => isOutputOfType(content, "text"));
    if (textContent) {
      console.log(`Last message: ${textContent.text.value}`);
    }
  }

  // Save the newly created file
  console.log(`Saving new files...`);
  const imageFileOutput = messages.data[0].content[0];
  const imageFile = imageFileOutput.image_file.file_id;
  const imageFileName =
    "./data/" + (await client.agents.getFile(imageFile)).filename + "ImageFile.png";
  console.log(`Image file name : ${imageFileName}`);

  const fileContent = await (await client.agents.getFileContent(imageFile).asNodeStream()).body;
  if (fileContent) {
    const chunks = [];
    for await (const chunk of fileContent) {
      chunks.push(Buffer.from(chunk));
    }
    const buffer = Buffer.concat(chunks);
    fs.writeFileSync(imageFileName, buffer);
  } else {
    console.error("Failed to retrieve file content: fileContent is undefined");
  }
  console.log(`Saved image file to: ${imageFileName}`);

  // Iterate through messages and print details for each annotation
  console.log(`Message Details:`);
  messages.data.forEach((m) => {
    console.log(`File Paths:`);
    console.log(`Type: ${m.content[0].type}`);
    if (isOutputOfType(m.content[0], "text")) {
      const textContent = m.content[0];
      console.log(`Text: ${textContent.text.value}`);
    }
    console.log(`File ID: ${m.id}`);
    console.log(`Start Index: ${messages.first_id}`);
    console.log(`End Index: ${messages.last_id}`);
  });

  // Delete the agent once done
  await client.agents.deleteAgent(agent.id);
  console.log(`Deleted agent, agent ID: ${agent.id}`);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
