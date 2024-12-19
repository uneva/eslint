import process from "node:process";
import { getPackageInfoSync, isPackageExists } from "local-pkg";

export const parserPlain = {
    meta: {
        name: "parser-plain",
    },
    parseForESLint: (code: string) => ({
        ast: {
            body: [],
            comments: [],
            loc: { end: code.length, start: 0 },
            range: [0, code.length],
            tokens: [],
            type: "Program",
        },
        scopeManager: null,
        services: { isPlain: true },
        visitorKeys: {
            Program: [],
        },
    }),
};

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

export const isVue2 = getVueVersion() === 2;
export const isVue3 = getVueVersion() === 3;
export const hasVue = isPackageExists("vue");
export const hasTypescript = isPackageExists("typescript");
export const hasUnocss = isPackageExists("unocss");
