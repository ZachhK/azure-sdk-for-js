/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SignalRReplicas } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SignalRManagementClient } from "../signalRManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Replica,
  SignalRReplicasListNextOptionalParams,
  SignalRReplicasListOptionalParams,
  SignalRReplicasListResponse,
  SignalRReplicasGetOptionalParams,
  SignalRReplicasGetResponse,
  SignalRReplicasCreateOrUpdateOptionalParams,
  SignalRReplicasCreateOrUpdateResponse,
  SignalRReplicasDeleteOptionalParams,
  SignalRReplicasUpdateOptionalParams,
  SignalRReplicasUpdateResponse,
  SignalRReplicasRestartOptionalParams,
  SignalRReplicasRestartResponse,
  SignalRReplicasListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SignalRReplicas operations. */
export class SignalRReplicasImpl implements SignalRReplicas {
  private readonly client: SignalRManagementClient;

  /**
   * Initialize a new instance of the class SignalRReplicas class.
   * @param client Reference to the service client
   */
  constructor(client: SignalRManagementClient) {
    this.client = client;
  }

  /**
   * List all replicas belong to this resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRReplicasListOptionalParams
  ): PagedAsyncIterableIterator<Replica> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRReplicasListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Replica[]> {
    let result: SignalRReplicasListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, resourceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRReplicasListOptionalParams
  ): AsyncIterableIterator<Replica> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all replicas belong to this resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRReplicasListOptionalParams
  ): Promise<SignalRReplicasListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }

  /**
   * Get the replica and its properties.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param replicaName The name of the replica.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    replicaName: string,
    options?: SignalRReplicasGetOptionalParams
  ): Promise<SignalRReplicasGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, replicaName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a replica.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param replicaName The name of the replica.
   * @param parameters Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    replicaName: string,
    parameters: Replica,
    options?: SignalRReplicasCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SignalRReplicasCreateOrUpdateResponse>,
      SignalRReplicasCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SignalRReplicasCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        resourceName,
        replicaName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      SignalRReplicasCreateOrUpdateResponse,
      OperationState<SignalRReplicasCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a replica.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param replicaName The name of the replica.
   * @param parameters Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    replicaName: string,
    parameters: Replica,
    options?: SignalRReplicasCreateOrUpdateOptionalParams
  ): Promise<SignalRReplicasCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      resourceName,
      replicaName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to delete a replica.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param replicaName The name of the replica.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    replicaName: string,
    options?: SignalRReplicasDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, replicaName, options },
      deleteOperationSpec
    );
  }

  /**
   * Operation to update an exiting replica.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param replicaName The name of the replica.
   * @param parameters Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    replicaName: string,
    parameters: Replica,
    options?: SignalRReplicasUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SignalRReplicasUpdateResponse>,
      SignalRReplicasUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SignalRReplicasUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        resourceName,
        replicaName,
        parameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      SignalRReplicasUpdateResponse,
      OperationState<SignalRReplicasUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to update an exiting replica.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param replicaName The name of the replica.
   * @param parameters Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    replicaName: string,
    parameters: Replica,
    options?: SignalRReplicasUpdateOptionalParams
  ): Promise<SignalRReplicasUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      resourceName,
      replicaName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to restart a replica.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param replicaName The name of the replica.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceGroupName: string,
    resourceName: string,
    replicaName: string,
    options?: SignalRReplicasRestartOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SignalRReplicasRestartResponse>,
      SignalRReplicasRestartResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SignalRReplicasRestartResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, resourceName, replicaName, options },
      spec: restartOperationSpec
    });
    const poller = await createHttpPoller<
      SignalRReplicasRestartResponse,
      OperationState<SignalRReplicasRestartResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to restart a replica.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param replicaName The name of the replica.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceGroupName: string,
    resourceName: string,
    replicaName: string,
    options?: SignalRReplicasRestartOptionalParams
  ): Promise<SignalRReplicasRestartResponse> {
    const poller = await this.beginRestart(
      resourceGroupName,
      resourceName,
      replicaName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: SignalRReplicasListNextOptionalParams
  ): Promise<SignalRReplicasListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReplicaList
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
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Replica
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
    Parameters.resourceName,
    Parameters.replicaName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Replica
    },
    201: {
      bodyMapper: Mappers.Replica
    },
    202: {
      bodyMapper: Mappers.Replica
    },
    204: {
      bodyMapper: Mappers.Replica
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.replicaName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.replicaName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Replica
    },
    201: {
      bodyMapper: Mappers.Replica
    },
    202: {
      bodyMapper: Mappers.Replica
    },
    204: {
      bodyMapper: Mappers.Replica
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.replicaName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const restartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}/restart",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.SignalRReplicasRestartHeaders
    },
    201: {
      headersMapper: Mappers.SignalRReplicasRestartHeaders
    },
    202: {
      headersMapper: Mappers.SignalRReplicasRestartHeaders
    },
    204: {
      headersMapper: Mappers.SignalRReplicasRestartHeaders
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
    Parameters.resourceName,
    Parameters.replicaName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReplicaList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};