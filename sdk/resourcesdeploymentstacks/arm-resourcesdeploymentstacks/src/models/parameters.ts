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
  OperationQueryParameter
} from "@azure/core-client";
import { DeploymentStack as DeploymentStackMapper } from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-08-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const managementGroupId: OperationURLParameter = {
  parameterPath: "managementGroupId",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "managementGroupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const deploymentStack: OperationParameter = {
  parameterPath: "deploymentStack",
  mapper: DeploymentStackMapper
};

export const deploymentStackName: OperationURLParameter = {
  parameterPath: "deploymentStackName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "deploymentStackName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const unmanageActionResources: OperationQueryParameter = {
  parameterPath: ["options", "unmanageActionResources"],
  mapper: {
    serializedName: "unmanageAction.Resources",
    type: {
      name: "String"
    }
  }
};

export const unmanageActionResourceGroups: OperationQueryParameter = {
  parameterPath: ["options", "unmanageActionResourceGroups"],
  mapper: {
    serializedName: "unmanageAction.ResourceGroups",
    type: {
      name: "String"
    }
  }
};

export const unmanageActionManagementGroups: OperationQueryParameter = {
  parameterPath: ["options", "unmanageActionManagementGroups"],
  mapper: {
    serializedName: "unmanageAction.ManagementGroups",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};