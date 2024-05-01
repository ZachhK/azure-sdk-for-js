/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  SAPDiscoverySite as SAPDiscoverySiteMapper,
  SAPDiscoverySiteTagsUpdate as SAPDiscoverySiteTagsUpdateMapper,
  SAPInstance as SAPInstanceMapper,
  SAPInstanceTagsUpdate as SAPInstanceTagsUpdateMapper,
  ServerInstance as ServerInstanceMapper,
  UpdateServerInstanceRequest as UpdateServerInstanceRequestMapper,
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-10-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const sapDiscoverySiteName: OperationURLParameter = {
  parameterPath: "sapDiscoverySiteName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]{0,78}[a-zA-Z0-9_]$"),
    },
    serializedName: "sapDiscoverySiteName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const resource: OperationParameter = {
  parameterPath: "resource",
  mapper: SAPDiscoverySiteMapper,
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: SAPDiscoverySiteTagsUpdateMapper,
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const sapInstanceName: OperationURLParameter = {
  parameterPath: "sapInstanceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]{0,78}[a-zA-Z0-9_]$"),
    },
    serializedName: "sapInstanceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource1: OperationParameter = {
  parameterPath: "resource",
  mapper: SAPInstanceMapper,
};

export const properties1: OperationParameter = {
  parameterPath: "properties",
  mapper: SAPInstanceTagsUpdateMapper,
};

export const serverInstanceName: OperationURLParameter = {
  parameterPath: "serverInstanceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]{0,78}[a-zA-Z0-9_]$"),
    },
    serializedName: "serverInstanceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource2: OperationParameter = {
  parameterPath: "resource",
  mapper: ServerInstanceMapper,
};

export const properties2: OperationParameter = {
  parameterPath: "properties",
  mapper: UpdateServerInstanceRequestMapper,
};
