/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DaprComponents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  DaprComponent,
  DaprComponentsListNextOptionalParams,
  DaprComponentsListOptionalParams,
  DaprComponentsListResponse,
  DaprComponentsGetOptionalParams,
  DaprComponentsGetResponse,
  DaprComponentsCreateOrUpdateOptionalParams,
  DaprComponentsCreateOrUpdateResponse,
  DaprComponentsDeleteOptionalParams,
  DaprComponentsListSecretsOptionalParams,
  DaprComponentsListSecretsResponse,
  DaprComponentsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DaprComponents operations. */
export class DaprComponentsImpl implements DaprComponents {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class DaprComponents class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the Dapr Components for a managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    environmentName: string,
    options?: DaprComponentsListOptionalParams,
  ): PagedAsyncIterableIterator<DaprComponent> {
    const iter = this.listPagingAll(
      resourceGroupName,
      environmentName,
      options,
    );
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
          environmentName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    environmentName: string,
    options?: DaprComponentsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DaprComponent[]> {
    let result: DaprComponentsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, environmentName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        environmentName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    environmentName: string,
    options?: DaprComponentsListOptionalParams,
  ): AsyncIterableIterator<DaprComponent> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      environmentName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get the Dapr Components for a managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    environmentName: string,
    options?: DaprComponentsListOptionalParams,
  ): Promise<DaprComponentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, options },
      listOperationSpec,
    );
  }

  /**
   * Get a dapr component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param componentName Name of the Dapr Component.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    componentName: string,
    options?: DaprComponentsGetOptionalParams,
  ): Promise<DaprComponentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, componentName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a Dapr Component in a Managed Environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param componentName Name of the Dapr Component.
   * @param daprComponentEnvelope Configuration details of the Dapr Component.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    componentName: string,
    daprComponentEnvelope: DaprComponent,
    options?: DaprComponentsCreateOrUpdateOptionalParams,
  ): Promise<DaprComponentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        componentName,
        daprComponentEnvelope,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Delete a Dapr Component from a Managed Environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param componentName Name of the Dapr Component.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    environmentName: string,
    componentName: string,
    options?: DaprComponentsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, componentName, options },
      deleteOperationSpec,
    );
  }

  /**
   * List secrets for a dapr component
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param componentName Name of the Dapr Component.
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    environmentName: string,
    componentName: string,
    options?: DaprComponentsListSecretsOptionalParams,
  ): Promise<DaprComponentsListSecretsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, componentName, options },
      listSecretsOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    environmentName: string,
    nextLink: string,
    options?: DaprComponentsListNextOptionalParams,
  ): Promise<DaprComponentsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponentsCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{componentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponent,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.componentName,
    Parameters.environmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{componentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponent,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.daprComponentEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.componentName,
    Parameters.environmentName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{componentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.componentName,
    Parameters.environmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSecretsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{componentName}/listSecrets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DaprSecretsCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.componentName,
    Parameters.environmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponentsCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.environmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
