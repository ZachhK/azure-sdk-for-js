/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VolumeGroup, ElasticSanManagement } from "@azure/arm-elasticsan";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a Volume Group.
 *
 * @summary Create a Volume Group.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2024-06-01-preview/examples/VolumeGroups_Create_MaximumSet_Gen.json
 */
async function volumeGroupsCreateMaximumSetGen() {
  const subscriptionId =
    process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName =
    process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const parameters: VolumeGroup = {
    identity: { type: "None", userAssignedIdentities: { key1006: {} } },
    properties: {
      encryption: "EncryptionAtRestWithPlatformKey",
      encryptionProperties: {
        encryptionIdentity: {
          encryptionUserAssignedIdentity: "gfhkfbozahmmwluqndfgxunssafa",
        },
        keyVaultProperties: {
          keyName: "lunpapamzeimppgobraxjt",
          keyVaultUri: "https://microsoft.com/a",
          keyVersion: "oemygbnfmqhijmonkqfqmy",
        },
      },
      enforceDataIntegrityCheckForIscsi: true,
      networkAcls: {
        virtualNetworkRules: [
          {
            action: "Allow",
            virtualNetworkResourceId: "bkhwaiqvvaguymsmnzzbzz",
          },
        ],
      },
      protocolType: "Iscsi",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.volumeGroups.beginCreateAndWait(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a Volume Group.
 *
 * @summary Create a Volume Group.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2024-06-01-preview/examples/VolumeGroups_Create_MinimumSet_Gen.json
 */
async function volumeGroupsCreateMinimumSetGen() {
  const subscriptionId =
    process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName =
    process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const parameters: VolumeGroup = {};
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.volumeGroups.beginCreateAndWait(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    parameters,
  );
  console.log(result);
}

async function main() {
  volumeGroupsCreateMaximumSetGen();
  volumeGroupsCreateMinimumSetGen();
}

main().catch(console.error);
