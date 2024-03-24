import type { FlatESLintConfig } from "eslint-define-config";

import { pluginUnocss } from "../plugins";

export const unocss: FlatESLintConfig[] = [pluginUnocss.configs.flat as unknown as FlatESLintConfig];
