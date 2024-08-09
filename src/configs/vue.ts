import type { FlatConfigItem, OptionsVue } from "../types";

import tseslint from "typescript-eslint";
import { typescriptSetup } from "./typescript";
import { hasTypescript, isVue2 } from "../state";
import { mergeProcessors } from "eslint-merge-processors";
import { parserTypescript, parserVue, pluginVue, processorVueBlocks } from "../plugins";
import { GLOB_VUE } from "../globs";

export function vue(options?: OptionsVue): FlatConfigItem[] {
    const files = Array.isArray(options?.files) ? options.files : [GLOB_VUE];
    const configs: FlatConfigItem[] = [];

    if (hasTypescript) {
        configs.push(...tseslint.config({
            extends: typescriptSetup({ files }) as any[],
        }) as any);
    }

    configs.push(
        {
            name: "uneva/vue/setup",
            plugins: Object.assign({}, { vue: pluginVue }, hasTypescript ? { "@typescript-eslint": tseslint.plugin } : {}),
            languageOptions: {
                globals: {
                    $: "readonly",
                    $$: "readonly",
                    computed: "readonly",
                    defineEmits: "readonly",
                    defineExpose: "readonly",
                    defineProps: "readonly",
                    onMounted: "readonly",
                    onUnmounted: "readonly",
                    reactive: "readonly",
                    ref: "readonly",
                    shallowReactive: "readonly",
                    shallowRef: "readonly",
                    toRef: "readonly",
                    toRefs: "readonly",
                    watch: "readonly",
                    watchEffect: "readonly",
                },
            },
        },
        {
            name: "uneva/vue/rules",
            files,
            languageOptions: {
                parser: parserVue,
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true,
                    },
                    extraFileExtensions: [".vue"],
                    parser: hasTypescript ? parserTypescript : undefined,
                    sourceType: "module",
                },
            },
            // processor: pluginVue.processors[".vue"],
            processor: mergeProcessors([
                pluginVue.processors[".vue"],
                processorVueBlocks.default({
                    blocks: { styles: true },
                }),
            ]),
            rules: {
                ...pluginVue.configs.base.rules as any,

                ...isVue2
                    ? {
                        ...pluginVue.configs.essential.rules as any,
                        ...pluginVue.configs["strongly-recommended"].rules as any,
                        ...pluginVue.configs.recommended.rules as any,
                    }
                    : {
                        ...pluginVue.configs["vue3-essential"].rules as any,
                        ...pluginVue.configs["vue3-strongly-recommended"].rules as any,
                        ...pluginVue.configs["vue3-recommended"].rules as any,
                    },
                "node/prefer-global/process": "off",
                "vue/block-order": ["error", {
                    order: ["script", "template", "style"],
                }],

                "vue/component-name-in-template-casing": ["error", "PascalCase"],
                "vue/component-options-name-casing": ["error", "PascalCase"],

                ...options?.stylistic
                    ? {
                        "vue/array-bracket-spacing": ["error", "never"],
                        "vue/arrow-spacing": ["error", { after: true, before: true }],
                        "vue/block-spacing": ["error", "always"],
                        "vue/block-tag-newline": ["error", {
                            multiline: "always",
                            singleline: "always",
                        }],
                        "vue/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
                        "vue/comma-dangle": ["error", "always-multiline"],
                        "vue/comma-spacing": ["error", { after: true, before: false }],
                        "vue/comma-style": ["error", "last"],
                        "vue/html-comment-content-spacing": ["error", "always", {
                            exceptions: ["-"],
                        }],
                        "vue/key-spacing": ["error", { afterColon: true, beforeColon: false }],
                        "vue/keyword-spacing": ["error", { after: true, before: true }],
                        "vue/object-curly-newline": "off",
                        "vue/object-curly-spacing": ["error", "always"],
                        "vue/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
                        "vue/operator-linebreak": ["error", "before"],
                        "vue/padding-line-between-blocks": ["error", "always"],
                        "vue/quote-props": ["error", "consistent-as-needed"],
                        "vue/space-in-parens": ["error", "never"],
                        "vue/template-curly-spacing": "error",
                    }
                    : {},

                ...options?.overrides || {},
            },
        },
    );

    return configs;
}
