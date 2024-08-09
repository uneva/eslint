import type { Linter } from "eslint";
import type { StylisticCustomizeOptions } from "@stylistic/eslint-plugin";

export type InteropDefault<T> = T extends { default: infer U } ? U : T;

export type StylisticFocus = Pick<StylisticCustomizeOptions, "indent" | "quotes" | "jsx" | "semi">;

export type FlatConfigItem = Omit<Linter.Config, "plugins"> & {
    plugins?: Record<string, any>;
};

export interface OptionsOverrides {
    overrides?: FlatConfigItem["rules"];
}

export interface OptionsIsInEditor {
    isInEditor?: boolean;
}

export interface OptionsProjectType {
    type?: "app" | "lib";
}

export interface OptionsComponentExts {
    componentExts?: string[];
}

export interface OptionsFiles {
    files?: Array<string | string[]>;
}

export interface OptionsStylisticOverrides extends StylisticFocus {}
export type OptionsStylistic = OptionsOverrides & {
    stylistic?: boolean | OptionsStylisticOverrides;
};

export type OptionsJavascript = OptionsOverrides & OptionsIsInEditor;

export type OptionsTypescript = OptionsOverrides & OptionsFiles & OptionsComponentExts & OptionsProjectType;

export type OptionsVue = OptionsStylistic & OptionsFiles;

export type OptionsJsonc = OptionsFiles & OptionsStylistic;

export interface OptionsUseConfigs extends OptionsComponentExts, OptionsProjectType {
    typescript?: boolean | OptionsTypescript;
    stylistic?: boolean | OptionsStylisticOverrides;
    jsonc?: boolean | OptionsJsonc;
    sortKeys?: boolean;
    isInEditor?: boolean;
}
