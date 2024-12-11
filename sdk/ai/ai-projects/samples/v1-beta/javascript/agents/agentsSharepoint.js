// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how to use agent operations with the Sharepoint tool from the Azure Agents service.
 *
 * @summary demonstrates how to use agent operations with the Sharepoint tool.
 */

const {
  AIProjectsClient,
  ToolUtility,
  connectionToolType,
  isOutputOfType,
} = require("@azure/ai-projects");
const { delay } = require("@azure/core-util");
const { DefaultAzureCredential } = require("@azure/identity");

require("dotenv").config();

const connectionString =
  process.env["AZURE_AI_PROJECTS_CONNECTION_STRING"] ||
  "<endpoint>>;<subscription>;<resource group>;<project>";

async function main() {
  // Create an Azure AI Client from a connection string, copied from your AI Studio project.
  // At the moment, it should be in the format "<HostName>;<AzureSubscriptionId>;<ResourceGroup>;<HubName>"
  // Customer needs to login to Azure subscription via Azure CLI and set the environment variables
  const client = AIProjectsClient.fromConnectionString(
    connectionString || "",
    new DefaultAzureCredential(),
  );
  const sharepointConnection = await client.connections.getConnection(
    process.env["SHAREPOINT_CONNECTION_NAME"] || "<connection-name>",
  );
  const connectionId = sharepointConnection.id;

  // Initialize agent Sharepoint tool with the connection id
  const sharepointTool = ToolUtility.createConnectionTool(connectionToolType.SharepointGrounding, [
    connectionId,
  ]);

  // Create agent with the Sharepoint tool and process assistant run
  const agent = await client.agents.createAgent(
    "gpt-4-0125-preview",
    {
      name: "my-agent",
      instructions: "You are a helpful agent",
      tools: [sharepointTool.definition],
    },
    {
      headers: { "x-ms-enable-preview": "true" },
    },
  );
  console.log(connectionId);
  console.log(`Created agent, agent ID : ${agent.id}`);

  // Create thread for communication
  const thread = await client.agents.createThread();
  console.log(`Created thread, thread ID: ${thread.id}`);

  // Create message to thread
  const message = await client.agents.createMessage(thread.id, {
    role: "user",
    content: "Hello, tell me about my health insurance options",
  });
  console.log(`Created message, message ID: ${message.id}`);

  // Create and process agent run in thread with tools
  let run = await client.agents.createRun(thread.id, agent.id);
  while (run.status === "queued" || run.status === "in_progress") {
    await delay(1000);
    run = await client.agents.getRun(thread.id, run.id);
  }
  if (run.status === "failed") {
    console.log(`Run failed: ${run.last_error}`);
  }
  console.log(`Run finished with status: ${run.status}`);

  // Delete the assistant when done
  client.agents.deleteAgent(agent.id);
  console.log(`Deleted agent, agent ID: ${agent.id}`);

  // Fetch and log all messages
  const messages = await client.agents.listMessages(thread.id);
  console.log(`Messages:`);
  const agentMessage = messages.data[0].content[0];
  if (isOutputOfType(agentMessage, "text")) {
    const textContent = agentMessage;
    console.log(`Text Message Content - ${textContent.text.value}`);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
