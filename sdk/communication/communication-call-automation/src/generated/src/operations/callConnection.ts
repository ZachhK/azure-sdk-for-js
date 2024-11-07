/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { CallConnection } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { CallAutomationApiClient } from "../callAutomationApiClient.js";
import {
  CallParticipantInternal,
  CallConnectionGetParticipantsNextOptionalParams,
  CallConnectionGetParticipantsOptionalParams,
  CallConnectionGetParticipantsResponse,
  CallConnectionGetCallOptionalParams,
  CallConnectionGetCallResponse,
  CallConnectionHangupCallOptionalParams,
  CallConnectionTerminateCallOptionalParams,
  TransferToParticipantRequest,
  CallConnectionTransferToParticipantOptionalParams,
  CallConnectionTransferToParticipantResponse,
  AddParticipantRequest,
  CallConnectionAddParticipantOptionalParams,
  CallConnectionAddParticipantResponse,
  RemoveParticipantRequest,
  CallConnectionRemoveParticipantOptionalParams,
  CallConnectionRemoveParticipantResponse,
  MuteParticipantsRequest,
  CallConnectionMuteOptionalParams,
  CallConnectionMuteResponse,
  UnmuteParticipantsRequest,
  CallConnectionUnmuteOptionalParams,
  CallConnectionUnmuteResponse,
  CancelAddParticipantRequest,
  CallConnectionCancelAddParticipantOptionalParams,
  CallConnectionCancelAddParticipantResponse,
  CallConnectionGetParticipantOptionalParams,
  CallConnectionGetParticipantResponse,
  CallConnectionGetParticipantsNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing CallConnection operations. */
export class CallConnectionImpl implements CallConnection {
  private readonly client: CallAutomationApiClient;

  /**
   * Initialize a new instance of the class CallConnection class.
   * @param client Reference to the service client
   */
  constructor(client: CallAutomationApiClient) {
    this.client = client;
  }

  /**
   * Get participants from a call. Recording and transcription bots are omitted from this list.
   * @param callConnectionId The call connection Id
   * @param options The options parameters.
   */
  public listParticipants(
    callConnectionId: string,
    options?: CallConnectionGetParticipantsOptionalParams,
  ): PagedAsyncIterableIterator<CallParticipantInternal> {
    const iter = this.getParticipantsPagingAll(callConnectionId, options);
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
        return this.getParticipantsPagingPage(
          callConnectionId,
          options,
          settings,
        );
      },
    };
  }

  private async *getParticipantsPagingPage(
    callConnectionId: string,
    options?: CallConnectionGetParticipantsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<CallParticipantInternal[]> {
    let result: CallConnectionGetParticipantsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getParticipants(callConnectionId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getParticipantsNext(
        callConnectionId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getParticipantsPagingAll(
    callConnectionId: string,
    options?: CallConnectionGetParticipantsOptionalParams,
  ): AsyncIterableIterator<CallParticipantInternal> {
    for await (const page of this.getParticipantsPagingPage(
      callConnectionId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get the detail properties of an ongoing call.
   * @param callConnectionId The call connection id.
   * @param options The options parameters.
   */
  getCall(
    callConnectionId: string,
    options?: CallConnectionGetCallOptionalParams,
  ): Promise<CallConnectionGetCallResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, options },
      getCallOperationSpec,
    );
  }

  /**
   * Hang up call automation service from the call. This will make call automation service leave the
   * call, but does not terminate if there are more than 1 caller in the call.
   * @param callConnectionId The call connection id.
   * @param options The options parameters.
   */
  hangupCall(
    callConnectionId: string,
    options?: CallConnectionHangupCallOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { callConnectionId, options },
      hangupCallOperationSpec,
    );
  }

  /**
   * Terminate a call using CallConnectionId.
   * @param callConnectionId The terminate call request.
   * @param options The options parameters.
   */
  terminateCall(
    callConnectionId: string,
    options?: CallConnectionTerminateCallOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { callConnectionId, options },
      terminateCallOperationSpec,
    );
  }

  /**
   * Transfer the call to a participant.
   * @param callConnectionId The call connection id.
   * @param transferToParticipantRequest The transfer to participant request.
   * @param options The options parameters.
   */
  transferToParticipant(
    callConnectionId: string,
    transferToParticipantRequest: TransferToParticipantRequest,
    options?: CallConnectionTransferToParticipantOptionalParams,
  ): Promise<CallConnectionTransferToParticipantResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, transferToParticipantRequest, options },
      transferToParticipantOperationSpec,
    );
  }

  /**
   * Get participants from a call. Recording and transcription bots are omitted from this list.
   * @param callConnectionId The call connection Id
   * @param options The options parameters.
   */
  private _getParticipants(
    callConnectionId: string,
    options?: CallConnectionGetParticipantsOptionalParams,
  ): Promise<CallConnectionGetParticipantsResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, options },
      getParticipantsOperationSpec,
    );
  }

  /**
   * Add a participant to the call.
   * @param callConnectionId The call connection Id
   * @param addParticipantRequest The request payload for adding participant to the call.
   * @param options The options parameters.
   */
  addParticipant(
    callConnectionId: string,
    addParticipantRequest: AddParticipantRequest,
    options?: CallConnectionAddParticipantOptionalParams,
  ): Promise<CallConnectionAddParticipantResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, addParticipantRequest, options },
      addParticipantOperationSpec,
    );
  }

  /**
   * Remove a participant from the call using identifier.
   * @param callConnectionId The call connection id.
   * @param removeParticipantRequest The participant to be removed from the call.
   * @param options The options parameters.
   */
  removeParticipant(
    callConnectionId: string,
    removeParticipantRequest: RemoveParticipantRequest,
    options?: CallConnectionRemoveParticipantOptionalParams,
  ): Promise<CallConnectionRemoveParticipantResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, removeParticipantRequest, options },
      removeParticipantOperationSpec,
    );
  }

  /**
   * Mute participants from the call using identifier.
   * @param callConnectionId The call connection id.
   * @param muteParticipantsRequest The participants to be muted from the call.
   * @param options The options parameters.
   */
  mute(
    callConnectionId: string,
    muteParticipantsRequest: MuteParticipantsRequest,
    options?: CallConnectionMuteOptionalParams,
  ): Promise<CallConnectionMuteResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, muteParticipantsRequest, options },
      muteOperationSpec,
    );
  }

  /**
   * Unmute participants from the call using identifier.
   * @param callConnectionId The call connection id.
   * @param unmuteParticipantsRequest The participants to be unmuted from the call.
   * @param options The options parameters.
   */
  unmute(
    callConnectionId: string,
    unmuteParticipantsRequest: UnmuteParticipantsRequest,
    options?: CallConnectionUnmuteOptionalParams,
  ): Promise<CallConnectionUnmuteResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, unmuteParticipantsRequest, options },
      unmuteOperationSpec,
    );
  }

  /**
   * Cancel add participant operation.
   * @param callConnectionId The call connection Id
   * @param cancelAddParticipantRequest Cancellation request.
   * @param options The options parameters.
   */
  cancelAddParticipant(
    callConnectionId: string,
    cancelAddParticipantRequest: CancelAddParticipantRequest,
    options?: CallConnectionCancelAddParticipantOptionalParams,
  ): Promise<CallConnectionCancelAddParticipantResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, cancelAddParticipantRequest, options },
      cancelAddParticipantOperationSpec,
    );
  }

  /**
   * Get participant from a call.
   * @param callConnectionId The call connection Id
   * @param participantRawId Raw id of the participant to retrieve.
   * @param options The options parameters.
   */
  getParticipant(
    callConnectionId: string,
    participantRawId: string,
    options?: CallConnectionGetParticipantOptionalParams,
  ): Promise<CallConnectionGetParticipantResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, participantRawId, options },
      getParticipantOperationSpec,
    );
  }

  /**
   * GetParticipantsNext
   * @param callConnectionId The call connection Id
   * @param nextLink The nextLink from the previous successful call to the GetParticipants method.
   * @param options The options parameters.
   */
  private _getParticipantsNext(
    callConnectionId: string,
    nextLink: string,
    options?: CallConnectionGetParticipantsNextOptionalParams,
  ): Promise<CallConnectionGetParticipantsNextResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, nextLink, options },
      getParticipantsNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getCallOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CallConnectionPropertiesInternal,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const hangupCallOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const terminateCallOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}:terminate",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent,
  ],
  serializer,
};
const transferToParticipantOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}:transferToParticipant",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.TransferCallResponse,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.transferToParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent,
  ],
  mediaType: "json",
  serializer,
};
const getParticipantsOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetParticipantsResponse,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const addParticipantOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:add",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.AddParticipantResponse,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.addParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent,
  ],
  mediaType: "json",
  serializer,
};
const removeParticipantOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:remove",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.RemoveParticipantResponse,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.removeParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent,
  ],
  mediaType: "json",
  serializer,
};
const muteOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:mute",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MuteParticipantsResult,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.muteParticipantsRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent,
  ],
  mediaType: "json",
  serializer,
};
const unmuteOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:unmute",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UnmuteParticipantsResponse,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.unmuteParticipantsRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent,
  ],
  mediaType: "json",
  serializer,
};
const cancelAddParticipantOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:cancelAddParticipant",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.CancelAddParticipantResponse,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.cancelAddParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent,
  ],
  mediaType: "json",
  serializer,
};
const getParticipantOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants/{participantRawId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CallParticipantInternal,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.callConnectionId,
    Parameters.participantRawId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getParticipantsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetParticipantsResponse,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.callConnectionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
