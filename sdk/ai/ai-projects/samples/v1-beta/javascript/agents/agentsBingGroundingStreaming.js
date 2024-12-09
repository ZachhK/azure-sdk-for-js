// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * FILE: agentsBingGroundingStreaming.ts
 *
 * @summary DESCRIPTION: This sample demonstrates how to use agent operations with the Grounding with Bing Search tool from the Azure Agents service using a asynchronous client and streaming.
 *
 * USAGE:
 *  npm node agentsBingGroundingStreaming.ts
 *
 *  Before running the sample:
 *
 *  npm install @azure/ai-projects @azure/identity @azure/core-util dotenv
 *
 *  Set this environment variables with your own values:
 *  AZURE_AI_PROJECTS_CONNECTION_STRING - the Azure AI Project connection string, as found in your AI Studio Project
 *  BING_CONNECTION_NAME - the name of the connection with Bing search grounding
 */

const {
  AIProjectsClient,
  DoneEvent,
  ErrorEvent,
  MessageStreamEvent,
  RunStreamEvent,
  fromConnectionId,
  connectionToolType,
  isOutputOfType,
} = require("@azure/ai-projects");
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
  const bingConnection = await client.connections.getConnection(
    process.env["BING_CONNECTION_NAME"] || "<connection-name>",
  );
  const connectionId = bingConnection.id;

  // Initialize agent bing tool with the connection id
  const bingTool = fromConnectionId(connectionToolType.BingGrounding, [connectionId]);

  // Create agent with the bing tool and process assistant run
  const agent = await client.agents.createAgent(
    "gpt-4-0125-preview",
    {
      name: "my-agent",
      instructions: "You are a helpful agent",
      tools: [bingTool],
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
    content: "How does wikipedia explain Euler's Identity?",
  });
  console.log(`Created message, message ID: ${message.id}`);

  // Create and process agent run with streaming in thread with tools
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
