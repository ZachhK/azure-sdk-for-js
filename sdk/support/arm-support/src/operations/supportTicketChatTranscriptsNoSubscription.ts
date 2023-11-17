/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SupportTicketChatTranscriptsNoSubscription } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSupport } from "../microsoftSupport";
import {
  ChatTranscriptDetails,
  SupportTicketChatTranscriptsNoSubscriptionListNextOptionalParams,
  SupportTicketChatTranscriptsNoSubscriptionListOptionalParams,
  SupportTicketChatTranscriptsNoSubscriptionListResponse,
  SupportTicketChatTranscriptsNoSubscriptionListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SupportTicketChatTranscriptsNoSubscription operations. */
export class SupportTicketChatTranscriptsNoSubscriptionImpl
  implements SupportTicketChatTranscriptsNoSubscription {
  private readonly client: MicrosoftSupport;

  /**
   * Initialize a new instance of the class SupportTicketChatTranscriptsNoSubscription class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftSupport) {
    this.client = client;
  }

  /**
   * Lists all chat transcripts for a support ticket
   * @param supportTicketName Support ticket name
   * @param options The options parameters.
   */
  public list(
    supportTicketName: string,
    options?: SupportTicketChatTranscriptsNoSubscriptionListOptionalParams
  ): PagedAsyncIterableIterator<ChatTranscriptDetails> {
    const iter = this.listPagingAll(supportTicketName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(supportTicketName, options, settings);
      }
    };
  }

  private async *listPagingPage(
    supportTicketName: string,
    options?: SupportTicketChatTranscriptsNoSubscriptionListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ChatTranscriptDetails[]> {
    let result: SupportTicketChatTranscriptsNoSubscriptionListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(supportTicketName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        supportTicketName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    supportTicketName: string,
    options?: SupportTicketChatTranscriptsNoSubscriptionListOptionalParams
  ): AsyncIterableIterator<ChatTranscriptDetails> {
    for await (const page of this.listPagingPage(supportTicketName, options)) {
      yield* page;
    }
  }

  /**
   * Lists all chat transcripts for a support ticket
   * @param supportTicketName Support ticket name
   * @param options The options parameters.
   */
  private _list(
    supportTicketName: string,
    options?: SupportTicketChatTranscriptsNoSubscriptionListOptionalParams
  ): Promise<SupportTicketChatTranscriptsNoSubscriptionListResponse> {
    return this.client.sendOperationRequest(
      { supportTicketName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param supportTicketName Support ticket name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    supportTicketName: string,
    nextLink: string,
    options?: SupportTicketChatTranscriptsNoSubscriptionListNextOptionalParams
  ): Promise<SupportTicketChatTranscriptsNoSubscriptionListNextResponse> {
    return this.client.sendOperationRequest(
      { supportTicketName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Support/supportTickets/{supportTicketName}/chatTranscripts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatTranscriptsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.supportTicketName],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatTranscriptsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.supportTicketName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};