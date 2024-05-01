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
  SupportedApmType,
  ServicesListSupportedApmTypesOptionalParams,
  ServiceResource,
  ServicesListBySubscriptionOptionalParams,
  ServicesListOptionalParams,
  SupportedServerVersion,
  ServicesListSupportedServerVersionsOptionalParams,
  ServicesGetOptionalParams,
  ServicesGetResponse,
  ServicesCreateOrUpdateOptionalParams,
  ServicesCreateOrUpdateResponse,
  ServicesDeleteOptionalParams,
  ServicesUpdateOptionalParams,
  ServicesUpdateResponse,
  ServicesListTestKeysOptionalParams,
  ServicesListTestKeysResponse,
  RegenerateTestKeyRequestPayload,
  ServicesRegenerateTestKeyOptionalParams,
  ServicesRegenerateTestKeyResponse,
  ServicesDisableTestEndpointOptionalParams,
  ServicesEnableTestEndpointOptionalParams,
  ServicesEnableTestEndpointResponse,
  ServicesStopOptionalParams,
  ServicesStartOptionalParams,
  ServicesFlushVnetDnsSettingOptionalParams,
  ServicesFlushVnetDnsSettingResponse,
  ServicesListGloballyEnabledApmsOptionalParams,
  ServicesListGloballyEnabledApmsResponse,
  ApmReference,
  ServicesEnableApmGloballyOptionalParams,
  ServicesDisableApmGloballyOptionalParams,
  NameAvailabilityParameters,
  ServicesCheckNameAvailabilityOptionalParams,
  ServicesCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Services. */
export interface Services {
  /**
   * List supported APM types for a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  listSupportedApmTypes(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesListSupportedApmTypesOptionalParams
  ): PagedAsyncIterableIterator<SupportedApmType>;
  /**
   * Handles requests to list all resources in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ServicesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ServiceResource>;
  /**
   * Handles requests to list all resources in a resource group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: ServicesListOptionalParams
  ): PagedAsyncIterableIterator<ServiceResource>;
  /**
   * Lists all of the available server versions supported by Microsoft.AppPlatform provider.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  listSupportedServerVersions(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesListSupportedServerVersionsOptionalParams
  ): PagedAsyncIterableIterator<SupportedServerVersion>;
  /**
   * Get a Service and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesGetOptionalParams
  ): Promise<ServicesGetResponse>;
  /**
   * Create a new Service or update an exiting Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param resource Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    resource: ServiceResource,
    options?: ServicesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServicesCreateOrUpdateResponse>,
      ServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Create a new Service or update an exiting Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param resource Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    resource: ServiceResource,
    options?: ServicesCreateOrUpdateOptionalParams
  ): Promise<ServicesCreateOrUpdateResponse>;
  /**
   * Operation to delete a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Operation to delete a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Operation to update an exiting Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param resource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serviceName: string,
    resource: ServiceResource,
    options?: ServicesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServicesUpdateResponse>,
      ServicesUpdateResponse
    >
  >;
  /**
   * Operation to update an exiting Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param resource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    resource: ServiceResource,
    options?: ServicesUpdateOptionalParams
  ): Promise<ServicesUpdateResponse>;
  /**
   * List test keys for a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  listTestKeys(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesListTestKeysOptionalParams
  ): Promise<ServicesListTestKeysResponse>;
  /**
   * Regenerate a test key for a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param regenerateTestKeyRequest Parameters for the operation
   * @param options The options parameters.
   */
  regenerateTestKey(
    resourceGroupName: string,
    serviceName: string,
    regenerateTestKeyRequest: RegenerateTestKeyRequestPayload,
    options?: ServicesRegenerateTestKeyOptionalParams
  ): Promise<ServicesRegenerateTestKeyResponse>;
  /**
   * Disable test endpoint functionality for a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  disableTestEndpoint(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesDisableTestEndpointOptionalParams
  ): Promise<void>;
  /**
   * Enable test endpoint functionality for a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  enableTestEndpoint(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesEnableTestEndpointOptionalParams
  ): Promise<ServicesEnableTestEndpointResponse>;
  /**
   * Stop a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesStopOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Stop a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesStopOptionalParams
  ): Promise<void>;
  /**
   * Start a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesStartOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Start a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesStartOptionalParams
  ): Promise<void>;
  /**
   * Flush Virtual Network DNS settings for a VNET injected Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  beginFlushVnetDnsSetting(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesFlushVnetDnsSettingOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServicesFlushVnetDnsSettingResponse>,
      ServicesFlushVnetDnsSettingResponse
    >
  >;
  /**
   * Flush Virtual Network DNS settings for a VNET injected Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  beginFlushVnetDnsSettingAndWait(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesFlushVnetDnsSettingOptionalParams
  ): Promise<ServicesFlushVnetDnsSettingResponse>;
  /**
   * List globally enabled APMs for a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  listGloballyEnabledApms(
    resourceGroupName: string,
    serviceName: string,
    options?: ServicesListGloballyEnabledApmsOptionalParams
  ): Promise<ServicesListGloballyEnabledApmsResponse>;
  /**
   * Enable an APM globally.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apm The target APM for the enable operation
   * @param options The options parameters.
   */
  beginEnableApmGlobally(
    resourceGroupName: string,
    serviceName: string,
    apm: ApmReference,
    options?: ServicesEnableApmGloballyOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Enable an APM globally.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apm The target APM for the enable operation
   * @param options The options parameters.
   */
  beginEnableApmGloballyAndWait(
    resourceGroupName: string,
    serviceName: string,
    apm: ApmReference,
    options?: ServicesEnableApmGloballyOptionalParams
  ): Promise<void>;
  /**
   * Disable an APM globally.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apm The target APM for the disable operation
   * @param options The options parameters.
   */
  beginDisableApmGlobally(
    resourceGroupName: string,
    serviceName: string,
    apm: ApmReference,
    options?: ServicesDisableApmGloballyOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Disable an APM globally.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apm The target APM for the disable operation
   * @param options The options parameters.
   */
  beginDisableApmGloballyAndWait(
    resourceGroupName: string,
    serviceName: string,
    apm: ApmReference,
    options?: ServicesDisableApmGloballyOptionalParams
  ): Promise<void>;
  /**
   * Checks that the resource name is valid and is not already in use.
   * @param location the region
   * @param availabilityParameters Parameters supplied to the operation.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    availabilityParameters: NameAvailabilityParameters,
    options?: ServicesCheckNameAvailabilityOptionalParams
  ): Promise<ServicesCheckNameAvailabilityResponse>;
}
