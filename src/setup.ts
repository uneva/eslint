import type { FlatESLintConfig } from "eslint-define-config";

import { hasUnocss, hasVue } from "./env";
import {
    ignores,
    javascript,
    typescript,
    unocss,
    vue,
} from "./configs";

export type PresetLint = Partial<{
    vue: boolean
    unocss: boolean
}>

export function unlint(
    config: FlatESLintConfig | FlatESLintConfig[] = [],
    preset: PresetLint
): FlatESLintConfig[] {
    const configs = [
        ...ignores,
        ...javascript,
        ...typescript,
    ];

    const {
        vue: enableVue = hasVue,
        unocss: enableUnocss = hasUnocss,
    } = preset;

    if (enableVue) {
        configs.push(...vue);
    }

    if (enableUnocss) {
        configs.push(...unocss);
    }

    if (Object.keys(config).length > 0) {
        configs.push(...Array.isArray(config) ? config : [config]);
    }

    return configs;
}