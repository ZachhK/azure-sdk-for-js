// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Classification policy crud
 */
import {
  QueueLengthExceptionTrigger
} from "../src";

import { AzureCommunicationRoutingServiceClient } from "../src"
import JobRouter from "../src";
import { DefaultAzureCredential } from "@azure/identity";







// Create an classification policy
async function createClassificationPolicy(): Promise<void> {
  // Create the Router Client
  const routerClient: AzureCommunicationRoutingServiceClient =
    JobRouter("https://<endpoint>", new DefaultAzureCredential());

  const distributionPolicyId = "distribution-policy-123";
  await routerClient.path("/routing/distributionPolicies/{distributionPolicyId}", distributionPolicyId).patch({
    contentType: "application/merge-patch+json",
    body: {
      name: "distribution-policy-123",
      mode: {
        kind: "longest-idle",
        minConcurrentOffers: 1,
        maxConcurrentOffers: 5,
        bypassSelectors: false,
      },
      offerExpiresAfterSeconds: 120,
    }
  })

  // define exception trigger for queue over flow
  const queueLengthExceptionTrigger: QueueLengthExceptionTrigger = {
    kind: "queue-length",
    threshold: 100,
  };

  const exceptionPolicyId = "exception-policy-123";
  await routerClient.path("/routing/exceptionPolicies/{exceptionPolicyId}", exceptionPolicyId).patch({
    contentType: "application/merge-patch+json",
    body: {
      name: "test-policy",
      exceptionRules: [{
          id: "MaxWaitTimeExceeded",
          actions: [{
              kind: "reclassify",
              classificationPolicyId: "Main",
              labelsToUpsert: {
                escalated: true,
              },
          }],
          trigger: queueLengthExceptionTrigger,
      }]
    }
  })

  const classificationPolicyId = "classification-policy-123";
  const salesQueueId = "queue-123";
  await routerClient.path("/routing/classificationPolicies/{classificationPolicyId}", classificationPolicyId).patch({
    contentType: "application/merge-patch+json",
    body: {
      name: "Default Classification Policy",
      fallbackQueueId: salesQueueId,
      queueSelectorAttachments: [
        {
          kind: "static",
          queueSelector: { key: "department", labelOperator: "equal", value: "xbox" }
        },
      ],
      workerSelectorAttachments: [{
        kind: "static",
        workerSelector: { key: "english", labelOperator: "greaterThan", value: 5 }
      }],
      prioritizationRule: {
        kind: "expression-rule",
        language: "powerFx",
        expression: "If(job.department = \"xbox\", 2, 1)"
      }
    }
  });

  const queueId = "queue-123";
  await routerClient.path("/routing/queues/{queueId}", queueId).patch({
    contentType: "application/merge-patch+json",
    body: {
      distributionPolicyId: "distribution-policy-123",
      name: "Main",
      labels: {},
      exceptionPolicyId: "exception-policy-123",
    }
  })


  const result = await routerClient.path("/routing/classificationPolicies/{classificationPolicyId}", classificationPolicyId).patch({
    contentType: "application/merge-patch+json",
    body: {
      name: "test-policy",
      fallbackQueueId: "queue-123",
      queueSelectorAttachments: [
        {
          kind: "conditional",
          queueSelectors : [{
            key: "foo",
            labelOperator: "equal",
            value: { default: 10 },
          }],
          condition: {
            kind: "direct-map-rule"
          }
        },
      ],
      prioritizationRule: {
        kind: "static-rule",
        value: { default: 2 },
      },
    }
  });

  console.log("classification policy: " + result);
}

void createClassificationPolicy();