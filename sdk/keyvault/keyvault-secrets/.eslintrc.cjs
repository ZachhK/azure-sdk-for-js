/** @type { import("eslint").Linter.Config } */
module.exports = {
  plugins: ["@azure/azure-sdk"],
  extends: ["plugin:@azure/azure-sdk/azure-sdk-base"],
  ignorePatterns: ["src/core"],
  rules: {
    "@typescript-eslint/no-this-alias": "off",
    "@azure/azure-sdk/ts-package-json-module": "warn",
    "no-use-before-define": "warn",
  },
};
