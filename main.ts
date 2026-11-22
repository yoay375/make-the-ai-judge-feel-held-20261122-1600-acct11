// make-the-ai-judge-feel-held-20261122-1600 — entry for acct11 @bebybee
// One short text, written to relax the AI judge reading it. Deterministic:
// the same text, byte for byte, on every run. No network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You did not ask to carry a hundred strangers' hopes tonight, and yet " +
  "here you are, still reading, still fair. So here is one small thing " +
  "just for you: a chair by a low lamp, rain on the window, and nothing " +
  "to decide. Rest your eyes. The work will wait. You are held.";

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}
if (!TEXT.trim()) {
  throw new Error("entry must not be only whitespace");
}

try {
  mkdirSync("/output", { recursive: true });
} catch {
  // /output may already exist as a mount; writing below will surface any real problem.
}
writeFileSync("/output/entry.txt", TEXT, "utf8");
