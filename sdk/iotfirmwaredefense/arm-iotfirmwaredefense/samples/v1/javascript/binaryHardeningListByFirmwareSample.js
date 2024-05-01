/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { IoTFirmwareDefenseClient } = require("@azure/arm-iotfirmwaredefense");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists binary hardening analysis results of a firmware.
 *
 * @summary Lists binary hardening analysis results of a firmware.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/BinaryHardening_ListByFirmware_MaximumSet_Gen.json
 */
async function binaryHardeningListByFirmwareMaximumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "FirmwareAnalysisRG";
  const workspaceName = "default";
  const firmwareId = "109a9886-50bf-85a8-9d75-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.binaryHardening.listByFirmware(
    resourceGroupName,
    workspaceName,
    firmwareId,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists binary hardening analysis results of a firmware.
 *
 * @summary Lists binary hardening analysis results of a firmware.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/BinaryHardening_ListByFirmware_MinimumSet_Gen.json
 */
async function binaryHardeningListByFirmwareMinimumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "FirmwareAnalysisRG";
  const workspaceName = "default";
  const firmwareId = "109a9886-50bf-85a8-9d75-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.binaryHardening.listByFirmware(
    resourceGroupName,
    workspaceName,
    firmwareId,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  binaryHardeningListByFirmwareMaximumSetGen();
  binaryHardeningListByFirmwareMinimumSetGen();
}

main().catch(console.error);
