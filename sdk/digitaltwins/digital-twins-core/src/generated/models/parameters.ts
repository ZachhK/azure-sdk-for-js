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
import {
  QuerySpecification as QuerySpecificationMapper,
  EventRoute as EventRouteMapper
} from "../models/mappers.js";

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

export const models: OperationParameter = {
  parameterPath: ["options", "models"],
  mapper: {
    constraints: {
      MinItems: 1,
      UniqueItems: true
    },
    serializedName: "models",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-10-31",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const dependenciesFor: OperationQueryParameter = {
  parameterPath: ["options", "dependenciesFor"],
  mapper: {
    serializedName: "dependenciesFor",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const includeModelDefinition: OperationQueryParameter = {
  parameterPath: ["options", "includeModelDefinition"],
  mapper: {
    defaultValue: false,
    serializedName: "includeModelDefinition",
    type: {
      name: "Boolean"
    }
  }
};

export const resultsPerPage: OperationParameter = {
  parameterPath: ["options", "resultsPerPage"],
  mapper: {
    serializedName: "max-items-per-page",
    type: {
      name: "Number"
    }
  }
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json-patch+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const updateModel: OperationParameter = {
  parameterPath: "updateModel",
  mapper: {
    serializedName: "updateModel",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
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

export const querySpecification: OperationParameter = {
  parameterPath: "querySpecification",
  mapper: QuerySpecificationMapper
};

export const twin: OperationParameter = {
  parameterPath: "twin",
  mapper: {
    serializedName: "twin",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } }
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const patchDocument: OperationParameter = {
  parameterPath: "patchDocument",
  mapper: {
    serializedName: "patchDocument",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const relationshipId: OperationURLParameter = {
  parameterPath: "relationshipId",
  mapper: {
    serializedName: "relationshipId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const relationship: OperationParameter = {
  parameterPath: "relationship",
  mapper: {
    serializedName: "relationship",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } }
    }
  }
};

export const relationshipName: OperationQueryParameter = {
  parameterPath: ["options", "relationshipName"],
  mapper: {
    serializedName: "relationshipName",
    type: {
      name: "String"
    }
  }
};

export const telemetry: OperationParameter = {
  parameterPath: "telemetry",
  mapper: {
    serializedName: "telemetry",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } }
    }
  }
};

export const messageId: OperationParameter = {
  parameterPath: "messageId",
  mapper: {
    serializedName: "Message-Id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const telemetrySourceTime: OperationParameter = {
  parameterPath: ["options", "telemetrySourceTime"],
  mapper: {
    serializedName: "Telemetry-Source-Time",
    type: {
      name: "String"
    }
  }
};

export const componentPath: OperationURLParameter = {
  parameterPath: "componentPath",
  mapper: {
    serializedName: "componentPath",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const eventRoute: OperationParameter = {
  parameterPath: ["options", "eventRoute"],
  mapper: EventRouteMapper
};
