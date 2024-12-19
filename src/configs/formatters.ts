import type { FlatConfigItem, OptionsFormatters } from "../types";

import {
    GLOB_CSS,
    GLOB_HTML,
    GLOB_LESS,
    GLOB_POSTCSS,
    GLOB_SCSS,
} from "../globs";
import { parserPlain } from "../state";
import { stylisticFocus } from "./stylistic";
import { pluginFormat } from "../plugins";

export function formatters(options: OptionsFormatters | true = {}): FlatConfigItem[] {
    const { css, html } = options === true ? {
        css: true,
        html: true,
    } : options;

    const {
        indent,
        quotes,
        semi,
    } = stylisticFocus;

    const prettierOptions = {
        trailingComma: "all",
        endOfLine: "auto",
        printWidth: 120,
        singleQuote: quotes === "single",
        tabWidth: indent,
        useTabs: false,
        semi,
    };

    const configs: FlatConfigItem[] = [
        {
            name: "uneva/formatter/setup",
            plugins: {
                format: pluginFormat,
            },
        },
    ];

    if (css) {
        configs.push(
            {
                name: "uneva/formatter/css",
                files: [GLOB_CSS, GLOB_POSTCSS],
                languageOptions: {
                    parser: parserPlain,
                },
                rules: {
                    "format/prettier": [
                        "error",
                        {
                            ...prettierOptions,
                            parser: "css",
                        },
                    ],
                },
            },
            {
                name: "uneva/formatter/scss",
                files: [GLOB_SCSS],
                languageOptions: {
                    parser: parserPlain,
                },
                rules: {
                    "format/prettier": [
                        "error",
                        {
                            ...prettierOptions,
                            parser: "scss",
                        },
                    ],
                },
            },
            {
                name: "uneva/formatter/less",
                files: [GLOB_LESS],
                languageOptions: {
                    parser: parserPlain,
                },
                rules: {
                    "format/prettier": [
                        "error",
                        {
                            ...prettierOptions,
                            parser: "less",
                        },
                    ],
                },
            },
        );
    }

    if (html) {
        configs.push({
            name: "uneva/formatter/html",
            files: [GLOB_HTML],
            languageOptions: {
                parser: parserPlain,
            },
            rules: {
                "format/prettier": [
                    "error",
                    {
                        ...prettierOptions,
                        parser: "html",
                    },
                ],
            },
        });
    }


    return configs;
}
