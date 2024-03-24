import type * as packages from "./packages";

import { getPackageInfoSync, isPackageExists } from "local-pkg";

import process from "node:process";

// get type of packages
export type PakcagesName = typeof packages[keyof typeof packages];

// check any package exists
export function hasAnyPackages<T extends string | string[] = PakcagesName | PakcagesName[]>(asPackages: T): boolean {
    return Array.isArray(asPackages)
        ? asPackages.some((name: string) => isPackageExists(name))
        : isPackageExists(asPackages);
}

// check all packages exists
export type InteropDefault<T> = T extends { default: infer U } ? U : T;

// get default export
export function interopDefault<T>(m: T): InteropDefault<T> {
    return (m as any).default ?? m;
}

export function getVueVersion() {
    const pkg = getPackageInfoSync("vue", { paths: [process.cwd()] });

    if (pkg &&
        typeof pkg.version === "string" &&
        !Number.isNaN(+pkg.version[0])) {
        return +pkg.version[0];
    }

    return 3;
}
