/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { HybridConnectivityManagementAPI } from "../src/hybridConnectivityManagementAPI";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("HybridConnectivity test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: HybridConnectivityManagementAPI;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;
  let resourceUri: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new HybridConnectivityManagementAPI(credential, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    resourcename = "default";
    resourceUri ="subscriptions/"+subscriptionId+"/resourceGroups/"+resourceGroup+"/providers/Microsoft.HybridCompute/machines/AWP-AzRael-01"
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("endpoints create test", async function () {

    const res = await client.endpoints.createOrUpdate(
      resourceUri,
    	resourcename,
      {
        properties: { type: "default" }
      });
    assert.equal(res.name, resourcename);
  });

  it("endpoints get test", async function () {
    const res = await client.endpoints.get(resourceUri,
    	resourcename);
    assert.equal(res.name, resourcename);
  });

  it("endpoints list test", async function () {
    const resArray = new Array();
    for await (let item of client.endpoints.list(resourceUri)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("endpoints delete test", async function () {
    const resArray = new Array();
    const res = await client.endpoints.delete(resourceUri,
    	resourcename
)
    for await (let item of client.endpoints.list(resourceUri)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
