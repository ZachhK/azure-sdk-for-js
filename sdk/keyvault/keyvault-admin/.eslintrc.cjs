/** @type { import("eslint").Linter.Config } */
module.exports = {
  plugins: ["@azure/azure-sdk"],
  extends: ["plugin:@azure/azure-sdk/azure-sdk-base"],
  ignorePatterns: ["src/generated"],
  rules: {
    "@azure/azure-sdk/ts-package-json-module": "warn",
    "@typescript-eslint/no-this-alias": "off",
    "no-use-before-define": "warn",
  },
};
