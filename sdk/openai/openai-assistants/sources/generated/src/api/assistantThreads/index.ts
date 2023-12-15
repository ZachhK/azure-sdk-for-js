// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AssistantThreadCreationOptions,
  AssistantThread,
  ThreadDeletionStatus,
} from "../../models/models.js";
import {
  AssistantsContext as Client,
  CreateThread200Response,
  DeleteThread200Response,
  ModifyThread200Response,
  RetrieveThread200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AssistantThreadsCreateThreadOptions,
  AssistantThreadsRetrieveThreadOptions,
  AssistantThreadsModifyThreadOptions,
  AssistantThreadsDeleteThreadOptions,
} from "../../models/options.js";

export function _createThreadSend(
  context: Client,
  body: AssistantThreadCreationOptions,
  options: AssistantThreadsCreateThreadOptions = { requestOptions: {} }
): StreamableMethod<CreateThread200Response> {
  return context
    .path("/threads")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: !body["messages"]
          ? body["messages"]
          : body["messages"].map((p) => ({
              id: p["id"],
              created_at: p["createdAt"].getTime(),
              thread_id: p["threadId"],
              role: p["role"],
              content: p["content"],
              assistant_id: p["assistantId"],
              run_id: p["runId"],
              file_ids: p["fileIds"],
              metadata: p["metadata"],
            })),
        metadata: body["metadata"],
      },
    });
}

export async function _createThreadDeserialize(
  result: CreateThread200Response
): Promise<AssistantThread> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    createdAt: new Date(result.body["created_at"]),
    metadata: result.body["metadata"],
  };
}

/** Creates a new thread. Threads contain messages and can be run by assistants. */
export async function createThread(
  context: Client,
  body: AssistantThreadCreationOptions,
  options: AssistantThreadsCreateThreadOptions = { requestOptions: {} }
): Promise<AssistantThread> {
  const result = await _createThreadSend(context, body, options);
  return _createThreadDeserialize(result);
}

export function _retrieveThreadSend(
  context: Client,
  threadId: string,
  options: AssistantThreadsRetrieveThreadOptions = { requestOptions: {} }
): StreamableMethod<RetrieveThread200Response> {
  return context
    .path("/threads/{threadId}", threadId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveThreadDeserialize(
  result: RetrieveThread200Response
): Promise<AssistantThread> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    createdAt: new Date(result.body["created_at"]),
    metadata: result.body["metadata"],
  };
}

/** Gets information about an existing thread. */
export async function retrieveThread(
  context: Client,
  threadId: string,
  options: AssistantThreadsRetrieveThreadOptions = { requestOptions: {} }
): Promise<AssistantThread> {
  const result = await _retrieveThreadSend(context, threadId, options);
  return _retrieveThreadDeserialize(result);
}

export function _modifyThreadSend(
  context: Client,
  threadId: string,
  options: AssistantThreadsModifyThreadOptions = { requestOptions: {} }
): StreamableMethod<ModifyThread200Response> {
  return context
    .path("/threads/{threadId}", threadId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { metadata: options?.metadata },
    });
}

export async function _modifyThreadDeserialize(
  result: ModifyThread200Response
): Promise<AssistantThread> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    createdAt: new Date(result.body["created_at"]),
    metadata: result.body["metadata"],
  };
}

/** Modifies an existing thread. */
export async function modifyThread(
  context: Client,
  threadId: string,
  options: AssistantThreadsModifyThreadOptions = { requestOptions: {} }
): Promise<AssistantThread> {
  const result = await _modifyThreadSend(context, threadId, options);
  return _modifyThreadDeserialize(result);
}

export function _deleteThreadSend(
  context: Client,
  threadId: string,
  options: AssistantThreadsDeleteThreadOptions = { requestOptions: {} }
): StreamableMethod<DeleteThread200Response> {
  return context
    .path("/threads/{threadId}", threadId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteThreadDeserialize(
  result: DeleteThread200Response
): Promise<ThreadDeletionStatus> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    deleted: result.body["deleted"],
  };
}

/** Deletes an existing thread. */
export async function deleteThread(
  context: Client,
  threadId: string,
  options: AssistantThreadsDeleteThreadOptions = { requestOptions: {} }
): Promise<ThreadDeletionStatus> {
  const result = await _deleteThreadSend(context, threadId, options);
  return _deleteThreadDeserialize(result);
}
