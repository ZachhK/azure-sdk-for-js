// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  PipelinePolicy,
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import type { KeyCredential } from "@azure/core-auth";

const API_KEY_HEADER_NAME = "Ocp-Apim-Subscription-Key";

/**
 * The programmatic identifier of the conversationAnalysisAzureKeyCredentialPolicy.
 */
const conversationAnalysisAzureKeyCredentialPolicyName =
  "conversationAnalysisAzureKeyCredentialPolicy";

/**
 * Create an HTTP pipeline policy to authenticate a request
 * using an `AzureKeyCredential` for Conversation Analysis
 * @internal
 */
export function conversationAnalysisAzureKeyCredentialPolicy(
  credential: KeyCredential,
): PipelinePolicy {
  return {
    name: conversationAnalysisAzureKeyCredentialPolicyName,
    sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse> {
      request.headers.set(API_KEY_HEADER_NAME, credential.key);
      return next(request);
    },
  };
}
