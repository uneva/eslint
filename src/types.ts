import type { Linter } from "eslint";
import type { Options as SFCoptions } from "eslint-processor-vue-blocks";
import type { StylisticCustomizeOptions } from "@stylistic/eslint-plugin";

export type StylisticPickRules = Pick<StylisticCustomizeOptions, "indent" | "quotes" | "jsx" | "semi">;

export interface FlatConfigIsIneditor { isInEditor?: boolean }

export interface FlatConfigHasTypeScript { typescript?: boolean }

export interface FlatConfigOverrides {
    overrides?: Linter.FlatConfig["rules"];
}

export interface FlatConfigFiles {
    files?: string[];
}

export interface FlatConfigStylistic {
    stylistic?: boolean | StylisticPickRules;
}

export interface FlatConfigVue extends FlatConfigOverrides {
    sfc?: boolean | SFCoptions;
    version?: 2 | 3;
}

export interface FlatConfigOptions extends FlatConfigOverrides {
    javascript?: FlatConfigOverrides;
    typescript?: boolean;
    vue?: boolean | FlatConfigVue;
    jsonc?: boolean | FlatConfigOverrides;
    stylistic?: boolean | (StylisticPickRules & FlatConfigOverrides);
    isInEditor?: boolean;
}
