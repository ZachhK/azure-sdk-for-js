/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters.js";
import * as Mappers from "./models/mappers.js";
import { GeneratedClientContext } from "./generatedClientContext.js";
import {
  GeneratedClientOptionalParams,
  EventGridEvent,
  GeneratedClientPublishEventGridEventsOptionalParams,
  CloudEvent,
  GeneratedClientPublishCloudEventEventsOptionalParams,
  GeneratedClientPublishCustomEventEventsOptionalParams
} from "./models/index.js";

/** @internal */
export class GeneratedClient extends GeneratedClientContext {
  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param options The parameter options
   */
  constructor(options?: GeneratedClientOptionalParams) {
    super(options);
  }

  /**
   * Publishes a batch of events to an Azure Event Grid topic.
   * @param topicHostname The host name of the topic, e.g. topic1.westus2-1.eventgrid.azure.net
   * @param events An array of events to be published to Event Grid.
   * @param options The options parameters.
   */
  publishEventGridEvents(
    topicHostname: string,
    events: EventGridEvent[],
    options?: GeneratedClientPublishEventGridEventsOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { topicHostname, events, options },
      publishEventGridEventsOperationSpec
    );
  }

  /**
   * Publishes a batch of events to an Azure Event Grid topic.
   * @param topicHostname The host name of the topic, e.g. topic1.westus2-1.eventgrid.azure.net
   * @param events An array of events to be published to Event Grid.
   * @param options The options parameters.
   */
  publishCloudEventEvents(
    topicHostname: string,
    events: CloudEvent[],
    options?: GeneratedClientPublishCloudEventEventsOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { topicHostname, events, options },
      publishCloudEventEventsOperationSpec
    );
  }

  /**
   * Publishes a batch of events to an Azure Event Grid topic.
   * @param topicHostname The host name of the topic, e.g. topic1.westus2-1.eventgrid.azure.net
   * @param events An array of events to be published to Event Grid.
   * @param options The options parameters.
   */
  publishCustomEventEvents(
    topicHostname: string,
    events: any[],
    options?: GeneratedClientPublishCustomEventEventsOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { topicHostname, events, options },
      publishCustomEventEventsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const publishEventGridEventsOperationSpec: coreClient.OperationSpec = {
  path: "",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  requestBody: Parameters.events,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.topicHostname],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const publishCloudEventEventsOperationSpec: coreClient.OperationSpec = {
  path: "",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  requestBody: Parameters.events1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.topicHostname],
  headerParameters: [Parameters.contentType1, Parameters.aegChannelName],
  mediaType: "json",
  serializer
};
const publishCustomEventEventsOperationSpec: coreClient.OperationSpec = {
  path: "",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  requestBody: Parameters.events2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.topicHostname],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
