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
  Replication,
  ContainerRegistryManagementClient
} from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a replication for a container registry with the specified parameters.
 *
 * @summary Creates a replication for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/stable/2023-07-01/examples/ReplicationCreate.json
 */
async function replicationCreate() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const replicationName = "myReplication";
  const replication: Replication = {
    location: "eastus",
    tags: { key: "value" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.replications.beginCreateAndWait(
    resourceGroupName,
    registryName,
    replicationName,
    replication
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a replication for a container registry with the specified parameters.
 *
 * @summary Creates a replication for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/stable/2023-07-01/examples/ReplicationCreateZoneRedundant.json
 */
async function replicationCreateZoneRedundant() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const replicationName = "myReplication";
  const replication: Replication = {
    location: "eastus",
    regionEndpointEnabled: true,
    tags: { key: "value" },
    zoneRedundancy: "Enabled"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.replications.beginCreateAndWait(
    resourceGroupName,
    registryName,
    replicationName,
    replication
  );
  console.log(result);
}

async function main() {
  replicationCreate();
  replicationCreateZoneRedundant();
}

main().catch(console.error);