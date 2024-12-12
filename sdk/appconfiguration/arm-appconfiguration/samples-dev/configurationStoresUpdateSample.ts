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
  ConfigurationStoreUpdateParameters,
  AppConfigurationManagementClient,
} from "@azure/arm-appconfiguration";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates a configuration store with the specified parameters.
 *
 * @summary Updates a configuration store with the specified parameters.
 * x-ms-original-file: specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/stable/2024-05-01/examples/ConfigurationStoresUpdate.json
 */
async function configurationStoresUpdate() {
  const subscriptionId =
    process.env["APPCONFIGURATION_SUBSCRIPTION_ID"] ||
    "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName =
    process.env["APPCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroup";
  const configStoreName = "contoso";
  const configStoreUpdateParameters: ConfigurationStoreUpdateParameters = {
    sku: { name: "Standard" },
    tags: { category: "Marketing" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.configurationStores.beginUpdateAndWait(
    resourceGroupName,
    configStoreName,
    configStoreUpdateParameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates a configuration store with the specified parameters.
 *
 * @summary Updates a configuration store with the specified parameters.
 * x-ms-original-file: specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/stable/2024-05-01/examples/ConfigurationStoresUpdateDisableLocalAuth.json
 */
async function configurationStoresUpdateDisableLocalAuth() {
  const subscriptionId =
    process.env["APPCONFIGURATION_SUBSCRIPTION_ID"] ||
    "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName =
    process.env["APPCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroup";
  const configStoreName = "contoso";
  const configStoreUpdateParameters: ConfigurationStoreUpdateParameters = {
    disableLocalAuth: true,
    sku: { name: "Standard" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.configurationStores.beginUpdateAndWait(
    resourceGroupName,
    configStoreName,
    configStoreUpdateParameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates a configuration store with the specified parameters.
 *
 * @summary Updates a configuration store with the specified parameters.
 * x-ms-original-file: specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/stable/2024-05-01/examples/ConfigurationStoresUpdateWithIdentity.json
 */
async function configurationStoresUpdateWithIdentity() {
  const subscriptionId =
    process.env["APPCONFIGURATION_SUBSCRIPTION_ID"] ||
    "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName =
    process.env["APPCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroup";
  const configStoreName = "contoso";
  const configStoreUpdateParameters: ConfigurationStoreUpdateParameters = {
    identity: {
      type: "SystemAssigned, UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/c80fb759C9654c6a91109b2b2d038882/resourcegroups/myResourceGroup1/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity2":
          {},
      },
    },
    sku: { name: "Standard" },
    tags: { category: "Marketing" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.configurationStores.beginUpdateAndWait(
    resourceGroupName,
    configStoreName,
    configStoreUpdateParameters,
  );
  console.log(result);
}

async function main() {
  configurationStoresUpdate();
  configurationStoresUpdateDisableLocalAuth();
  configurationStoresUpdateWithIdentity();
}

main().catch(console.error);
