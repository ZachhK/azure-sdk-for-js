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
  Account,
  AccountsListBySubscriptionOptionalParams,
  AccountsListByResourceGroupOptionalParams,
  AccountsGetOptionalParams,
  AccountsGetResponse,
  AccountsCreateOrUpdateOptionalParams,
  AccountsCreateOrUpdateResponse,
  AccountUpdate,
  AccountsUpdateOptionalParams,
  AccountsUpdateResponse,
  AccountsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Accounts. */
export interface Accounts {
  /**
   * List Account resources by subscription ID
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AccountsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Account>;
  /**
   * List Account resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Account>;
  /**
   * Get a Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of account
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: AccountsGetOptionalParams
  ): Promise<AccountsGetResponse>;
  /**
   * Create a Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of account
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    resource: Account,
    options?: AccountsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AccountsCreateOrUpdateResponse>,
      AccountsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of account
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    resource: Account,
    options?: AccountsCreateOrUpdateOptionalParams
  ): Promise<AccountsCreateOrUpdateResponse>;
  /**
   * Update a Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of account
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    name: string,
    properties: AccountUpdate,
    options?: AccountsUpdateOptionalParams
  ): Promise<AccountsUpdateResponse>;
  /**
   * Delete a Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of account
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    name: string,
    options?: AccountsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of account
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    options?: AccountsDeleteOptionalParams
  ): Promise<void>;
}