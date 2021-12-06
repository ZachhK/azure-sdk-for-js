/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/outputsMappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClientContext } from "../streamAnalyticsManagementClientContext";

/** Class representing a Outputs. */
export class Outputs {
  private readonly client: StreamAnalyticsManagementClientContext;

  /**
   * Create a Outputs.
   * @param {StreamAnalyticsManagementClientContext} client Reference to the service client.
   */
  constructor(client: StreamAnalyticsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates an output or replaces an already existing output under an existing streaming job.
   * @param output The definition of the output that will be used to create a new output or replace
   * the existing one under the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param [options] The optional parameters
   * @returns Promise<Models.OutputsCreateOrReplaceResponse>
   */
  createOrReplace(output: Models.Output, resourceGroupName: string, jobName: string, outputName: string, options?: Models.OutputsCreateOrReplaceOptionalParams): Promise<Models.OutputsCreateOrReplaceResponse>;
  /**
   * @param output The definition of the output that will be used to create a new output or replace
   * the existing one under the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param callback The callback
   */
  createOrReplace(output: Models.Output, resourceGroupName: string, jobName: string, outputName: string, callback: msRest.ServiceCallback<Models.Output>): void;
  /**
   * @param output The definition of the output that will be used to create a new output or replace
   * the existing one under the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrReplace(output: Models.Output, resourceGroupName: string, jobName: string, outputName: string, options: Models.OutputsCreateOrReplaceOptionalParams, callback: msRest.ServiceCallback<Models.Output>): void;
  createOrReplace(output: Models.Output, resourceGroupName: string, jobName: string, outputName: string, options?: Models.OutputsCreateOrReplaceOptionalParams | msRest.ServiceCallback<Models.Output>, callback?: msRest.ServiceCallback<Models.Output>): Promise<Models.OutputsCreateOrReplaceResponse> {
    return this.client.sendOperationRequest(
      {
        output,
        resourceGroupName,
        jobName,
        outputName,
        options
      },
      createOrReplaceOperationSpec,
      callback) as Promise<Models.OutputsCreateOrReplaceResponse>;
  }

  /**
   * Updates an existing output under an existing streaming job. This can be used to partially update
   * (ie. update one or two properties) an output without affecting the rest the job or output
   * definition.
   * @param output An Output object. The properties specified here will overwrite the corresponding
   * properties in the existing output (ie. Those properties will be updated). Any properties that
   * are set to null here will mean that the corresponding property in the existing output will
   * remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param [options] The optional parameters
   * @returns Promise<Models.OutputsUpdateResponse>
   */
  update(output: Models.Output, resourceGroupName: string, jobName: string, outputName: string, options?: Models.OutputsUpdateOptionalParams): Promise<Models.OutputsUpdateResponse>;
  /**
   * @param output An Output object. The properties specified here will overwrite the corresponding
   * properties in the existing output (ie. Those properties will be updated). Any properties that
   * are set to null here will mean that the corresponding property in the existing output will
   * remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param callback The callback
   */
  update(output: Models.Output, resourceGroupName: string, jobName: string, outputName: string, callback: msRest.ServiceCallback<Models.Output>): void;
  /**
   * @param output An Output object. The properties specified here will overwrite the corresponding
   * properties in the existing output (ie. Those properties will be updated). Any properties that
   * are set to null here will mean that the corresponding property in the existing output will
   * remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(output: Models.Output, resourceGroupName: string, jobName: string, outputName: string, options: Models.OutputsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Output>): void;
  update(output: Models.Output, resourceGroupName: string, jobName: string, outputName: string, options?: Models.OutputsUpdateOptionalParams | msRest.ServiceCallback<Models.Output>, callback?: msRest.ServiceCallback<Models.Output>): Promise<Models.OutputsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        output,
        resourceGroupName,
        jobName,
        outputName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.OutputsUpdateResponse>;
  }

  /**
   * Deletes an output from the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, jobName: string, outputName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, jobName: string, outputName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, jobName: string, outputName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, jobName: string, outputName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        outputName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets details about the specified output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param [options] The optional parameters
   * @returns Promise<Models.OutputsGetResponse>
   */
  get(resourceGroupName: string, jobName: string, outputName: string, options?: msRest.RequestOptionsBase): Promise<Models.OutputsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, outputName: string, callback: msRest.ServiceCallback<Models.Output>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, outputName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Output>): void;
  get(resourceGroupName: string, jobName: string, outputName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Output>, callback?: msRest.ServiceCallback<Models.Output>): Promise<Models.OutputsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        outputName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OutputsGetResponse>;
  }

  /**
   * Lists all of the outputs under the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<Models.OutputsListByStreamingJobResponse>
   */
  listByStreamingJob(resourceGroupName: string, jobName: string, options?: Models.OutputsListByStreamingJobOptionalParams): Promise<Models.OutputsListByStreamingJobResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param callback The callback
   */
  listByStreamingJob(resourceGroupName: string, jobName: string, callback: msRest.ServiceCallback<Models.OutputListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStreamingJob(resourceGroupName: string, jobName: string, options: Models.OutputsListByStreamingJobOptionalParams, callback: msRest.ServiceCallback<Models.OutputListResult>): void;
  listByStreamingJob(resourceGroupName: string, jobName: string, options?: Models.OutputsListByStreamingJobOptionalParams | msRest.ServiceCallback<Models.OutputListResult>, callback?: msRest.ServiceCallback<Models.OutputListResult>): Promise<Models.OutputsListByStreamingJobResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        options
      },
      listByStreamingJobOperationSpec,
      callback) as Promise<Models.OutputsListByStreamingJobResponse>;
  }

  /**
   * Tests whether an output’s datasource is reachable and usable by the Azure Stream Analytics
   * service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param [options] The optional parameters
   * @returns Promise<Models.OutputsTestResponse>
   */
  test(resourceGroupName: string, jobName: string, outputName: string, options?: Models.OutputsTestOptionalParams): Promise<Models.OutputsTestResponse> {
    return this.beginTest(resourceGroupName,jobName,outputName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.OutputsTestResponse>;
  }

  /**
   * Tests whether an output’s datasource is reachable and usable by the Azure Stream Analytics
   * service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTest(resourceGroupName: string, jobName: string, outputName: string, options?: Models.OutputsBeginTestOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        jobName,
        outputName,
        options
      },
      beginTestOperationSpec,
      options);
  }

  /**
   * Lists all of the outputs under the specified streaming job.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OutputsListByStreamingJobNextResponse>
   */
  listByStreamingJobNext(nextPageLink: string, options?: Models.OutputsListByStreamingJobNextOptionalParams): Promise<Models.OutputsListByStreamingJobNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByStreamingJobNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OutputListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStreamingJobNext(nextPageLink: string, options: Models.OutputsListByStreamingJobNextOptionalParams, callback: msRest.ServiceCallback<Models.OutputListResult>): void;
  listByStreamingJobNext(nextPageLink: string, options?: Models.OutputsListByStreamingJobNextOptionalParams | msRest.ServiceCallback<Models.OutputListResult>, callback?: msRest.ServiceCallback<Models.OutputListResult>): Promise<Models.OutputsListByStreamingJobNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByStreamingJobNextOperationSpec,
      callback) as Promise<Models.OutputsListByStreamingJobNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrReplaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "output",
    mapper: {
      ...Mappers.Output,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Output,
      headersMapper: Mappers.OutputsCreateOrReplaceHeaders
    },
    201: {
      bodyMapper: Mappers.Output,
      headersMapper: Mappers.OutputsCreateOrReplaceHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.OutputsCreateOrReplaceHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "output",
    mapper: {
      ...Mappers.Output,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Output,
      headersMapper: Mappers.OutputsUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.OutputsUpdateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Output,
      headersMapper: Mappers.OutputsGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.OutputsGetHeaders
    }
  },
  serializer
};

const listByStreamingJobOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.select,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OutputListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginTestOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}/test",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "output"
    ],
    mapper: Mappers.Output
  },
  responses: {
    200: {
      bodyMapper: Mappers.ResourceTestStatus
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByStreamingJobNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.select,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OutputListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
