// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { EdgeZonesClient } = require("@azure/arm-edgezones");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to lists the Azure Extended Zones available to a subscription
 *
 * @summary lists the Azure Extended Zones available to a subscription
 * x-ms-original-file: 2024-04-01-preview/ExtendedZones_ListBySubscription.json
 */
async function listExtendedZones() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "a1ffc958-d2c7-493e-9f1e-125a0477f536";
  const client = new EdgeZonesClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.extendedZones.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listExtendedZones();
}

main().catch(console.error);
