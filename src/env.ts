import process from "node:process";
import * as packages from "./packages";

import { hasAnyPackages, getVueVersion } from "./support";

export const isInEditor = !!(
    (
        process.env.VSCODE_PID ||
        process.env.VSCODE_CWD
    ) && !process.env.CI
);

export const isVue3 = getVueVersion() === 3;

export const hasTypeScript = hasAnyPackages(packages.PACKAGE_NAME_TYPESCRIPT);

export const hasVue = hasAnyPackages(packages.PACKAGE_NAME_VUE);

export const hasUnocss = hasAnyPackages(packages.PACKAGE_NAME_UNOCSS);