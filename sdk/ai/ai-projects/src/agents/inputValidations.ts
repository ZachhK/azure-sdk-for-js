// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolDefinition, VectorStoreDataSource } from "../generated/src/models.js";

enum Tools {
  CodeInterpreter = "code_interpreter",
  FileSearch = "file_search",
  Function = "function",
  BingGrounding = "bing_grounding",
  MicrosoftFabric = "microsoft_fabric",
  SharepointGrounding = "sharepoint_grounding",
  AzureAISearch = "azure_ai_search",
}

export function validateVectorStoreDataType(data_sources: VectorStoreDataSource[]): void {
  if (!data_sources.some(value => !["uri_asset", "id_asset"].includes(value.type))) {
    throw new Error("Vector store data type must be one of 'uri_asset', 'id_asset'");
  }
}

export function validateLimit(limit: number): void {
  if (limit < 1 || limit > 100) {
    throw new Error("Limit must be between 1 and 100");
  }
}

export function validateOrder(order: string): void {
  if (!["asc", "desc"].includes(order)) {
    throw new Error("Order must be 'asc' or 'desc'");
  }
}

export function validateTools(value: Array<ToolDefinition>): void {
    if (value.some(tool => !Object.values(Tools).includes(tool as unknown as Tools))) {
      throw new Error("Tool type must be one of 'code_interpreter', 'file_search', 'function', 'bing_grounding', 'microsoft_fabric', 'sharepoint_grounding', 'azure_ai_search'");
    }
}

export function validateMetadata(metadata: Record<string, string>): void {
  if (Object.keys(metadata).length > 16) {
      throw new Error("Only 16 key/value pairs are allowed");
  }
  if (Object.keys(metadata).some(value => value.length > 64)) {
    throw new Error("Keys must be less than 64 characters");
  }
  if (Object.values(metadata).some(value => value.length > 512)) {
    throw new Error("Values must be less than 512 characters");
  }
}
