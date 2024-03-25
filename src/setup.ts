import type { FlatESLintConfig } from "eslint-define-config";

import { defineFlatConfig } from "eslint-define-config";
import { hasTypeScript, hasUnocss, hasVue } from "./env";
import {
    ignores,
    javascript,
    typescript,
    vue,
} from "./configs";

const props:Array<keyof FlatESLintConfig> = [
    "files",
    "ignores",
    "languageOptions",
    "linterOptions",
    "plugins",
    "processor",
    "rules",
    "settings",
];

export type FastConfig = {
    typescript: boolean;
    vue: boolean;
    unocss: boolean;
}

export function defineFastConfig(configs?: Partial<FastConfig>): FastConfig {
    return Object.assign({}, {
        typescript: hasTypeScript,
        vue: hasVue,
        unocss: hasUnocss,
    }, configs);
}

export function unlint(fast?: Partial<FastConfig> & FlatESLintConfig, ...configs: FlatESLintConfig[]): FlatESLintConfig[] {
    const config = [...ignores, ...javascript];
    const fastConfig = defineFastConfig(fast);

    if (fastConfig.typescript) config.push(...typescript);

    if (fastConfig.vue) config.push(...vue);

    const effective = props.reduce<FlatESLintConfig>((acc, key) => {
        if (key in fastConfig) {
            acc[key] = fastConfig[key as keyof FastConfig] as any;
        }
        return acc;
    }, {});

    config.push(...configs, effective);

    return defineFlatConfig(config);
}
