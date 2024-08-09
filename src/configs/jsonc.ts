import type { FlatConfigItem, OptionsJsonc, StylisticFocus } from "../types";
import type { Linter } from "eslint";

import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from "../globs";
import { parserJsonc, pluginJsonc } from "../plugins";

const defaulTstylistic: StylisticFocus = { indent: 4 };
export function jsonc(options?: OptionsJsonc): FlatConfigItem[] {
    const { indent } = typeof options?.stylistic === "boolean" ? defaulTstylistic : options?.stylistic || defaulTstylistic;
    const files = options?.files ?? [GLOB_JSON, GLOB_JSON5, GLOB_JSONC];

    const configs: FlatConfigItem[] = [
        {
            name: "uneva/jsonc/setup",
            plugins: {
                jsonc: pluginJsonc,
            },
        },
        {
            name: "uneva/jsonc/rules",
            files,
            languageOptions: {
                parser: parserJsonc,
            },
            rules: {
                ...pluginJsonc.configs["recommended-with-jsonc"].rules as Linter.RulesRecord,
            },
        },
    ];

    if (options?.stylistic) {
        configs.push({
            name: "uneva/jsonc/stylistic",
            rules: {
                "jsonc/indent": ["error", indent],
                "jsonc/quote-props": "error",
                "jsonc/quotes": "error",
            },
        });
    }

    return configs;
}
