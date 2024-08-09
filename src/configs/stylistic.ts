import type { FlatConfigItem, OptionsStylistic, StylisticFocus } from "../types";

import { pluginStylistic } from "../plugins";

export const stylisticFocus: StylisticFocus = {
    quotes: "double",
    semi: true,
    jsx: true,
    indent: 4,
};

export function stylistic(options?: OptionsStylistic): FlatConfigItem[] {
    const {
        quotes,
        semi,
        jsx,
        indent,
    } = Object.assign({}, stylisticFocus, options?.stylistic || {});

    const config = pluginStylistic.configs.customize({
        pluginName: "style",
        flat: true,
        quotes,
        semi,
        jsx,
        indent,
    });

    return [
        {
            name: "uneva/stylistic/rules",
            plugins: {
                style: pluginStylistic,
            },
            rules: {
                ...config.rules,
                ...options?.overrides || {},
            },
        },
    ];
}
