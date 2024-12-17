import type { Linter } from "eslint";
import type {
    FlatConfigItem,
    OptionsUseConfigs,
} from "./types";

import {
    hasTypescript,
    hasVue,
    isInEditor,
} from "./state";

import {
    ignores,
    javascript,
    jsdoc,
    jsonc,
    stylistic,
    typescript,
    vue,
} from "./configs";

export function unlint(config?:(OptionsUseConfigs & FlatConfigItem), ...group: FlatConfigItem[]): FlatConfigItem[] {
    const inferType = config?.type || "app";
    const inferComponentExts = Array.isArray(config?.componentExts) ? config.componentExts : [];
    const inferStylistic = typeof config?.stylistic === "object" ? true : !!config?.stylistic;
    const inferJsonc = typeof config?.jsonc === "object" ? true : !!config?.jsonc;
    const inferTypescript = config?.typescript === false ? {} : typeof config?.typescript === "object" ? config.typescript : {};
    const inferIsInEditor = config?.isInEditor || isInEditor;

    const configs: Linter.Config[] = [
        ...ignores(config?.ignores || []),
        ...jsdoc({ stylistic: inferStylistic }),
        ...javascript({ isInEditor: inferIsInEditor }),
    ];

    if (inferJsonc)configs.push(...jsonc({ stylistic: config?.stylistic }));

    if (hasVue)inferComponentExts.push("vue");

    if (inferStylistic)configs.push(...stylistic({ stylistic: config?.stylistic }));

    if (hasTypescript) {
        configs.push(...typescript({
            ...inferTypescript,
            componentExts: inferComponentExts,
            type: inferType,
        }));
    }

    if (hasVue) {
        configs.push(...vue({
            files: config?.files,
        }));
    }

    if (Array.isArray(group))configs.push(...group);

    return configs;
}
