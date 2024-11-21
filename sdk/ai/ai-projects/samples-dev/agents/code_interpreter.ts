// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {AIProjectsClient, isOutputOfType, CodeInterpreterToolDefinition, MessageTextContentOutput, ToolResources, MessageImageFileContentOutput, MessageContentOutput } from "@azure/ai-projects"
import { DefaultAzureCredential } from "@azure/identity";

import * as dotenv from "dotenv";
dotenv.config();
import * as fs from "fs";
import { delay } from "@azure/core-util";

const connectionString = process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] || "<endpoint>>;<subscription>;<resource group>;<project>";

const client = AIProjectsClient.fromConnectionString(connectionString || "", new DefaultAzureCredential());

// Upload file and wait for it to be processed
const localFileStream = fs.createReadStream("nifty_500_quarterly_results.csv");
const localFile = await client.agents.uploadFile(localFileStream, "assistants", "my-local-file");

console.log(`Uploaded local file, file ID : ${localFile.id}`);

// Notice that CodeInterpreter must be enabled in the agent creation, otherwise the agent will not be able to see the file attachment
const agent = await client.agents.createAgent("gpt-4o-mini", {
  name: "my-agent",
  instructions: "You are a helpful agent",
  tools: [{type: "code_interpreter"} as CodeInterpreterToolDefinition],
  tool_resources: { code_interpreter: {file_ids: [localFile.id]} } as ToolResources
});
console.log(`Created agent, agent ID: ${agent.id}`);

// Create a thread
const thread = await client.agents.createThread();
console.log(`Created thread, thread ID: ${thread.id}`);

// Create a message
const message = await client.agents.createMessage(thread.id, { 
  role: "user", 
  content: "Could you please create a bar chart in the TRANSPORTATION sector for the operating profit from the uploaded CSV file and provide the file to me?" 
});

console.log(`Created message, message ID: ${message.id}`);

// Create and execute a run
let run = await client.agents.createRun(thread.id, agent.id);
while (run.status === "queued" || run.status === "in_progress") {
  await delay(1000);
  run = await client.agents.getRun(thread.id, run.id);
}
if (run.status === "failed") {
    // Check if you got "Rate limit is exceeded.", then you want to get more quota
    console.log(`Run failed: ${run.last_error}`);
}
console.log(`Run finished with status: ${run.status}`);

// Delete the original file from the agent to free up space (note: this does not delete your version of the file)
await client.agents.deleteFile(localFile.id);
console.log("Deleted file");

// Print the messages from the agent
const messages = await client.agents.listMessages(thread.id);
console.log("Messages:", messages);

// Get most recent message from the assistant
const assistantMessage = messages.data.find(msg => msg.role === "assistant");
if (assistantMessage) {
  const textContent = assistantMessage.content.find(content => isOutputOfType<MessageTextContentOutput>(content, "text")) as MessageTextContentOutput;
  if (textContent) {
    console.log(`Last message: ${textContent.text.value}`);
  }
}

// Save the newly created file
messages.data.forEach( m => {
  m.content.forEach(async (content: MessageContentOutput) => {
      if (isOutputOfType<MessageImageFileContentOutput>(content, "image_file")) {
          const imageContent = content as MessageImageFileContentOutput;
          const file = await client.agents.uploadFile(fs.createReadStream(imageContent.image_file.file_id), "assistants", "uploaded-image-file");
          console.log(`Saved new file, file ID : ${file.id}`);
      }
  });
});

// Iterate through file path annotations in messages and print details for each annotation
console.log(`Message Details:`);
messages.data.forEach((m) => {
  console.log(`File Paths:`);
  console.log(`Type: ${m.content[0].type}`); 
  if (isOutputOfType<MessageTextContentOutput>(m.content[0], "text")) {
    const textContent = m.content[0] as MessageTextContentOutput;
    console.log(`Text: ${textContent.text.value}`);
  } 
  console.log(`File ID: ${m.id}`);
  console.log(`Start Index: ${messages.first_id}`);
  console.log(`End Index: ${messages.last_id}`);
});

// Delete the agent once done
await client.agents.deleteAgent(agent.id);
console.log("Deleted agent");
