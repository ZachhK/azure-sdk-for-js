/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { FrontDoorManagementClient } = require("@azure/arm-frontdoor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Validates the custom domain mapping to ensure it maps to the correct Front Door endpoint in DNS.
 *
 * @summary Validates the custom domain mapping to ensure it maps to the correct Front Door endpoint in DNS.
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2021-06-01/examples/FrontdoorValidateCustomDomain.json
 */
async function frontDoorValidateCustomDomain() {
  const subscriptionId = process.env["FRONTDOOR_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["FRONTDOOR_RESOURCE_GROUP"] || "rg1";
  const frontDoorName = "frontDoor1";
  const customDomainProperties = {
    hostName: "www.someDomain.com",
  };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.frontDoors.validateCustomDomain(
    resourceGroupName,
    frontDoorName,
    customDomainProperties,
  );
  console.log(result);
}

async function main() {
  frontDoorValidateCustomDomain();
}

main().catch(console.error);
