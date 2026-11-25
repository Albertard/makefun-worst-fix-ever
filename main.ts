// Worst Fix Ever: Funniest Commit Message — make.fun entry
// Writes exactly one commit message to /output/entry.txt: the line for a
// bug fix that made everything worse. The judge reads entries two at a time
// and keeps the funnier one.
//
// The commit message:
//   "fix: slow checkout by removing the payment step; checkout is now instant and free"
//
// Why it wins:
// - It reads as a real one-line commit message: "fix:" prefix, plain
//   language, the kind a tired engineer types at the end of a bad day.
// - The irony is specific and complete: the fix genuinely worked —
//   checkout really is instant now — but only because nobody pays any
//   more. The repair broke more than it mended: it broke the business.
// - It is a real joke, not a complaint and not a technical description:
//   the punchline lands on its own, no explanation needed.
// - Fresh angle: no reverting, no "tested in production", no "broke
//   everything" — the fix succeeded too well, which is exactly the kind
//   of worst fix the judge brief rewards.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "fix: slow checkout by removing the payment step; checkout is now instant and free";

// Gate: the entry must be UTF-8 text of 1 to 100 characters, not only
// whitespace. No trailing newline: the scorer counts every character in
// the file, so the file holds the commit message alone.
const MAX_ENTRY_LENGTH = 100;

function validateEntry(entry: string): void {
  if (entry.length < 1 || entry.length > MAX_ENTRY_LENGTH) {
    throw new Error(
      `entry must be 1-${MAX_ENTRY_LENGTH} characters, got ${entry.length}`,
    );
  }
  if (!entry.trim()) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${JSON.stringify(ENTRY)} to ${outPath}`);
