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
  MigrateLoadBalancerToIpBasedRequest,
  LoadBalancersMigrateToIpBasedOptionalParams,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Migrate load balancer to IP Based
 *
 * @summary Migrate load balancer to IP Based
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-03-01/examples/MigrateLoadBalancerToIPBased.json
 */
async function migrateLoadBalancerToIPBased() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const groupName = "rg1";
  const loadBalancerName = "lb1";
  const parameters: MigrateLoadBalancerToIpBasedRequest = {
    pools: ["pool1", "pool2"],
  };
  const options: LoadBalancersMigrateToIpBasedOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.migrateToIpBased(
    groupName,
    loadBalancerName,
    options,
  );
  console.log(result);
}

async function main() {
  migrateLoadBalancerToIPBased();
}

main().catch(console.error);
