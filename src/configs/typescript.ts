import type { FlatConfigItem, OptionsFiles, OptionsTypescript } from "../types";

import tseslint from "typescript-eslint";
import { GLOB_ASTRO_TS, GLOB_TS, GLOB_TSX } from "../globs";

const typescriptFiles = [GLOB_TS, GLOB_TSX, GLOB_ASTRO_TS];

export function typescriptSetup(options?: OptionsFiles): FlatConfigItem[] {
    return tseslint.config({
        name: "uneva/typescript/setup",
        extends: [
            ...tseslint.configs.strict,
            ...tseslint.configs.stylistic,
        ],
        files: Array.isArray(options?.files) ? options.files : typescriptFiles,
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                sourceType: "module",
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "always" }],
        },
    }) as FlatConfigItem[];
}

export function typescript(options?: OptionsTypescript): FlatConfigItem[] {
    const componentExts = options?.componentExts || [];

    const files = options?.files ?? [
        ...typescriptFiles,
        ...componentExts.map(ext => `**/*.${ext}`),
    ];

    return [
        ...typescriptSetup({ files }),
        {
            name: "uneva/typescript/overrides",
            rules: options?.overrides || {},
        },
    ];
}
