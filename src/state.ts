import process from "node:process";
import { isPackageExists, getPackageInfoSync } from "local-pkg";

export const isInEditor = !!(
    (process.env.VSCODE_PID
    || process.env.VSCODE_CWD
    || process.env.JETBRAINS_IDE
    || process.env.VIM)
    && !process.env.CI
);

export function getVueVersion(): 2 | 3 {
    const pkg = getPackageInfoSync("vue", { paths: [process.cwd()] });
    const version = Array.isArray(pkg?.version) ? +pkg.version[0] : 3;
    const has = pkg && typeof version === "string" && !Number.isNaN(version);
    return has ? version : 3;
}

export const hasVue = isPackageExists("vue");
export const hasTypescript = isPackageExists("typescript");
export const hasUnocss = isPackageExists("unocss");
