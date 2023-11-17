/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  LogicalNetworksUpdateRequest,
  AzureStackHCIClient
} from "@azure/arm-azurestackhci";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to update a logical network.
 *
 * @summary The operation to update a logical network.
 * x-ms-original-file: specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/preview/2023-09-01-preview/examples/UpdateLogicalNetwork.json
 */
async function updateLogicalNetwork() {
  const subscriptionId =
    process.env["AZURESTACKHCI_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName =
    process.env["AZURESTACKHCI_RESOURCE_GROUP"] || "test-rg";
  const logicalNetworkName = "test-lnet";
  const logicalNetworks: LogicalNetworksUpdateRequest = {
    tags: { additionalProperties: "sample" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureStackHCIClient(credential, subscriptionId);
  const result = await client.logicalNetworksOperations.beginUpdateAndWait(
    resourceGroupName,
    logicalNetworkName,
    logicalNetworks
  );
  console.log(result);
}

async function main() {
  updateLogicalNetwork();
}

main().catch(console.error);