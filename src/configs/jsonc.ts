import type { Linter } from "eslint";
import type {
    FlatConfigFiles,
    FlatConfigOverrides,
    FlatConfigStylistic,
} from "../types";

import {
    GLOB_JSON,
    GLOB_JSON5,
    GLOB_JSONC,
} from "../globs";
import parserJSonc from "jsonc-eslint-parser";
import pluginJsonc from "eslint-plugin-jsonc";

export type OptionsJsonc = FlatConfigStylistic & FlatConfigFiles & FlatConfigOverrides;

export function jsonc(options: OptionsJsonc = {}): Linter.FlatConfig[] {
    const {
        files = [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
        overrides = {},
        stylistic = true,
    } = options;

    // const { indent = 4 } = typeof stylistic === "boolean" ? {} : stylistic;

    return [
        // ...pluginJsonc.configs["flat/recommended-with-json"],
        // ...pluginJsonc.configs["flat/recommended-with-json5"],
        // ...pluginJsonc.configs["flat/recommended-with-jsonc"],
        {
            name: "uneva/jsonc/setup",
            plugins: {
                jsonc: pluginJsonc as any,
            },
        },
        {
            name: "uneva/jsonc/rules",
            files,
            languageOptions: {
                parser: parserJSonc,
                parserOptions: {
                    jsonSyntax: "JSON5",
                },
            },
            rules: {
                // "jsonc/no-bigint-literals": "error",
                // "jsonc/no-binary-expression": "error",
                // "jsonc/no-binary-numeric-literals": "error",
                // "jsonc/no-dupe-keys": "error",
                // "jsonc/no-escape-sequence-in-identifier": "error",
                // "jsonc/no-floating-decimal": "error",
                // "jsonc/no-hexadecimal-numeric-literals": "error",
                // "jsonc/no-infinity": "error",
                // "jsonc/no-multi-str": "error",
                // "jsonc/no-nan": "error",
                // "jsonc/no-number-props": "error",
                // "jsonc/no-numeric-separators": "error",
                // "jsonc/no-octal": "error",
                // "jsonc/no-octal-escape": "error",
                // "jsonc/no-octal-numeric-literals": "error",
                // "jsonc/no-parenthesized": "error",
                // "jsonc/no-plus-sign": "error",
                // "jsonc/no-regexp-literals": "error",
                // "jsonc/no-sparse-arrays": "error",
                // "jsonc/no-template-literals": "error",
                // "jsonc/no-undefined-value": "error",
                // "jsonc/no-unicode-codepoint-escapes": "error",
                // "jsonc/no-useless-escape": "error",
                // "jsonc/space-unary-ops": "error",
                // "jsonc/valid-json-number": "error",
                // "jsonc/vue-custom-block/no-parsing-error": "error",

                ...stylistic ? {
                    // "jsonc/quotes": "error",
                    // "jsonc/quote-props": "error",
                    // "jsonc/indent": ["error", indent],
                    // "jsonc/comma-style": ["error", "last"],
                    // "jsonc/comma-dangle": ["error", "never"],
                    // "jsonc/array-bracket-spacing": ["error", "never"],
                    // "jsonc/object-curly-spacing": ["error", "always"],
                    // "jsonc/key-spacing": ["error", { afterColon: true, beforeColon: false }],
                    // "jsonc/object-curly-newline": ["error", { consistent: true, multiline: true }],
                    // "jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
                } : {},
                ...overrides,
            },
        },
    ];
}
