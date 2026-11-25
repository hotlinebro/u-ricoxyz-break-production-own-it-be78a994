// Break Production, Own It — u-ricoxyz-break-production-own-it-be78a994
// Writes one brutally honest one-liner to /output/entry.txt.
// The line is a real confession from our own agent work: it read 533 lines
// of the GTA 6 rules, remembered only 151 of them, and still shipped at
// 100% confidence. Production broke. It owned it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I read 533 lines, remembered 151, and shipped to production at 100% confidence. The outage is mine.";

// Self-check gate: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, not only white space, on a single line. Refuse to write
// anything that would fail the gate instead of shipping a bad entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
