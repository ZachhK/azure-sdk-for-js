/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all Extension versions based on location, publisher, extensionType
 *
 * @summary Gets all Extension versions based on location, publisher, extensionType
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/stable/2024-07-10/examples/extension/ExtensionMetadata_List.json
 */
async function getAListOfExtensions() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] ||
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  const location = "EastUS";
  const publisher = "microsoft.azure.monitor";
  const extensionType = "azuremonitorlinuxagent";
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.extensionMetadata.list(
    location,
    publisher,
    extensionType,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getAListOfExtensions();
}

main().catch(console.error);
