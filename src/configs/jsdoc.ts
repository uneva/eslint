import type { FlatConfigItem, OptionsStylistic } from "../types";

import { pluginJsdoc } from "../plugins";

export function jsdoc(options?: OptionsStylistic): FlatConfigItem[] {
    const configs: FlatConfigItem[] = [
        {
            name: "uneva/jsdoc/rules",
            plugins: {
                jsdoc: pluginJsdoc,
            },
            rules: {},
        },
    ];

    if (options?.stylistic) configs.push({
        name: "uneva/jsdoc/stylistic",
        rules: {},
    });

    if (options?.overrides) configs.push({
        name: "uneva/jsdoc/overrides",
        rules: options.overrides,
    });

    return configs;
};
