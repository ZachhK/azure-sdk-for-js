# client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for in some common scenarios.

| **File Name**                                                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [checkNameAvailabilityPostSample.js][checknameavailabilitypostsample] | This API is used to check the uniqueness of a resource name used for a diagnostic, troubleshooter or solutions x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/CheckNameAvailabilityForDiagnosticWhenNameIsAvailable.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [diagnosticsCreateSample.js][diagnosticscreatesample]                 | Creates a diagnostic for the specific resource using solutionId and requiredInputs\* from discovery solutions. <br/>Diagnostics tells you precisely the root cause of the issue and the steps to address it. You can get diagnostics once you discover the relevant solution for your Azure issue. <br/><br/> <b>Note: </b> requiredInputs’ from Discovery solutions response must be passed via ‘additionalParameters’ as an input to Diagnostics API. x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/CreateDiagnosticForKeyVaultResource.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [diagnosticsGetSample.js][diagnosticsgetsample]                       | Get the diagnostics using the 'diagnosticsResourceName' you chose while creating the diagnostic. x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/GetDiagnosticForKeyVaultResource.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [discoverySolutionListSample.js][discoverysolutionlistsample]         | Lists the relevant Azure diagnostics and solutions using [problemClassification API](https://learn.microsoft.com/rest/api/support/problem-classifications/list?tabs=HTTP)) AND resourceUri or resourceType.<br/> Discovery Solutions is the initial entry point within Help API, which identifies relevant Azure diagnostics and solutions. We will do our best to return the most effective solutions based on the type of inputs, in the request URL <br/><br/> Mandatory input : problemClassificationId (Use the [problemClassification API](https://learn.microsoft.com/rest/api/support/problem-classifications/list?tabs=HTTP)) <br/>Optional input: resourceUri OR resource Type <br/><br/> <b>Note: </b> ‘requiredInputs’ from Discovery solutions response must be passed via ‘additionalParameters’ as an input to Diagnostics and Solutions API. x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/ListDiscoverySolutionsAtResourceScope.json                                                                                                                                                                                                                                                                                                                                                                                         |
| [operationsListSample.js][operationslistsample]                       | Returns list of operations. x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/ListOperations.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [solutionCreateSample.js][solutioncreatesample]                       | Creates a solution for the specific Azure resource or subscription using the triggering criteria ‘solutionId and requiredInputs’ from discovery solutions.<br/> Solutions are a rich, insightful and a centralized self help experience that brings all the relevant content to troubleshoot an Azure issue into a unified experience. Solutions include the following components : Text, Diagnostics , Troubleshooters, Images , Video tutorials, Tables , custom charts, images , AzureKB, etc, with capabilities to support new solutions types in the future. Each solution type may require one or more ‘requiredParameters’ that are required to execute the individual solution component. In the absence of the ‘requiredParameters’ it is likely that some of the solutions might fail execution, and you might see an empty response. <br/><br/> <b>Note:</b> <br/>1. ‘requiredInputs’ from Discovery solutions response must be passed via ‘parameters’ in the request body of Solutions API. <br/>2. ‘requiredParameters’ from the Solutions response is the same as ‘ additionalParameters’ in the request for diagnostics <br/>3. ‘requiredParameters’ from the Solutions response is the same as ‘properties.parameters’ in the request for Troubleshooters x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/Solution_Create.json |
| [solutionGetSample.js][solutiongetsample]                             | Get the solution using the applicable solutionResourceName while creating the solution. x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/Solution_Get.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [solutionUpdateSample.js][solutionupdatesample]                       | Update the requiredInputs or additional information needed to execute the solution x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/Solution_Update.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [troubleshootersContinueSample.js][troubleshooterscontinuesample]     | Uses ‘stepId’ and ‘responses’ as the trigger to continue the troubleshooting steps for the respective troubleshooter resource name. <br/>Continue API is used to provide inputs that are required for the specific troubleshooter to progress into the next step in the process. This API is used after the Troubleshooter has been created using the Create API. x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/Troubleshooter_Continue.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [troubleshootersCreateSample.js][troubleshooterscreatesample]         | Creates the specific troubleshooter action under a resource or subscription using the ‘solutionId’ and ‘properties.parameters’ as the trigger. <br/> Troubleshooters are step-by-step interactive guidance that scope the problem by collecting additional inputs from you in each stage while troubleshooting an Azure issue. You will be guided down decision tree style workflow and the best possible solution will be presented at the end of the workflow. <br/> Create API creates the Troubleshooter API using ‘parameters’ and ‘solutionId’ <br/> After creating the Troubleshooter instance, the following APIs can be used:<br/> CONTINUE API: to move to the next step in the flow <br/>GET API: to identify the next step after executing the CONTINUE API. <br/><br/> <b>Note:</b> ‘requiredParameters’ from solutions response must be passed via ‘properties. parameters’ in the request body of Troubleshooters API. x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/Troubleshooter_Create.json                                                                                                                                                                                                                                                                                                                                |
| [troubleshootersEndSample.js][troubleshootersendsample]               | Ends the troubleshooter action x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/Troubleshooter_End.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [troubleshootersGetSample.js][troubleshootersgetsample]               | Gets troubleshooter instance result which includes the step status/result of the troubleshooter resource name that is being executed.<br/> Get API is used to retrieve the result of a Troubleshooter instance, which includes the status and result of each step in the Troubleshooter workflow. This API requires the Troubleshooter resource name that was created using the Create API. x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/Troubleshooter_Get.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [troubleshootersRestartSample.js][troubleshootersrestartsample]       | Restarts the troubleshooter API using applicable troubleshooter resource name as the input.<br/> It returns new resource name which should be used in subsequent request. The old resource name is obsolete after this API is invoked. x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/Troubleshooter_Restart.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node checkNameAvailabilityPostSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node checkNameAvailabilityPostSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[checknameavailabilitypostsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/checkNameAvailabilityPostSample.js
[diagnosticscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/diagnosticsCreateSample.js
[diagnosticsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/diagnosticsGetSample.js
[discoverysolutionlistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/discoverySolutionListSample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/operationsListSample.js
[solutioncreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/solutionCreateSample.js
[solutiongetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/solutionGetSample.js
[solutionupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/solutionUpdateSample.js
[troubleshooterscontinuesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/troubleshootersContinueSample.js
[troubleshooterscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/troubleshootersCreateSample.js
[troubleshootersendsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/troubleshootersEndSample.js
[troubleshootersgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/troubleshootersGetSample.js
[troubleshootersrestartsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/selfhelp/arm-selfhelp/samples/v2-beta/javascript/troubleshootersRestartSample.js
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-selfhelp?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/selfhelp/arm-selfhelp/README.md