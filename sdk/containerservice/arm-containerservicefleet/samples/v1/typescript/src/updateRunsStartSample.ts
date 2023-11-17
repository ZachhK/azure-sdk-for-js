/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerServiceFleetClient } from "@azure/arm-containerservicefleet";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Starts an UpdateRun.
 *
 * @summary Starts an UpdateRun.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/stable/2023-10-15/examples/UpdateRuns_Start.json
 */
async function startsAnUpdateRun() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const fleetName = "fleet1";
  const updateRunName = "run1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  const result = await client.updateRuns.beginStartAndWait(
    resourceGroupName,
    fleetName,
    updateRunName
  );
  console.log(result);
}

async function main() {
  startsAnUpdateRun();
}

main().catch(console.error);