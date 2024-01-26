// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * THIS IS AN AUTO-GENERATED FILE - DO NOT EDIT!
 *
 * Any changes you make here may be lost.
 *
 * If you need to make changes, please do so in the original source file, \{project-root\}/sources/custom
 */
import { RequiredToolCallOutput, ToolCallOutput } from "../rest/outputModels.js";
import { RequiredToolCall, ToolCall } from "./models.js";

export function parseRequiredToolCallOutput(requiredToolCallOutput: RequiredToolCallOutput): RequiredToolCall {
  return { type: "function", id: requiredToolCallOutput.id, function: requiredToolCallOutput.function } as RequiredToolCall;
}

export function parseToolCallOutput(toolCallOutput: ToolCallOutput): ToolCall {
  const { id } = toolCallOutput;
  const toolCall: {
    id: string;
    type: string;
    function: any;
    retrieval: any;
    codeInterpreter: any;
  } = { id, type: "", function: {}, retrieval: {}, codeInterpreter: {} };
  switch (toolCallOutput.type) {
    case "function":
      toolCall.type = toolCallOutput.type as "function";
      toolCall.function = toolCallOutput.function;
      break;
    case "retrieval":
      toolCall.type = toolCallOutput.type as "retrieval";
      toolCall.retrieval = toolCallOutput.retrieval;
      break;
    case "code_interpreter":
      toolCall.type = toolCallOutput.type as "code_interpreter";
      toolCall.codeInterpreter = toolCallOutput.code_interpreter;
      break;
    default:
      throw new Error(`Unknown tool call type: ${toolCall.type}`);
  }

  return toolCall as ToolCall;
}
