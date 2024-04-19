/** @type { import("eslint").Linter.Config } */
module.exports = {
  plugins: ["@azure/azure-sdk"],
  extends: ["plugin:@azure/azure-sdk/azure-sdk-base"],
  rules: {
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/naming-convention": "warn",
  },
};
