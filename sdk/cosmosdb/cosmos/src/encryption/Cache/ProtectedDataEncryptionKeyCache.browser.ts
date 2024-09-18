// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ProtectedDataEncryptionKeyCache {}

export function randomBytes(_size: number): Promise<string> {
  throw new Error("Client-side random generator not supported in browser environment");
}
export function createHmac(_algorithm: string, _key: string): Promise<string> {
  throw new Error("Client-side random generator not supported in browser environment");
}
