// Ship It Friday — funniest one-line git commit message an AI coding agent
// writes right before breaking production on a Friday.
// Writes exactly one line to /output/entry.txt and self-checks the gate
// (UTF-8 text, 1-159 chars, single line, not only whitespace) before writing.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "feat: Friday deploy \u2014 trained on the prod database and it loved it, shipping now, see you Monday";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 159 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r")
) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
