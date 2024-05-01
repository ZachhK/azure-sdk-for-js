/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ChaosManagementClient } = require("@azure/arm-chaos");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a list of Capability resources that extend a Target resource..
 *
 * @summary Get a list of Capability resources that extend a Target resource..
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/stable/2024-01-01/examples/ListCapabilities.json
 */
async function listAllCapabilitiesThatExtendAVirtualMachineTargetResource() {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] || "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const resourceGroupName = process.env["CHAOS_RESOURCE_GROUP"] || "exampleRG";
  const parentProviderNamespace = "Microsoft.Compute";
  const parentResourceType = "virtualMachines";
  const parentResourceName = "exampleVM";
  const targetName = "Microsoft-VirtualMachine";
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.capabilities.list(
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllCapabilitiesThatExtendAVirtualMachineTargetResource();
}

main().catch(console.error);
