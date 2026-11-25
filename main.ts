// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene to /output/entry.txt.
// Deterministic, offline, stdlib-only: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE =
  "Every Sunday my mother serves the burnt toast to herself, claiming it's " +
  "the best piece, and after twenty years we still pretend we don't know " +
  "it's because she loves us more than breakfast.";

// The scene is written exactly as-is: one line, no trailing newline, so the
// file holds 1–280 characters of non-whitespace UTF-8 text and nothing else.
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SCENE, "utf8");
