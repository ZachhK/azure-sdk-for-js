// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how to use agent operations with file searching from the Azure Agents service.
 *
 * @summary This sample demonstrates how to use agent operations with file searching.
 */

const { AIProjectsClient, isOutputOfType } = require("@azure/ai-projects");
const { delay } = require("@azure/core-util");
const { DefaultAzureCredential } = require("@azure/identity");

const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();
const path = require("node:path");
const { fileURLToPath } = require("url");

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);

const connectionString =
  process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] ||
  "<endpoint>>;<subscription>;<resource group>;<project>";

async function main() {
  const client = AIProjectsClient.fromConnectionString(
    connectionString || "",
    new DefaultAzureCredential(),
  );

  // Upload file
  const filePath = path.resolve(__dirname, "../data/sampleFileForUpload.txt");
  const localFileStream = fs.createReadStream(filePath);
  const file = await client.agents.uploadFile(
    localFileStream,
    "assistants",
    "sampleFileForUpload.txt",
  );
  console.log(`Uploaded file, file ID: ${file.id}`);

  // Create vector store
  const vectorStore = await client.agents.createVectorStore({
    file_ids: [file.id],
    name: "my_vector_store",
  });
  console.log(`Created vector store, vector store ID: ${vectorStore.id}`);

  // Create agent with files
  const agent = await client.agents.createAgent("gpt-4o", {
    name: "SDK Test Agent - Retrieval",
    instructions: "You are helpful agent that can help fetch data from files you know about.",
    tools: [{ type: "file_search" }],
    tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
  });
  console.log(`Created agent, agent ID : ${agent.id}`);

  // Create thread
  const thread = await client.agents.createThread();
  console.log(`Created thread, thread ID: ${thread.id}`);

  // Create message
  const message = await client.agents.createMessage(thread.id, {
    role: "user",
    content: "Can you give me the documented codes for 'banana' and 'orange'?",
  });
  console.log(`Created message, message ID: ${message.id}`);

  // Create run
  let run = await client.agents.createRun(thread.id, agent.id);
  while (["queued", "in_progress"].includes(run.status)) {
    await delay(500);
    run = await client.agents.getRun(thread.id, run.id);
    console.log(`Current Run status - ${run.status}, run ID: ${run.id}`);
  }

  console.log(`Current Run status - ${run.status}, run ID: ${run.id}`);
  const messages = await client.agents.listMessages(thread.id);
  messages.data.forEach((threadMessage) => {
    console.log(
      `Thread Message Created at  - ${threadMessage.created_at} - Role - ${threadMessage.role}`,
    );
    threadMessage.content.forEach((content) => {
      if (isOutputOfType(content, "text")) {
        const textContent = content;
        console.log(`Text Message Content - ${textContent.text.value}`);
      } else if (isOutputOfType(content, "image_file")) {
        const imageContent = content;
        console.log(`Image Message Content - ${imageContent.image_file.file_id}`);
      }
    });
  });

  // Delete agent
  await client.agents.deleteAgent(agent.id);
  console.log(`Deleted agent, agent ID: ${agent.id}`);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
