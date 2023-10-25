/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftResourceHealth } from "@azure/arm-resourcehealth";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the specific impacted resource in the subscription by an event.
 *
 * @summary Gets the specific impacted resource in the subscription by an event.
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/preview/2023-10-01-preview/examples/ImpactedResources_Get.json
 */
async function impactedResourcesGet() {
  const subscriptionId =
    process.env["RESOURCEHEALTH_SUBSCRIPTION_ID"] || "subscriptionId";
  const eventTrackingId = "BC_1-FXZ";
  const impactedResourceName = "abc-123-ghj-456";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential, subscriptionId);
  const result = await client.impactedResources.get(
    eventTrackingId,
    impactedResourceName
  );
  console.log(result);
}

async function main() {
  impactedResourcesGet();
}

main().catch(console.error);