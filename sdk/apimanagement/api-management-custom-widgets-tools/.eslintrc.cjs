/** @type { import("eslint").Linter.Config } */
module.exports = {
  plugins: ["@azure/azure-sdk"],
  extends: ["plugin:@azure/azure-sdk/azure-sdk-base"],
  rules: {
    "@azure/azure-sdk/ts-package-json-types": "off",
    "@azure/azure-sdk/ts-package-json-module": "off",
    "@azure/azure-sdk/ts-package-json-main-is-cjs": "off",
    "@azure/azure-sdk/ts-package-json-files-required": "off",
    "@azure/azure-sdk/ts-package-json-engine-is-present": "off",
  },
  ignorePatterns: [],
};
