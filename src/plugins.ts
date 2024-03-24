// @ts-nocheck

import { interopDefault } from "./support";

import tslint from "typescript-eslint";
export { tslint };

import * as pluginAsVue from "eslint-plugin-vue";
export const pluginVue = interopDefault(pluginAsVue);

import * as pluginAsUnocss from "@unocss/eslint-plugin";
export const pluginUnocss: typeof import("@unocss/eslint-plugin").default = interopDefault(pluginAsUnocss);

export * as pluginUnusedImports from "eslint-plugin-unused-imports";

export * as parserVue from "vue-eslint-parser";