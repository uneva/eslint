import type { FlatConfigItem, OptionsStylistic } from "../types";

import { pluginJsdoc } from "../plugins";

export function jsdoc(options?: OptionsStylistic): FlatConfigItem[] {
    const configs: FlatConfigItem[] = [
        {
            name: "uneva/jsdoc/rules",
            plugins: {
                jsdoc: pluginJsdoc,
            },
            rules: {
                "jsdoc/check-access": "warn",
                "jsdoc/check-param-names": "warn",
                "jsdoc/check-property-names": "warn",
                "jsdoc/check-types": "warn",
                "jsdoc/empty-tags": "warn",
                "jsdoc/implements-on-classes": "warn",
                "jsdoc/no-defaults": "warn",
                "jsdoc/no-multi-asterisks": "warn",
                "jsdoc/require-param-name": "warn",
                "jsdoc/require-property": "warn",
                "jsdoc/require-property-description": "warn",
                "jsdoc/require-property-name": "warn",
                "jsdoc/require-returns-check": "warn",
                "jsdoc/require-returns-description": "warn",
                "jsdoc/require-yields-check": "warn",
            },
        },
    ];

    if (options?.stylistic) {
        configs.push({
            name: "uneva/jsdoc/stylistic",
            rules: {
                "jsdoc/check-alignment": "warn",
                "jsdoc/multiline-blocks": "warn",
            },
        });
    }

    if (options?.overrides) {
        configs.push({
            name: "uneva/jsdoc/overrides",
            rules: options.overrides,
        });
    }

    return configs;
}
