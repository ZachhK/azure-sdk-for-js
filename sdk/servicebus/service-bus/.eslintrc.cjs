/** @type { import("eslint").Linter.Config } */
module.exports = {
  plugins: ["@azure/azure-sdk"],
  extends: ["plugin:@azure/azure-sdk/azure-sdk-base"],
  ignorePatterns: ["test/perf/track-1", "test/perf-js-libs", "test/stress/"],
  rules: {
    "@azure/azure-sdk/ts-package-json-types": "off",
  },
};
