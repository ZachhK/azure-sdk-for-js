/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ContainerAppsBuildResource,
  ContainerAppsBuildsByContainerAppListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ContainerAppsBuildsByContainerApp. */
export interface ContainerAppsBuildsByContainerApp {
  /**
   * List Container Apps Build resources by Container App
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App the Build is associated.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsBuildsByContainerAppListOptionalParams,
  ): PagedAsyncIterableIterator<ContainerAppsBuildResource>;
}
