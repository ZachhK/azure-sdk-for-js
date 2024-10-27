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
import { ContainerInstanceManagementClient } from "../src/containerInstanceManagementClient";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};


describe("ContainerInstance test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ContainerInstanceManagementClient;
  let location: string;
  let resourceGroup: string;
  let containerGroupName: string;
  let containerInstanceName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new ContainerInstanceManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus2";
    resourceGroup = "myjstest";
    containerGroupName = "mycontainerGroupxxx";
    containerInstanceName = "my-containerinstancexx";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("containerGroups create test", async function () {
    const res = await client.containerGroups.beginCreateOrUpdateAndWait(resourceGroup, containerGroupName, {
      location: location,
      identity: {
        type: "SystemAssigned"
      },
      containers: [
        {
          name: containerInstanceName,
          command: [],
          environmentVariables: [],
          image: "nginx",
          ports: [
            {
              port: 80
            }
          ],
          resources: {
            requests: {
              cpu: 1,
              memoryInGB: 1.5,
              // gpu: {
              //   count: 1,
              //   sku: "K80"
              // }
            }
          },
          volumeMounts: [
            {
              name: "empty-volume",

              mountPath: "mnt/mydir"
            }
          ]
        }
      ],
      diagnostics: {
        logAnalytics: {
          workspaceId: "workspaceid",
          workspaceKey: "workspaceKey"
        }
      },
      osType: "Linux",
      restartPolicy: "OnFailure",
      volumes: [
        {
          name: "empty-volume",
          emptyDir: {}
        }
      ]
    }, testPollingOptions)
    assert.equal(res.name, containerGroupName);
  }).timeout(3600000);

  it("containerGroups get test", async function () {
    const res = await client.containerGroups.get(resourceGroup, containerGroupName);
    assert.equal(res.name, containerGroupName);
  });

  it("containerGroups list test", async function () {
    const resArray = new Array();
    for await (let item of client.containerGroups.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("containerGroups delete test", async function () {
    const res = await client.containerGroups.beginDeleteAndWait(resourceGroup, containerGroupName, testPollingOptions);
    const resArray = new Array();
    for await (let item of client.containerGroups.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
