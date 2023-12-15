// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIPageableListOf, RunStep } from "../../models/models.js";
import {
  AssistantsContext as Client,
  ListRunSteps200Response,
  RetrieveRunStep200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  RunStepsRetrieveRunStepOptions,
  RunStepsListRunStepsOptions,
} from "../../models/options.js";

export function _retrieveRunStepSend(
  context: Client,
  threadId: string,
  runId: string,
  stepId: string,
  options: RunStepsRetrieveRunStepOptions = { requestOptions: {} }
): StreamableMethod<RetrieveRunStep200Response> {
  return context
    .path(
      "/threads/{threadId}/runs/{runId}/steps/{stepId}",
      threadId,
      runId,
      stepId
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveRunStepDeserialize(
  result: RetrieveRunStep200Response
): Promise<RunStep> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    type: result.body["type"],
    assistantId: result.body["assistant_id"],
    threadId: result.body["thread_id"],
    runId: result.body["run_id"],
    status: result.body["status"],
    stepDetails: { type: result.body.step_details["type"] },
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"],
            message: result.body.last_error["message"],
          },
    createdAt: new Date(result.body["created_at"]),
    expiredAt:
      result.body["expired_at"] === null
        ? null
        : new Date(result.body["expired_at"]),
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    cancelledAt:
      result.body["cancelled_at"] === null
        ? null
        : new Date(result.body["cancelled_at"]),
    failedAt:
      result.body["failed_at"] === null
        ? null
        : new Date(result.body["failed_at"]),
    metadata: result.body["metadata"],
  };
}

/** Gets a single run step from a thread run. */
export async function retrieveRunStep(
  context: Client,
  threadId: string,
  runId: string,
  stepId: string,
  options: RunStepsRetrieveRunStepOptions = { requestOptions: {} }
): Promise<RunStep> {
  const result = await _retrieveRunStepSend(
    context,
    threadId,
    runId,
    stepId,
    options
  );
  return _retrieveRunStepDeserialize(result);
}

export function _listRunStepsSend(
  context: Client,
  threadId: string,
  runId: string,
  options: RunStepsListRunStepsOptions = { requestOptions: {} }
): StreamableMethod<ListRunSteps200Response> {
  return context
    .path("/threads/{threadId}/runs/{runId}/steps", threadId, runId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listRunStepsDeserialize(
  result: ListRunSteps200Response
): Promise<OpenAIPageableListOf> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    data: result.body["data"].map((p) => ({
      id: p["id"],
      type: p["type"],
      assistantId: p["assistant_id"],
      threadId: p["thread_id"],
      runId: p["run_id"],
      status: p["status"],
      stepDetails: { type: p.step_details["type"] },
      lastError:
        p.last_error === null
          ? null
          : { code: p.last_error["code"], message: p.last_error["message"] },
      createdAt: new Date(p["created_at"]),
      expiredAt: p["expired_at"] === null ? null : new Date(p["expired_at"]),
      completedAt:
        p["completed_at"] === null ? null : new Date(p["completed_at"]),
      cancelledAt:
        p["cancelled_at"] === null ? null : new Date(p["cancelled_at"]),
      failedAt: p["failed_at"] === null ? null : new Date(p["failed_at"]),
      metadata: p["metadata"],
    })),
    firstId: result.body["first_id"],
    lastId: result.body["last_id"],
    hasMore: result.body["has_more"],
  };
}

/** Gets a list of run steps from a thread run. */
export async function listRunSteps(
  context: Client,
  threadId: string,
  runId: string,
  options: RunStepsListRunStepsOptions = { requestOptions: {} }
): Promise<OpenAIPageableListOf> {
  const result = await _listRunStepsSend(context, threadId, runId, options);
  return _listRunStepsDeserialize(result);
}
