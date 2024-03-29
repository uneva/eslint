import type { ConfigEnv } from "vitest/config";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }:ConfigEnv) => {
    console.log(mode);
    return { test: {} };
});
