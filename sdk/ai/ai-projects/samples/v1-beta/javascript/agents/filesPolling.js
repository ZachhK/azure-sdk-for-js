// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * FILE: filesPolling.ts
 *
 * @summary This sample demonstrates how to upload a file and poll for its status using a synchronous client.
 *
 * USAGE:
 *  npm node filesPolling.ts
 *
 *  Before running the sample:
 *
 *  npm install @azure/ai-projects @azure/identity stream dotenv
 *
 *  Set this environment variables with your own values:
 *  AZURE_AI_PROJECTS_CONNECTION_STRING - the Azure AI Project connection string, as found in your AI Studio Project
 */

const { AIProjectsClient } = require("@azure/ai-projects");
const { DefaultAzureCredential } = require("@azure/identity");
const dotenv = require("dotenv");
const { Readable } = require("stream");
dotenv.config();

const connectionString =
  process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] ||
  "<endpoint>>;<subscription>;<resource group>;<project>";

async function main() {
  const client = AIProjectsClient.fromConnectionString(
    connectionString || "",
    new DefaultAzureCredential(),
  );

  // Set up abort controller (optional)
  // Polling can be stopped by calling abortController.abort()
  const abortController = new AbortController();

  // Create file content
  const fileContent = "Hello, World!";
  const readable = new Readable();
  readable.push(fileContent);
  readable.push(null); // end the stream

  // Upload file and poll
  const pollingOptions = { sleepIntervalInMs: 1000, abortSignal: abortController.signal };
  const file = await client.agents.uploadFileAndPoll(
    readable,
    "assistants",
    "myPollingFile",
    pollingOptions,
  );
  console.log(`Uploaded file with status ${file.status}, file ID : ${file.id}`);

  // Delete file
  await client.agents.deleteFile(file.id);
  console.log(`Deleted file, file ID ${file.id}`);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
