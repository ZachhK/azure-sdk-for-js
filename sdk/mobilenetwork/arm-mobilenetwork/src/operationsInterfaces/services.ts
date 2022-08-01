/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Service,
  ServicesListByMobileNetworkOptionalParams,
  ServicesDeleteOptionalParams,
  ServicesGetOptionalParams,
  ServicesGetResponse,
  ServicesCreateOrUpdateOptionalParams,
  ServicesCreateOrUpdateResponse,
  TagsObject,
  ServicesUpdateTagsOptionalParams,
  ServicesUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Services. */
export interface Services {
  /**
   * Gets all the services in a mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param options The options parameters.
   */
  listByMobileNetwork(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: ServicesListByMobileNetworkOptionalParams
  ): PagedAsyncIterableIterator<Service>;
  /**
   * Deletes the specified service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param serviceName The name of the service. You must not use any of the following reserved strings -
   *                    `default`, `requested` or `service`
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    mobileNetworkName: string,
    serviceName: string,
    options?: ServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param serviceName The name of the service. You must not use any of the following reserved strings -
   *                    `default`, `requested` or `service`
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    serviceName: string,
    options?: ServicesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets information about the specified service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param serviceName The name of the service. You must not use any of the following reserved strings -
   *                    `default`, `requested` or `service`
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    mobileNetworkName: string,
    serviceName: string,
    options?: ServicesGetOptionalParams
  ): Promise<ServicesGetResponse>;
  /**
   * Creates or updates a service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param serviceName The name of the service. You must not use any of the following reserved strings -
   *                    `default`, `requested` or `service`
   * @param parameters Parameters supplied to the create or update service operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    mobileNetworkName: string,
    serviceName: string,
    parameters: Service,
    options?: ServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServicesCreateOrUpdateResponse>,
      ServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param serviceName The name of the service. You must not use any of the following reserved strings -
   *                    `default`, `requested` or `service`
   * @param parameters Parameters supplied to the create or update service operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    serviceName: string,
    parameters: Service,
    options?: ServicesCreateOrUpdateOptionalParams
  ): Promise<ServicesCreateOrUpdateResponse>;
  /**
   * Updates service tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param serviceName The name of the service. You must not use any of the following reserved strings -
   *                    `default`, `requested` or `service`
   * @param parameters Parameters supplied to update service tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    mobileNetworkName: string,
    serviceName: string,
    parameters: TagsObject,
    options?: ServicesUpdateTagsOptionalParams
  ): Promise<ServicesUpdateTagsResponse>;
}
