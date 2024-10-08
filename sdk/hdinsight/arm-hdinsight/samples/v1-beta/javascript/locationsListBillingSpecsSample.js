/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the billingSpecs for the specified subscription and location.
 *
 * @summary Lists the billingSpecs for the specified subscription and location.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/preview/2024-08-01-preview/examples/HDI_Locations_ListBillingSpecs.json
 */
async function getTheSubscriptionBillingSpecsForTheSpecifiedLocation() {
  const subscriptionId = process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "subid";
  const location = "East US 2";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.locations.listBillingSpecs(location);
  console.log(result);
}

async function main() {
  getTheSubscriptionBillingSpecsForTheSpecifiedLocation();
}

main().catch(console.error);
