/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { LogicalNetworksOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureStackHCIClient } from "../azureStackHCIClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  LogicalNetworks,
  LogicalNetworksListNextOptionalParams,
  LogicalNetworksListOptionalParams,
  LogicalNetworksListResponse,
  LogicalNetworksListAllNextOptionalParams,
  LogicalNetworksListAllOptionalParams,
  LogicalNetworksListAllResponse,
  LogicalNetworksGetOptionalParams,
  LogicalNetworksGetResponse,
  LogicalNetworksCreateOrUpdateOptionalParams,
  LogicalNetworksCreateOrUpdateResponse,
  LogicalNetworksDeleteOptionalParams,
  LogicalNetworksDeleteResponse,
  LogicalNetworksUpdateRequest,
  LogicalNetworksUpdateOptionalParams,
  LogicalNetworksUpdateResponse,
  LogicalNetworksListNextResponse,
  LogicalNetworksListAllNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LogicalNetworksOperations operations. */
export class LogicalNetworksOperationsImpl
  implements LogicalNetworksOperations {
  private readonly client: AzureStackHCIClient;

  /**
   * Initialize a new instance of the class LogicalNetworksOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureStackHCIClient) {
    this.client = client;
  }

  /**
   * Lists all of the logical networks in the specified resource group. Use the nextLink property in the
   * response to get the next page of logical networks.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: LogicalNetworksListOptionalParams
  ): PagedAsyncIterableIterator<LogicalNetworks> {
    const iter = this.listPagingAll(resourceGroupName, options);
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
        return this.listPagingPage(resourceGroupName, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: LogicalNetworksListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LogicalNetworks[]> {
    let result: LogicalNetworksListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
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
    options?: LogicalNetworksListOptionalParams
  ): AsyncIterableIterator<LogicalNetworks> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the logical networks in the specified subscription. Use the nextLink property in the
   * response to get the next page of logical networks.
   * @param options The options parameters.
   */
  public listAll(
    options?: LogicalNetworksListAllOptionalParams
  ): PagedAsyncIterableIterator<LogicalNetworks> {
    const iter = this.listAllPagingAll(options);
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
        return this.listAllPagingPage(options, settings);
      }
    };
  }

  private async *listAllPagingPage(
    options?: LogicalNetworksListAllOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LogicalNetworks[]> {
    let result: LogicalNetworksListAllResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAll(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAllPagingAll(
    options?: LogicalNetworksListAllOptionalParams
  ): AsyncIterableIterator<LogicalNetworks> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    logicalNetworkName: string,
    options?: LogicalNetworksGetOptionalParams
  ): Promise<LogicalNetworksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, logicalNetworkName, options },
      getOperationSpec
    );
  }

  /**
   * The operation to create or update a logical network. Please note some properties can be set only
   * during logical network creation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param logicalNetworks The logical network resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    logicalNetworkName: string,
    logicalNetworks: LogicalNetworks,
    options?: LogicalNetworksCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LogicalNetworksCreateOrUpdateResponse>,
      LogicalNetworksCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LogicalNetworksCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, logicalNetworkName, logicalNetworks, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      LogicalNetworksCreateOrUpdateResponse,
      OperationState<LogicalNetworksCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to create or update a logical network. Please note some properties can be set only
   * during logical network creation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param logicalNetworks The logical network resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    logicalNetworkName: string,
    logicalNetworks: LogicalNetworks,
    options?: LogicalNetworksCreateOrUpdateOptionalParams
  ): Promise<LogicalNetworksCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      logicalNetworkName,
      logicalNetworks,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete a logical network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    logicalNetworkName: string,
    options?: LogicalNetworksDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LogicalNetworksDeleteResponse>,
      LogicalNetworksDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LogicalNetworksDeleteResponse> => {
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
      args: { resourceGroupName, logicalNetworkName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      LogicalNetworksDeleteResponse,
      OperationState<LogicalNetworksDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to delete a logical network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    logicalNetworkName: string,
    options?: LogicalNetworksDeleteOptionalParams
  ): Promise<LogicalNetworksDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      logicalNetworkName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update a logical network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param logicalNetworks The logical network resource patch definition.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    logicalNetworkName: string,
    logicalNetworks: LogicalNetworksUpdateRequest,
    options?: LogicalNetworksUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LogicalNetworksUpdateResponse>,
      LogicalNetworksUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LogicalNetworksUpdateResponse> => {
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
      args: { resourceGroupName, logicalNetworkName, logicalNetworks, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      LogicalNetworksUpdateResponse,
      OperationState<LogicalNetworksUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to update a logical network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param logicalNetworks The logical network resource patch definition.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    logicalNetworkName: string,
    logicalNetworks: LogicalNetworksUpdateRequest,
    options?: LogicalNetworksUpdateOptionalParams
  ): Promise<LogicalNetworksUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      logicalNetworkName,
      logicalNetworks,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all of the logical networks in the specified resource group. Use the nextLink property in the
   * response to get the next page of logical networks.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: LogicalNetworksListOptionalParams
  ): Promise<LogicalNetworksListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * Lists all of the logical networks in the specified subscription. Use the nextLink property in the
   * response to get the next page of logical networks.
   * @param options The options parameters.
   */
  private _listAll(
    options?: LogicalNetworksListAllOptionalParams
  ): Promise<LogicalNetworksListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: LogicalNetworksListNextOptionalParams
  ): Promise<LogicalNetworksListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: LogicalNetworksListAllNextOptionalParams
  ): Promise<LogicalNetworksListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworks
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
    Parameters.logicalNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworks
    },
    201: {
      bodyMapper: Mappers.LogicalNetworks
    },
    202: {
      bodyMapper: Mappers.LogicalNetworks
    },
    204: {
      bodyMapper: Mappers.LogicalNetworks
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.logicalNetworks,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.logicalNetworkName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.LogicalNetworksDeleteHeaders
    },
    201: {
      headersMapper: Mappers.LogicalNetworksDeleteHeaders
    },
    202: {
      headersMapper: Mappers.LogicalNetworksDeleteHeaders
    },
    204: {
      headersMapper: Mappers.LogicalNetworksDeleteHeaders
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
    Parameters.logicalNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworks
    },
    201: {
      bodyMapper: Mappers.LogicalNetworks
    },
    202: {
      bodyMapper: Mappers.LogicalNetworks
    },
    204: {
      bodyMapper: Mappers.LogicalNetworks
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.logicalNetworks1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.logicalNetworkName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworksListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/logicalNetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworksListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworksListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworksListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};