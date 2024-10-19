/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServiceNetworkingManagementClient } from "@azure/arm-servicenetworking";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List Association resources by TrafficController
 *
 * @summary List Association resources by TrafficController
 * x-ms-original-file: specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/preview/2024-05-01-preview/examples/AssociationsGet.json
 */
async function getAssociations() {
  const subscriptionId =
    process.env["SERVICENETWORKING_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["SERVICENETWORKING_RESOURCE_GROUP"] || "rg1";
  const trafficControllerName = "tc1";
  const credential = new DefaultAzureCredential();
  const client = new ServiceNetworkingManagementClient(
    credential,
    subscriptionId,
  );
  const resArray = new Array();
  for await (let item of client.associationsInterface.listByTrafficController(
    resourceGroupName,
    trafficControllerName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getAssociations();
}

main().catch(console.error);
