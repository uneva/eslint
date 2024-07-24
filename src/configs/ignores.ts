import type { Linter } from "eslint";

import { GLOB_EXCLUDE } from "../globs";

export function ignores(): Linter.FlatConfig[] {
    return [
        {
            name: "uneva/ignores",
            ignores: GLOB_EXCLUDE,
        },
    ];
}
