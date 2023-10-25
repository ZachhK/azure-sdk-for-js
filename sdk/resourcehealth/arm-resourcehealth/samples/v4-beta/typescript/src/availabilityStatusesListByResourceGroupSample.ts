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
  AvailabilityStatusesListByResourceGroupOptionalParams,
  MicrosoftResourceHealth
} from "@azure/arm-resourcehealth";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the current availability status for all the resources in the resource group.
 *
 * @summary Lists the current availability status for all the resources in the resource group.
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/preview/2023-10-01-preview/examples/AvailabilityStatuses_ListByResourceGroup.json
 */
async function listByResourceGroup() {
  const subscriptionId =
    process.env["RESOURCEHEALTH_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["RESOURCEHEALTH_RESOURCE_GROUP"] || "resourceGroupName";
  const expand = "recommendedactions";
  const options: AvailabilityStatusesListByResourceGroupOptionalParams = {
    expand
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.availabilityStatuses.listByResourceGroup(
    resourceGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listByResourceGroup();
}

main().catch(console.error);