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
  GremlinDatabaseCreateUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB Gremlin database
 *
 * @summary Create or update an Azure Cosmos DB Gremlin database
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2024-08-15/examples/CosmosDBGremlinDatabaseCreateUpdate.json
 */
async function cosmosDbGremlinDatabaseCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const createUpdateGremlinDatabaseParameters: GremlinDatabaseCreateUpdateParameters =
    {
      location: "West US",
      options: {},
      resource: { id: "databaseName" },
      tags: {},
    };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.gremlinResources.beginCreateUpdateGremlinDatabaseAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      createUpdateGremlinDatabaseParameters,
    );
  console.log(result);
}

async function main() {
  cosmosDbGremlinDatabaseCreateUpdate();
}

main().catch(console.error);
