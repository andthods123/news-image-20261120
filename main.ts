// news-image-20261120 entry (Node 22, standard library only).
// entry.png sits beside this file; the program places an identical copy at
// /output/entry.png. Running it twice writes the same bytes twice.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  console.error("entry.png missing beside main.ts");
  process.exit(1);
}
const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destDir, { recursive: true });
cpSync(source, join(destDir, "entry.png"));
console.log("wrote " + join(destDir, "entry.png"));
