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
  DraModel,
  DraListOptionalParams,
  DraGetOptionalParams,
  DraGetResponse,
  DraCreateOptionalParams,
  DraCreateResponse,
  DraDeleteOptionalParams,
  DraDeleteResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Dra. */
export interface Dra {
  /**
   * Gets the list of fabric agents in the given fabric.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    fabricName: string,
    options?: DraListOptionalParams
  ): PagedAsyncIterableIterator<DraModel>;
  /**
   * Gets the details of the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraGetOptionalParams
  ): Promise<DraGetResponse>;
  /**
   * Creates the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraCreateOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<DraCreateResponse>, DraCreateResponse>
  >;
  /**
   * Creates the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraCreateOptionalParams
  ): Promise<DraCreateResponse>;
  /**
   * Deletes the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraDeleteOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<DraDeleteResponse>, DraDeleteResponse>
  >;
  /**
   * Deletes the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    options?: DraDeleteOptionalParams
  ): Promise<DraDeleteResponse>;
}