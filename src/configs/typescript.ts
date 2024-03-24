import type { FlatESLintConfig } from "eslint-define-config";

import { GLOB_JS, GLOB_TS, GLOB_TSX } from "../globs";
import { tslint } from "../plugins";

export const typescriptCore = tslint.config({
    extends: [...tslint.configs.recommended],
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
        parser: tslint.parser,
        parserOptions: {
            sourceType: "module"
        }
    },
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/class-literal-property-style": ["error", "fields"],
        "@typescript-eslint/consistent-type-assertions": ["error", {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "never"
        }],
        "@typescript-eslint/consistent-type-definitions": ["off", "interface"],
        "@typescript-eslint/consistent-type-imports": ["error", {
            disallowTypeAnnotations: false,
            // fixStyle: "inline-type-imports"
            fixStyle: "separate-type-imports"
        }],
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/init-declarations": "off",
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-array-delete": "error",
        "@typescript-eslint/no-base-to-string": "off",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-dynamic-delete": "off",
        "@typescript-eslint/no-empty-function": ["error", {
            allow: ["arrowFunctions", "functions", "methods"]
        }],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-non-null-assertion": "off",
        "@typescript-eslint/no-extra-parens": "off",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-for-in-array": "off",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/no-invalid-this": "off",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-loop-func": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-meaningless-void-operator": "off",
        "@typescript-eslint/no-misused-new": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-mixed-enums": "error",
        "@typescript-eslint/no-namespace": ["error", {
            allowDeclarations: true,
            allowDefinitionFiles: true
        }],
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-redundant-type-constituents": "error",
        // "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-this-alias": ["error", { allowDestructuring: true }],
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-unnecessary-qualifier": "off",
        "@typescript-eslint/no-unnecessary-type-arguments": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-unary-minus": "off",
        "@typescript-eslint/no-unused-expressions": ["error", {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
        }],
        "@typescript-eslint/no-unused-vars": ["error", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: true
        }],
        "@typescript-eslint/no-use-before-define": ["error", {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false
        }],
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-useless-empty-export": "warn",
        "@typescript-eslint/no-useless-template-literals": "error",
        // "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/non-nullable-type-assertion-style": "off",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-destructuring": "off",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-find": "error",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/prefer-function-type": "off",
        "@typescript-eslint/prefer-includes": "off",
        "@typescript-eslint/prefer-literal-enum-member": "off",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/prefer-optional-chain": "off",
        "@typescript-eslint/prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
        "@typescript-eslint/prefer-readonly": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/prefer-reduce-type-parameter": "off",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/prefer-return-this-type": "off",
        "@typescript-eslint/prefer-string-starts-ends-with": "off",
        "@typescript-eslint/prefer-ts-expect-error": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
        "@typescript-eslint/require-array-sort-compare": "off",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/sort-type-constituents": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/switch-exhaustiveness-check": "off",
        "@typescript-eslint/triple-slash-reference": ["error", {
            path: "never",
            types: "always",
            lib: "always"
        }],
        "@typescript-eslint/typedef": ["error", {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: false,
            objectDestructuring: false,
            parameter: false,
            propertyDeclaration: true,
            variableDeclaration: false,
        }],
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/unified-signatures": "off",
        "@typescript-eslint/use-unknown-in-catch-callback-variable": "off"
    }
}) as FlatESLintConfig[];

export const typescript: FlatESLintConfig[] = [
    ...typescriptCore,
    {
        files: [GLOB_JS, "**/*.cjs"],
        rules: {
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-var-requires": "off",
        },
    },
];