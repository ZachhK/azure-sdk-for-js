/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PacketCoreControlPlaneVersion,
  PacketCoreControlPlaneVersionsListOptionalParams,
  PacketCoreControlPlaneVersionsGetOptionalParams,
  PacketCoreControlPlaneVersionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PacketCoreControlPlaneVersions. */
export interface PacketCoreControlPlaneVersions {
  /**
   * Lists all supported packet core control planes versions.
   * @param options The options parameters.
   */
  list(
    options?: PacketCoreControlPlaneVersionsListOptionalParams
  ): PagedAsyncIterableIterator<PacketCoreControlPlaneVersion>;
  /**
   * Gets information about the specified packet core control plane version.
   * @param versionName The name of the packet core control plane version.
   * @param options The options parameters.
   */
  get(
    versionName: string,
    options?: PacketCoreControlPlaneVersionsGetOptionalParams
  ): Promise<PacketCoreControlPlaneVersionsGetResponse>;
}
