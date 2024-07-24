import type { Linter } from "eslint";
import type { FlatConfigOptions } from "./types";

import { isPackageExists } from "local-pkg";

import {
    ignores,
    javascript,
    jsonc,
    stylistic,
    typescript,
    vue,
} from "./configs";

const VuePackages = [
    "vue",
    "vitepress",
];

export const hasVue = VuePackages.some((pkg) => isPackageExists(pkg));

export const hasTypeScript = isPackageExists("typescript");

export const hasInEditor = !!(
    (process.env.VSCODE_PID
    || process.env.VSCODE_CWD
    || process.env.JETBRAINS_IDE
    || process.env.VIM
    || process.env.NVIM
    ) && !process.env.CI
);

export function unlint(
    options: FlatConfigOptions = {},
    ...extendConfigs: Linter.FlatConfig[]
): Linter.FlatConfig[] {
    const {
        isInEditor = hasInEditor,
        typescript: maybeTypeScript = hasTypeScript,
        vue: maybeVue = hasVue,
    } = options;

    const stylisticInOptions = typeof options.stylistic === "object" ? options.stylistic : {};
    const stylisticOptions = options.stylistic === false
        ? false
        : stylisticInOptions;


    const configs: Linter.FlatConfig[] = [
        ...ignores(),
        ...javascript({ isInEditor, overrides: getOverrides(options, "javascript") }),
    ];

    if (maybeTypeScript) {
        configs.push(...typescript({
            overrides: getOverrides(options, "typescript"),
        }));
    }

    if (stylisticOptions) {
        configs.push(...stylistic({
            ...stylisticOptions,
            overrides: getOverrides(options, "stylistic"),
        }));
    }

    if (maybeVue) {
        configs.push(...vue({
            ...resolveSubOptions(options, "vue"),
            overrides: getOverrides(options, "vue"),
            stylistic: stylisticOptions,
            typescript: !!maybeTypeScript,
        }));
    }

    if (options.jsonc ?? true) {
        configs.push(
            ...jsonc({
                overrides: getOverrides(options, "jsonc"),
                stylistic: stylisticOptions,
            }),
            // sortPackageJson(),
            // sortTsconfig(),
        );
    }

    if (Array.isArray(extendConfigs))configs.push(...extendConfigs);

    return configs;
}


export type ResolvedOptions<T> = T extends boolean
    ? never
    : NonNullable<T>;
export function resolveSubOptions<K extends keyof FlatConfigOptions>(
    options: FlatConfigOptions,
    key: K,
): ResolvedOptions<FlatConfigOptions[K]> {
    return typeof options[key] === "boolean"
        ? {} as any
        : options[key] || {};
}

export function getOverrides<K extends keyof FlatConfigOptions>(
    options: FlatConfigOptions,
    key: K,
) {
    const sub = resolveSubOptions(options, key);
    const subOverrides = sub?.overrides || {};
    return {
        ...(options.overrides as any)?.[key],
        ...subOverrides as any,
    };
}
