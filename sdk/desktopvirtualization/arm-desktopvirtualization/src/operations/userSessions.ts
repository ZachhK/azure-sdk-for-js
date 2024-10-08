/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { UserSessions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DesktopVirtualizationAPIClient } from "../desktopVirtualizationAPIClient";
import {
  UserSession,
  UserSessionsListByHostPoolNextOptionalParams,
  UserSessionsListByHostPoolOptionalParams,
  UserSessionsListByHostPoolResponse,
  UserSessionsListNextOptionalParams,
  UserSessionsListOptionalParams,
  UserSessionsListResponse,
  UserSessionsGetOptionalParams,
  UserSessionsGetResponse,
  UserSessionsDeleteOptionalParams,
  UserSessionsDisconnectOptionalParams,
  UserSessionsSendMessageOptionalParams,
  UserSessionsListByHostPoolNextResponse,
  UserSessionsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing UserSessions operations. */
export class UserSessionsImpl implements UserSessions {
  private readonly client: DesktopVirtualizationAPIClient;

  /**
   * Initialize a new instance of the class UserSessions class.
   * @param client Reference to the service client
   */
  constructor(client: DesktopVirtualizationAPIClient) {
    this.client = client;
  }

  /**
   * List userSessions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  public listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: UserSessionsListByHostPoolOptionalParams,
  ): PagedAsyncIterableIterator<UserSession> {
    const iter = this.listByHostPoolPagingAll(
      resourceGroupName,
      hostPoolName,
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
        return this.listByHostPoolPagingPage(
          resourceGroupName,
          hostPoolName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByHostPoolPagingPage(
    resourceGroupName: string,
    hostPoolName: string,
    options?: UserSessionsListByHostPoolOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<UserSession[]> {
    let result: UserSessionsListByHostPoolResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByHostPool(
        resourceGroupName,
        hostPoolName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByHostPoolNext(
        resourceGroupName,
        hostPoolName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByHostPoolPagingAll(
    resourceGroupName: string,
    hostPoolName: string,
    options?: UserSessionsListByHostPoolOptionalParams,
  ): AsyncIterableIterator<UserSession> {
    for await (const page of this.listByHostPoolPagingPage(
      resourceGroupName,
      hostPoolName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List userSessions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    options?: UserSessionsListOptionalParams,
  ): PagedAsyncIterableIterator<UserSession> {
    const iter = this.listPagingAll(
      resourceGroupName,
      hostPoolName,
      sessionHostName,
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
          hostPoolName,
          sessionHostName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    options?: UserSessionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<UserSession[]> {
    let result: UserSessionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        hostPoolName,
        sessionHostName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        hostPoolName,
        sessionHostName,
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
    hostPoolName: string,
    sessionHostName: string,
    options?: UserSessionsListOptionalParams,
  ): AsyncIterableIterator<UserSession> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      hostPoolName,
      sessionHostName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List userSessions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  private _listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: UserSessionsListByHostPoolOptionalParams,
  ): Promise<UserSessionsListByHostPoolResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, options },
      listByHostPoolOperationSpec,
    );
  }

  /**
   * Get a userSession.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param userSessionId The name of the user session within the specified session host
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    userSessionId: string,
    options?: UserSessionsGetOptionalParams,
  ): Promise<UserSessionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hostPoolName,
        sessionHostName,
        userSessionId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Remove a userSession.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param userSessionId The name of the user session within the specified session host
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    userSessionId: string,
    options?: UserSessionsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hostPoolName,
        sessionHostName,
        userSessionId,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * List userSessions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    options?: UserSessionsListOptionalParams,
  ): Promise<UserSessionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, sessionHostName, options },
      listOperationSpec,
    );
  }

  /**
   * Disconnect a userSession.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param userSessionId The name of the user session within the specified session host
   * @param options The options parameters.
   */
  disconnect(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    userSessionId: string,
    options?: UserSessionsDisconnectOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hostPoolName,
        sessionHostName,
        userSessionId,
        options,
      },
      disconnectOperationSpec,
    );
  }

  /**
   * Send a message to a user.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param userSessionId The name of the user session within the specified session host
   * @param options The options parameters.
   */
  sendMessage(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    userSessionId: string,
    options?: UserSessionsSendMessageOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hostPoolName,
        sessionHostName,
        userSessionId,
        options,
      },
      sendMessageOperationSpec,
    );
  }

  /**
   * ListByHostPoolNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param nextLink The nextLink from the previous successful call to the ListByHostPool method.
   * @param options The options parameters.
   */
  private _listByHostPoolNext(
    resourceGroupName: string,
    hostPoolName: string,
    nextLink: string,
    options?: UserSessionsListByHostPoolNextOptionalParams,
  ): Promise<UserSessionsListByHostPoolNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, nextLink, options },
      listByHostPoolNextOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    nextLink: string,
    options?: UserSessionsListNextOptionalParams,
  ): Promise<UserSessionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, sessionHostName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByHostPoolOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/userSessions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserSessionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.pageSize,
    Parameters.isDescending,
    Parameters.initialSkip,
    Parameters.filter,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserSession,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
    Parameters.sessionHostName,
    Parameters.userSessionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
    Parameters.sessionHostName,
    Parameters.userSessionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserSessionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.pageSize,
    Parameters.isDescending,
    Parameters.initialSkip,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
    Parameters.sessionHostName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const disconnectOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}/disconnect",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
    Parameters.sessionHostName,
    Parameters.userSessionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const sendMessageOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}/sendMessage",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.sendMessage,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
    Parameters.sessionHostName,
    Parameters.userSessionId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByHostPoolNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserSessionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserSessionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
    Parameters.sessionHostName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
