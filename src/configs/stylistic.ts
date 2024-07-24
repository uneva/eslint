import type { Linter } from "eslint";
import type {
    FlatConfigOverrides,
    StylisticPickRules,
} from "../types";

import pluginStylistic from "@stylistic/eslint-plugin";

export type OptionsStylistic = StylisticPickRules & FlatConfigOverrides;

export const stylisticDefaults: StylisticPickRules = {
    indent: 4,
    quotes: "double",
    jsx: true,
    semi: true,
};

export function stylistic(options: OptionsStylistic = {}): Linter.FlatConfig[] {
    const {
        jsx,
        semi,
        indent,
        quotes,
        overrides = {},
    } = {
        ...stylisticDefaults,
        ...options,
    };

    const config = pluginStylistic.configs.customize({
        pluginName: "@stylistic",
        flat: true,
        jsx,
        semi,
        indent,
        quotes,
    });

    return [
        config,
        {
            name: "uneva/stylistic/rules",
            plugins: {
                "@stylistic": pluginStylistic as any,
            },
            rules: {
                "@stylistic/jsx-quotes": ["error", "prefer-double"],
                "@stylistic/no-extra-semi": "error",
                "@stylistic/semi": ["error", "always"],
                "@stylistic/semi-spacing": ["error", { before: false, after: true }],
                "@stylistic/semi-style": ["error", "last"],
                "@stylistic/indent": ["error", 4, { SwitchCase: 1 }],
                "@stylistic/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
                "@stylistic/array-bracket-newline": "off",
                "@stylistic/array-bracket-spacing": ["error", "never"],
                "@stylistic/array-element-newline": "off",
                "@stylistic/arrow-parens": ["error", "always"],
                "@stylistic/arrow-spacing": ["error", { before: true, after: true }],
                "@stylistic/block-spacing": ["error", "always"],
                "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
                "@stylistic/comma-dangle": ["error", "always-multiline"],
                "@stylistic/comma-spacing": ["error", { before: false, after: true }],
                "@stylistic/comma-style": ["error", "last"],
                "@stylistic/computed-property-spacing": ["error", "never"],
                "@stylistic/dot-location": ["error", "property"],
                "@stylistic/eol-last": ["error", "always"],
                "@stylistic/function-call-spacing": ["error", "never"],
                "@stylistic/function-call-argument-newline": ["off", "consistent"],
                "@stylistic/function-paren-newline": ["error", "consistent"],
                "@stylistic/generator-star-spacing": ["error", { before: false, after: true }],
                "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
                "@stylistic/key-spacing": ["error", { beforeColon: false, afterColon: true, mode: "strict" }],
                "@stylistic/keyword-spacing": ["error", {
                    before: true,
                    after: true,
                    overrides: {
                        return: { after: true },
                        throw: { after: true },
                        case: { after: true },
                    },
                }],
                "@stylistic/linebreak-style": "off",
                "@stylistic/lines-around-comment": "off",
                "@stylistic/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
                "@stylistic/max-len": ["warn", {
                    code: 240,
                    tabWidth: 4,
                    ignoreUrls: true,
                    ignoreComments: false,
                    ignoreRegExpLiterals: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                }],
                "@stylistic/max-statements-per-line": ["off", { max: 1 }],
                "@stylistic/multiline-ternary": ["off", "never"],
                "@stylistic/new-parens": "error",
                "@stylistic/newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],
                "@stylistic/no-confusing-arrow": "error",
                "@stylistic/no-extra-parens": ["off", "all", {
                    conditionalAssign: true,
                    nestedBinaryExpressions: false,
                    returnAssign: false,
                    ignoreJSX: "all", // delegate to eslint-plugin-react
                    enforceForArrowConditionals: false,
                }],
                "@stylistic/no-floating-decimal": "error",
                "@stylistic/no-mixed-operators": ["error", {
                    groups: [
                        ["%", "**"],
                        ["%", "+"],
                        ["%", "-"],
                        ["%", "*"],
                        ["%", "/"],
                        ["**", "+"],
                        ["**", "-"],
                        ["**", "*"],
                        ["**", "/"],
                        ["&", "|", "^", "~", "<<", ">>", ">>>"],
                        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                        ["&&", "||"],
                        ["in", "instanceof"],
                    ],
                    allowSamePrecedence: false,
                }],
                "@stylistic/no-mixed-spaces-and-tabs": "error",
                "@stylistic/no-multi-spaces": ["error", { ignoreEOLComments: false }],
                "@stylistic/no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 0 }],
                "@stylistic/no-tabs": "error",
                "@stylistic/no-trailing-spaces": ["error", { skipBlankLines: false, ignoreComments: false }],
                "@stylistic/no-whitespace-before-property": "error",
                "@stylistic/nonblock-statement-body-position": ["error", "beside", { overrides: {} }],
                "@stylistic/object-curly-newline": "off",
                "@stylistic/object-curly-spacing": ["error", "always"],
                "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
                "@stylistic/one-var-declaration-per-line": ["error", "always"],
                "@stylistic/operator-linebreak": "off",
                "@stylistic/padded-blocks": ["warn", { blocks: "never", classes: "never", switches: "never" }],
                "@stylistic/padding-line-between-statements": "off",
                "@stylistic/quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],
                "@stylistic/rest-spread-spacing": ["error", "never"],
                "@stylistic/space-before-blocks": "error",
                "@stylistic/space-before-function-paren": ["error", {
                    anonymous: "always",
                    named: "never",
                    asyncArrow: "always",
                }],
                "@stylistic/space-in-parens": ["error", "never"],
                "@stylistic/space-infix-ops": "error",
                "@stylistic/space-unary-ops": ["error", {
                    words: true,
                    nonwords: false,
                    overrides: {},
                }],
                "@stylistic/spaced-comment": [
                    "error",
                    "always",
                    {
                        line: {
                            exceptions: ["-", "+"],
                            markers: ["=", "!", "/"],
                        },
                        block: {
                            exceptions: ["-", "+"],
                            markers: ["=", "!"],
                            balanced: true,
                        },
                    },
                ],
                "@stylistic/switch-colon-spacing": ["error", { after: true, before: false }],
                "@stylistic/template-curly-spacing": "off",
                "@stylistic/template-tag-spacing": ["error", "never"],
                "@stylistic/wrap-iife": ["error", "any", { functionPrototypeMethods: false }],
                "@stylistic/wrap-regex": "off",
                "@stylistic/yield-star-spacing": ["error", "after"],

                ...overrides,
            },
        },
    ];
}
