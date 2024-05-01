/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Application,
  ApplicationListOptionalParams,
  ApplicationCreateOptionalParams,
  ApplicationCreateResponse,
  ApplicationDeleteOptionalParams,
  ApplicationGetOptionalParams,
  ApplicationGetResponse,
  ApplicationUpdateOptionalParams,
  ApplicationUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApplicationOperations. */
export interface ApplicationOperations {
  /**
   * Lists all of the applications in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: ApplicationListOptionalParams,
  ): PagedAsyncIterableIterator<Application>;
  /**
   * Adds an application to the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    options?: ApplicationCreateOptionalParams,
  ): Promise<ApplicationCreateResponse>;
  /**
   * Deletes an application.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    options?: ApplicationDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets information about the specified application.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    options?: ApplicationGetOptionalParams,
  ): Promise<ApplicationGetResponse>;
  /**
   * Updates settings for the specified application.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param parameters The parameters for the request.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    parameters: Application,
    options?: ApplicationUpdateOptionalParams,
  ): Promise<ApplicationUpdateResponse>;
}
