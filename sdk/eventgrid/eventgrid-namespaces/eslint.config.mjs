import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default [
  ...azsdkEslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/naming-convention": "warn",
    },
  },
];
