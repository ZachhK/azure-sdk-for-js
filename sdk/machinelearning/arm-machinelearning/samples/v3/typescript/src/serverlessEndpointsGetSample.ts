/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMachineLearningServicesManagementClient } from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get Serverless Endpoint.
 *
 * @summary Get Serverless Endpoint.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Workspace/ServerlessEndpoint/get.json
 */
async function getWorkspaceServerlessEndpoint() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.serverlessEndpoints.get(
    resourceGroupName,
    workspaceName,
    name,
  );
  console.log(result);
}

async function main() {
  getWorkspaceServerlessEndpoint();
}

main().catch(console.error);
