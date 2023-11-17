// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The request details to use when creating a new assistant. */
export interface AssistantCreationOptions {
  /** The ID of the model to use. */
  model: string;
  /** The name of the new assistant. */
  name?: string;
  /** The description of the new assistant. */
  description?: string;
  /** The system instructions for the new assistant to use. */
  instructions?: string;
  /** The collection of tools to enable for the new assistant. */
  tools?: Array<ToolDefinition>;
  /** A list of previously uploaded file IDs to attach to the assistant. */
  file_ids?: string[];
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** An abstract representation of an input tool definition that an assistant can use. */
export interface ToolDefinitionParent {
  type: string;
}

/** The input definition information for a code interpreter tool as used to configure an assistant. */
export interface CodeInterpreterToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
}

/** The input definition information for a retrieval tool as used to configure an assistant. */
export interface RetrievalToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'retrieval'. */
  type: "retrieval";
}

/** The input definition information for a function tool as used to configure an assistant. */
export interface FunctionToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The definition of the concrete function that the function tool should call. */
  function: FunctionDefinition;
}

/** The input definition information for a function. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description: string;
  /** The parameters the functions accepts, described as a JSON Schema object. */
  parameters: unknown;
}

/** The request details to use when modifying an existing assistant. */
export interface AssistantModificationOptions {
  /** The ID of the model to use. */
  model?: string;
  /** The modified name for the assistant to use. */
  name?: string;
  /** The modified description for the assistant to use. */
  description?: string;
  /** The modified system instructions for the new assistant to use. */
  instructions?: string;
  /** The modified collection of tools to enable for the assistant. */
  tools?: Array<ToolDefinition>;
  /** The modified list of previously uploaded fileIDs to attach to the assistant. */
  file_ids?: string[];
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** The details used to create a new assistant thread. */
export interface AssistantThreadCreationOptions {
  /** The messages to associate with the new thread. */
  messages?: Array<AssistantMessage>;
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** A single message within an assistant thread. */
export interface AssistantMessage {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.message'. */
  object: "thread.message";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  created_at: number;
  /** The ID of the thread that this message belongs to. */
  thread_id: string;
  /**
   * The role associated with the assistant thread message.
   *
   * Possible values: user, assistant
   */
  role: string;
  /** The list of content items associated with the assistant thread message. */
  content: Array<AssistantMessageContent>;
  /** If applicable, the ID of the assistant that authored this message. */
  assistant_id?: string;
  /** If applicable, the ID of the run associated with the authoring of this message. */
  run_id?: string;
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** An abstract representation of a single item of thread message content. */
export interface AssistantMessageContentParent {
  type: string;
}

/** A representation of image file content in a thread message. */
export interface AssistantMessageImageFileContent
  extends AssistantMessageContentParent {
  /** The object type, which is always 'image_file'. */
  type: "image_file";
  /** The image file for this thread message content item. */
  image_file: AssistantImageFile;
}

/** An image reference, as represented in thread message content. */
export interface AssistantImageFile {
  /** The ID for the file associated with this image. */
  file_id: string;
}

/** A representation of a textual item of thread message content. */
export interface AssistantMessageTextContent
  extends AssistantMessageContentParent {
  /** The object type, which is always 'text'. */
  type: "text";
  /** The text and associated annotations for this thread message content item. */
  text: AssistantMessageText;
  /** A list of attached file IDs, ordered by creation date in ascending order. */
  file_ids: string[];
  /** A set of key/value pairs used to store additional information about the object. */
  metadata: Record<string, string>;
}

/** The text and associated annotations for a single item of assistant thread message content. */
export interface AssistantMessageText {
  /** The text data. */
  value: string;
  /** A list of annotations associated with this text. */
  annotations: Array<AssistantMessageTextAnnotation>;
}

/** An abstract representation of an annotation to text thread message content. */
export interface AssistantMessageTextAnnotationParent {
  /** The textual content associated with this text annotation item. */
  text: string;
  /** The first text index associated with this text annotation. */
  start_index: number;
  /** The last text index associated with this text annotation. */
  end_index: number;
  type: string;
}

/** A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the 'retrieval' tool to search files. */
export interface AssistantMessageTextFileAnnotation
  extends AssistantMessageTextAnnotationParent {
  /** The object type, which is always 'file_citation'. */
  type: "file_citation";
  /** The file-based citation associated with this annotation. */
  file_citation: AssistantMessageTextFileCitation;
}

/** A representation of a file-based text citation, as used in a file-based annotation of text thread message content. */
export interface AssistantMessageTextFileCitation {
  /** The ID of the file associated with this citation. */
  file_id: string;
  /** The specific quote cited in the associated file. */
  quote: string;
}

/** A citation within the message that points to a file located at a specific path. */
export interface AssistantMessageTextFilePathAnnotation
  extends AssistantMessageTextAnnotationParent {
  /** The object type, which is always 'file_path'. */
  type: "file_path";
  /** A URL for the file that's generated when the assistant used the code_interpreter tool to generate a file. */
  file_path: string;
}

/** The data provided during a tool outputs submission to resolve pending tool calls and allow the model to continue. */
export interface ToolOutputSubmission {
  /** The ID of the tool call being resolved, as provided in the tool calls of a required action from a run. */
  tool_call_id?: string;
  /** The output from the tool to be submitted. */
  output?: string;
}

/** The details used when creating and immediately running a new assistant thread. */
export interface CreateAndRunThreadOptions {
  /** The ID of the assistant for which the thread should be created. */
  assistant_id: string;
  /** The details used to create the new thread. */
  thread?: AssistantThreadCreationOptions;
  /** The overridden model that the assistant should use to run the thread. */
  model?: string;
  /** The overridden system instructions the assistant should use to run the thread. */
  instructions?: string;
  /** The overriden list of enabled tools the assistant should use to run the thread. */
  tools?: Array<ToolDefinition>;
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** An abstract representation of an input tool definition that an assistant can use. */
export type ToolDefinition =
  | CodeInterpreterToolDefinition
  | RetrievalToolDefinition
  | FunctionToolDefinition;
/** An abstract representation of a single item of thread message content. */
export type AssistantMessageContent =
  | AssistantMessageImageFileContent
  | AssistantMessageTextContent;
/** An abstract representation of an annotation to text thread message content. */
export type AssistantMessageTextAnnotation =
  | AssistantMessageTextFileAnnotation
  | AssistantMessageTextFilePathAnnotation;