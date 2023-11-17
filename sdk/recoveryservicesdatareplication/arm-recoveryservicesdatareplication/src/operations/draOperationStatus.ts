/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DraOperationStatus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSiteRecoveryManagementServiceAPI } from "../azureSiteRecoveryManagementServiceAPI";
import {
  DraOperationStatusGetOptionalParams,
  DraOperationStatusGetResponse
} from "../models";

/** Class containing DraOperationStatus operations. */
export class DraOperationStatusImpl implements DraOperationStatus {
  private readonly client: AzureSiteRecoveryManagementServiceAPI;

  /**
   * Initialize a new instance of the class DraOperationStatus class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSiteRecoveryManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Tracks the results of an asynchronous operation on the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param operationId The ID of an ongoing async operation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    operationId: string,
    options?: DraOperationStatusGetOptionalParams
  ): Promise<DraOperationStatusGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, fabricName, fabricAgentName, operationId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}/fabricAgents/{fabricAgentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fabricName,
    Parameters.fabricAgentName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};