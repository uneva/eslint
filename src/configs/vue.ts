import type { FlatESLintConfig, Rules } from "eslint-define-config";

import { defineFlatConfig } from "eslint-define-config";
import { typescriptFlatESLintConfig } from "./typescript";
import { pluginVue } from "../plugins";
import { isVue3 } from "../env";
import { GLOB_INLINE_ELEMENTS, GLOB_VUE } from "../globs";

import tseslint from "typescript-eslint";
import parservue from "vue-eslint-parser";

export const vueShare: Partial<Rules> = {
    // Base Rules
    "vue/comment-directive": "error",
    "vue/jsx-uses-vars": "error",

    // Priority A: Essential
    "vue/multi-word-component-names": "off",
    "vue/no-arrow-functions-in-watch": "error",
    "vue/no-async-in-computed-properties": "error",
    "vue/no-child-content": "error",
    "vue/no-computed-properties-in-data": "error",
    "vue/no-dupe-keys": "error",
    "vue/no-dupe-v-else-if": "error",
    "vue/no-duplicate-attributes": "error",
    "vue/no-export-in-script-setup": "error",
    "vue/no-mutating-props": "error",
    "vue/no-parsing-error": ["error", {
        "x-invalid-end-tag": false,
        "invalid-first-character-of-tag-name": false,
    }],
    "vue/no-ref-as-operand": "error",
    "vue/no-reserved-component-names": "error",
    "vue/no-reserved-keys": "error",
    "vue/no-reserved-props": ["error", { vueVersion: isVue3 ? 3 : 2 }],
    "vue/no-shared-component-data": "error",
    "vue/no-side-effects-in-computed-properties": "error",
    "vue/no-template-key": "off",
    "vue/no-textarea-mustache": "error",
    "vue/no-unused-components": "off",
    "vue/no-unused-vars": ["error", { ignorePattern: "^_" }],
    "vue/no-use-computed-property-like-method": "off",
    "vue/no-use-v-if-with-v-for": ["error", { allowUsingIterationVar: true }],
    "vue/no-useless-template-attributes": "error",
    "vue/no-v-text-v-html-on-component": "error",
    "vue/require-component-is": "error",
    "vue/require-prop-type-constructor": "error",
    "vue/require-render-return": "error",
    "vue/require-v-for-key": "error",
    "vue/require-valid-default-prop": "error",
    "vue/return-in-computed-property": "error",
    "vue/return-in-emits-validator": "error",
    "vue/use-v-on-exact": "error",
    "vue/valid-attribute-name": "error",
    "vue/valid-define-emits": "error",
    "vue/valid-define-props": "error",
    "vue/valid-next-tick": "error",
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
    "vue/valid-v-slot": "error",
    "vue/valid-v-text": "error",

    // Priority B: Strongly Recommended
    "vue/attribute-hyphenation": "off",
    "vue/component-definition-name-casing": "off",
    "vue/first-attribute-linebreak": ["error", {
        singleline: "beside",
        multiline: "below",
    }],
    "vue/html-closing-bracket-newline": ["error", {
        singleline: "never",
        multiline: "never",
        selfClosingTag: {
            singleline: "never",
            multiline: "always",
        },
    }],
    "vue/html-closing-bracket-spacing": ["error"],
    "vue/html-end-tags": "error",
    "vue/html-indent": ["error", 4],
    "vue/html-quotes": ["error", "double", { avoidEscape: true }],
    "vue/html-self-closing": ["error", {
        html: {
            component: "always",
            normal: "always",
            void: "any",
        },
        math: "always",
        svg: "always",
    }],
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": ["error"],
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/no-multi-spaces": "error",
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    "vue/no-template-shadow": "error",
    "vue/one-component-per-file": "off",
    "vue/prop-name-casing": "off",
    "vue/require-default-prop": "off",
    "vue/require-prop-types": "off",
    "vue/singleline-html-element-content-newline": ["error", {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: GLOB_INLINE_ELEMENTS,
        externalIgnores: [],
    }],
    "vue/v-bind-style": "off",
    "vue/v-on-style": "off",
    "vue/v-slot-style": "off",

    // Priority C: Recommended
    "vue/attributes-order": "off",
    "vue/no-lone-template": "off",
    "vue/no-multiple-slot-args": "error",
    "vue/no-v-html": "off",
    "vue/order-in-components": ["error"],
    "vue/this-in-template": ["error", "never"],

    // Uncategorized
    "vue/block-lang": "off",
    "vue/block-order": ["error", { order: ["template", "script", "style"] }],
    "vue/component-tags-order": "off",
    "vue/block-tag-newline": ["error"],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/component-options-name-casing": ["error", "PascalCase"],
    "vue/custom-event-name-casing": ["error", "camelCase"],
};

export const vue3: Partial<Rules> = {
    ...pluginVue.configs.base.rules,
    ...pluginVue.configs["vue3-essential"].rules,
    ...pluginVue.configs["vue3-strongly-recommended"].rules,
    ...pluginVue.configs["vue3-recommended"].rules,
    "vue/component-api-style": ["error", ["script-setup", "composition", "composition-vue2"]],
    "vue/valid-template-root": "off",
    "vue/define-emits-declaration": "error",
    "vue/define-macros-order": "off",
    // "vue/define-props-declaration":"off",
    // "vue/enforce-style-attribute":"off",
};

export const vue2: Partial<Rules> = {
    ...pluginVue.configs.base.rules,
    ...pluginVue.configs.essential.rules,
    ...pluginVue.configs["strongly-recommended"].rules,
    ...pluginVue.configs.recommended.rules,
    "vue/component-api-style": ["error", ["options"]],
    "vue/valid-template-root": "error",
};

export const vuetsFlatESLintConfig = tseslint.config({
    extends: typescriptFlatESLintConfig as any,
    files: [GLOB_VUE],
    languageOptions: {
        parser: parservue,
        parserOptions: {
            ecmaFeatures: { jsx: true },
            extraFileExtensions: [".vue"],
        },
    },
}) as FlatESLintConfig[];

export const vue = defineFlatConfig([
    ...vuetsFlatESLintConfig,
    {
        languageOptions: {
            globals: {
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
        plugins: {
            vue: pluginVue,
        },
    },
    {
        files: [GLOB_VUE],
        languageOptions: {
            parser: parservue,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                parser: "@typescript-eslint/parser",
                sourceType: "module",
            },
        },
        processor: pluginVue.processors[".vue"],
        rules: {
            ...(isVue3 ? vue3 : vue2),
            ...vueShare,
        },
    },
]);
