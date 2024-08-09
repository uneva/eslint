import type { FlatConfigItem, OptionsJavascript } from "../types";

import js from "@eslint/js";
import globals from "globals";
import { isInEditor } from "../state";
import { pluginUnusedImports } from "../plugins";

export function javascript(options?: OptionsJavascript): FlatConfigItem[] {
    return [
        js.configs.recommended,
        {
            name: "uneva/javascript/setup",
            languageOptions: {
                ecmaVersion: "latest",
                globals: {
                    ...globals.browser,
                    ...globals.es2021,
                    ...globals.node,
                    document: "readonly",
                    navigator: "readonly",
                    window: "readonly",
                },
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true,
                    },
                    ecmaVersion: "latest",
                    sourceType: "module",
                },
                sourceType: "module",
            },
            linterOptions: {
                reportUnusedDisableDirectives: true,
            },
        },
        {
            name: "uneva/javascript/rules",
            plugins: {
                "unused-imports": pluginUnusedImports,
            },
            rules: {
                "unused-imports/no-unused-imports": (options?.isInEditor || isInEditor) ? "warn" : "off",
                ...options?.overrides || {},
            },
        },
    ];
}
