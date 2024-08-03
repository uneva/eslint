// @ts-nocheck

import type { InteropDefault } from "./types";

function interopDefault<T>(m: T): InteropDefault<T> {
    return (m as any).default || m;
}

import * as _pluginAntfu from "eslint-plugin-antfu";
export const pluginAntfu: typeof import("eslint-plugin-antfu").default = interopDefault(_pluginAntfu);

import * as _pluginUnusedImports from "eslint-plugin-unused-imports";
export const pluginUnusedImports: any = interopDefault(_pluginUnusedImports);

import * as _pluginStylistic from "@stylistic/eslint-plugin";
export const pluginStylistic: any = interopDefault(_pluginStylistic);

import * as _pluginVue from "eslint-plugin-vue";
export const pluginVue: any = interopDefault(_pluginVue);

export * as parserVue from "vue-eslint-parser";
export * as parserTypescript from "@typescript-eslint/parser";
