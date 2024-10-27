/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the MongoDB collection under an existing Azure Cosmos DB database account.
 *
 * @summary Gets the MongoDB collection under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2024-08-15/examples/CosmosDBMongoDBCollectionGet.json
 */
async function cosmosDbMongoDbcollectionGet() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.getMongoDBCollection(
    resourceGroupName,
    accountName,
    databaseName,
    collectionName,
  );
  console.log(result);
}

async function main() {
  cosmosDbMongoDbcollectionGet();
}

main().catch(console.error);
