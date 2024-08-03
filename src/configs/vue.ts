import type { FlatConfigItem, OptionsVue } from "../types";

import tseslint from "typescript-eslint";
import { typescriptSetup } from "./typescript";
import { hasTypescript } from "../state";
import { parserTypescript, parserVue, pluginVue } from "../plugins";
import { GLOB_VUE } from "../globs";

export function vue(options?: OptionsVue): FlatConfigItem[] {
    const files = Array.isArray(options?.files) ? options.files : [GLOB_VUE];
    const configs: FlatConfigItem[] = [];

    if (hasTypescript)configs.push(tseslint.config({
        extends: typescriptSetup({ files }) as any[],
    }) as any);

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
            processor: pluginVue.processors[".vue"],
            rules: {},
        },
    );

    return configs;
}
