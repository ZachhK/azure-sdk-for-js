/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/privateEndpointConnectionsMappers";
import * as Parameters from "../models/parameters";
import { IotHubClientContext } from "../iotHubClientContext";

/** Class representing a PrivateEndpointConnections. */
export class PrivateEndpointConnections {
  private readonly client: IotHubClientContext;

  /**
   * Create a PrivateEndpointConnections.
   * @param {IotHubClientContext} client Reference to the service client.
   */
  constructor(client: IotHubClientContext) {
    this.client = client;
  }

  /**
   * List private endpoint connection properties
   * @summary List private endpoint connections
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsListResponse>
   */
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection[]>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection[]>): void;
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnection[]>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnection[]>): Promise<Models.PrivateEndpointConnectionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsListResponse>;
  }

  /**
   * Get private endpoint connection properties
   * @summary Get private endpoint connection
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  get(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnection>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnection>): Promise<Models.PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsGetResponse>;
  }

  /**
   * Update the status of a private endpoint connection with the specified name
   * @summary Update private endpoint connection
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, properties: Models.PrivateEndpointConnectionProperties, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,resourceName,privateEndpointConnectionName,properties,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateEndpointConnectionsUpdateResponse>;
  }

  /**
   * Delete private endpoint connection with the specified name
   * @summary Delete private endpoint connection
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsDeleteMethodResponse> {
    return this.beginDeleteMethod(resourceGroupName,resourceName,privateEndpointConnectionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateEndpointConnectionsDeleteMethodResponse>;
  }

  /**
   * Update the status of a private endpoint connection with the specified name
   * @summary Update private endpoint connection
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param properties
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, properties: Models.PrivateEndpointConnectionProperties, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        privateEndpointConnectionName,
        properties,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Delete private endpoint connection with the specified name
   * @summary Delete private endpoint connection
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        privateEndpointConnectionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      properties: "properties"
    },
    mapper: {
      ...Mappers.PrivateEndpointConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};
