import type { FlatConfigItem } from "../types";

import { GLOB_EXCLUDE } from "../globs";

export function ignores(): FlatConfigItem[] {
    return [
        {
            name: "uneva/ignores",
            ignores: GLOB_EXCLUDE,
        },
    ];
}
