/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftResourceHealth } = require("@azure/arm-resourcehealth");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the list of metadata entities.
 *
 * @summary Gets the list of metadata entities.
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/preview/2023-10-01-preview/examples/Metadata_GetEntity.json
 */
async function getMetadata() {
  const name = "status";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential);
  const result = await client.metadata.getEntity(name);
  console.log(result);
}

async function main() {
  getMetadata();
}

main().catch(console.error);