/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  WebPubSubHub,
  WebPubSubHubsListOptionalParams,
  WebPubSubHubsGetOptionalParams,
  WebPubSubHubsGetResponse,
  WebPubSubHubsCreateOrUpdateOptionalParams,
  WebPubSubHubsCreateOrUpdateResponse,
  WebPubSubHubsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WebPubSubHubs. */
export interface WebPubSubHubs {
  /**
   * List hub settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubHubsListOptionalParams,
  ): PagedAsyncIterableIterator<WebPubSubHub>;
  /**
   * Get a hub setting.
   * @param hubName The hub name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  get(
    hubName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubHubsGetOptionalParams,
  ): Promise<WebPubSubHubsGetResponse>;
  /**
   * Create or update a hub setting.
   * @param hubName The hub name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param parameters The resource of WebPubSubHub and its properties
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    hubName: string,
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubHub,
    options?: WebPubSubHubsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WebPubSubHubsCreateOrUpdateResponse>,
      WebPubSubHubsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a hub setting.
   * @param hubName The hub name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param parameters The resource of WebPubSubHub and its properties
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    hubName: string,
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubHub,
    options?: WebPubSubHubsCreateOrUpdateOptionalParams,
  ): Promise<WebPubSubHubsCreateOrUpdateResponse>;
  /**
   * Delete a hub setting.
   * @param hubName The hub name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDelete(
    hubName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubHubsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a hub setting.
   * @param hubName The hub name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    hubName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubHubsDeleteOptionalParams,
  ): Promise<void>;
}
