import type { Linter } from "eslint";
import type {
    FlatConfigItem,
    OptionsUseConfigs,
} from "./types";

import {
    isInEditor,
    hasTypescript,
    hasVue,
} from "./state";

import {
    ignores,
    stylistic,
    javascript,
    typescript,
    vue,
} from "./configs";

export function unlint(config?:(OptionsUseConfigs & FlatConfigItem), ...group: FlatConfigItem[]): FlatConfigItem[] {
    const inferType = config?.type || "app";
    const inferComponentExts = Array.isArray(config?.componentExts) ? config.componentExts : [];
    const inferStylistic = typeof config?.stylistic === "object" ? true : !!config?.stylistic;
    const inferTypescript = config?.typescript === false ? {} : typeof config?.typescript === "object" ? config.typescript : {};
    const inferIsInEditor = config?.isInEditor || isInEditor;

    const configs: Linter.Config[] = [
        ...ignores(),
        ...javascript({ isInEditor: inferIsInEditor }),
    ];

    if (hasVue)inferComponentExts.push("vue");

    if (inferStylistic)configs.push(...stylistic({ stylistic: config?.stylistic }));

    if (hasTypescript)configs.push(...typescript({
        ...inferTypescript,
        componentExts: inferComponentExts,
        type: inferType,
    }));

    if (hasVue)configs.push(...vue({
        files: config?.files,
    }));

    if (Array.isArray(group))configs.push(...group);

    return configs;
}
