/** @type { import("eslint").Linter.Config } */
module.exports = {
  plugins: ["@azure/azure-sdk"],
  extends: ["plugin:@azure/azure-sdk/azure-sdk-base"],
  rules: {
    // Exporting the factory function is a convention for Rest Level Client
    "@azure/azure-sdk/ts-modules-only-named": "off",
  },
};
