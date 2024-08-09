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
                "style/jsx-quotes": ["error", "prefer-double"],
                "style/no-extra-semi": "error",
                "style/semi": ["error", "always"],
                "style/semi-spacing": ["error", { before: false, after: true }],
                "style/semi-style": ["error", "last"],
                "style/indent": ["error", 4, { SwitchCase: 1 }],
                "style/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
                "style/array-bracket-newline": "off",
                "style/array-bracket-spacing": ["error", "never"],
                "style/array-element-newline": "off",
                "style/arrow-parens": ["error", "always"],
                "style/arrow-spacing": ["error", { before: true, after: true }],
                "style/block-spacing": ["error", "always"],
                "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
                "style/comma-dangle": ["error", "always-multiline"],
                "style/comma-spacing": ["error", { before: false, after: true }],
                "style/comma-style": ["error", "last"],
                "style/computed-property-spacing": ["error", "never"],
                "style/dot-location": ["error", "property"],
                "style/eol-last": ["error", "always"],
                "style/function-call-spacing": ["error", "never"],
                "style/function-call-argument-newline": ["off", "consistent"],
                "style/function-paren-newline": ["error", "consistent"],
                "style/generator-star-spacing": ["error", { before: false, after: true }],
                "style/implicit-arrow-linebreak": ["error", "beside"],
                "style/key-spacing": ["error", { beforeColon: false, afterColon: true, mode: "strict" }],
                "style/keyword-spacing": ["error", {
                    before: true,
                    after: true,
                    overrides: {
                        return: { after: true },
                        throw: { after: true },
                        case: { after: true },
                    },
                }],
                "style/linebreak-style": "off",
                "style/lines-around-comment": "off",
                "style/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
                "style/max-len": ["warn", {
                    code: 240,
                    tabWidth: 4,
                    ignoreUrls: true,
                    ignoreComments: false,
                    ignoreRegExpLiterals: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                }],
                "style/max-statements-per-line": ["off", { max: 1 }],
                "style/multiline-ternary": ["off", "never"],
                "style/new-parens": "error",
                "style/newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],
                "style/no-confusing-arrow": "error",
                "style/no-extra-parens": ["off", "all", {
                    conditionalAssign: true,
                    nestedBinaryExpressions: false,
                    returnAssign: false,
                    ignoreJSX: "all", // delegate to eslint-plugin-react
                    enforceForArrowConditionals: false,
                }],
                "style/no-floating-decimal": "error",
                "style/no-mixed-operators": ["error", {
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
                "style/no-mixed-spaces-and-tabs": "error",
                "style/no-multi-spaces": ["error", { ignoreEOLComments: false }],
                "style/no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 0 }],
                "style/no-tabs": "error",
                "style/no-trailing-spaces": ["error", { skipBlankLines: false, ignoreComments: false }],
                "style/no-whitespace-before-property": "error",
                "style/nonblock-statement-body-position": ["error", "beside", { overrides: {} }],
                "style/object-curly-newline": "off",
                "style/object-curly-spacing": ["error", "always"],
                "style/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
                "style/one-var-declaration-per-line": ["error", "always"],
                "style/operator-linebreak": "off",
                "style/padded-blocks": ["warn", { blocks: "never", classes: "never", switches: "never" }],
                "style/padding-line-between-statements": "off",
                "style/quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],
                "style/rest-spread-spacing": ["error", "never"],
                "style/space-before-blocks": "error",
                "style/space-before-function-paren": ["error", {
                    anonymous: "always",
                    named: "never",
                    asyncArrow: "always",
                }],
                "style/space-in-parens": ["error", "never"],
                "style/space-infix-ops": "error",
                "style/space-unary-ops": ["error", {
                    words: true,
                    nonwords: false,
                    overrides: {},
                }],
                "style/spaced-comment": [
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
                "style/switch-colon-spacing": ["error", { after: true, before: false }],
                "style/template-curly-spacing": "off",
                "style/template-tag-spacing": ["error", "never"],
                "style/wrap-iife": ["error", "any", { functionPrototypeMethods: false }],
                "style/wrap-regex": "off",
                "style/yield-star-spacing": ["error", "after"],
                ...options?.overrides || {},
            },
        },
    ];
}
