/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create Or Update InventoryItem.
 *
 * @summary Create Or Update InventoryItem.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/stable/2023-10-01/examples/CreateInventoryItem.json
 */
async function createInventoryItem() {
  const subscriptionId =
    process.env["CONNECTEDVMWARE_SUBSCRIPTION_ID"] || "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = process.env["CONNECTEDVMWARE_RESOURCE_GROUP"] || "testrg";
  const vcenterName = "ContosoVCenter";
  const inventoryItemName = "testItem";
  const body = { inventoryType: "ResourcePool" };
  const options = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.inventoryItems.create(
    resourceGroupName,
    vcenterName,
    inventoryItemName,
    options
  );
  console.log(result);
}

async function main() {
  createInventoryItem();
}

main().catch(console.error);