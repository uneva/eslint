import { defineFlatConfig } from "eslint-define-config";
import { GLOB_EXCLUDE } from "../globs";

export const ignores = defineFlatConfig([
    { ignores: GLOB_EXCLUDE },
]);
