import { defineFlatConfig } from "eslint-define-config";
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from "../globs";

import parserJSonc from "jsonc-eslint-parser";
import pluginJsonc from "eslint-plugin-jsonc";

export const jsonc = defineFlatConfig([
    ...pluginJsonc.configs["flat/recommended-with-jsonc"] as any,
    {
        files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
        languageOptions: {
            parser: parserJSonc,
            parserOptions: {
                jsonSyntax: "JSON5",
            },
        },
        plugins: {
            jsonc: pluginJsonc as any,
        },
    },
]);
