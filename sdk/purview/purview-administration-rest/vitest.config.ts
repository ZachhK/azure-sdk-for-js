// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.shared.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      typecheck: {
        enabled: true,
        tsconfig: "tsconfig.test.json",
        include: ["test/**/*.ts", "test/**/*.mts", "test/**/*.cts"],
      },
      include: ["test/**/*.spec.ts"],
      hookTimeout: 500000,
      testTImeout: 500000,
    },
  }),
);
