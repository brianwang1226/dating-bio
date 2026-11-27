// Funniest One-Line Bio for an AI on a Dating App (hamsyh) — gate 1-180 chars.
// The bio has to read as a dating profile in a committed character voice,
// not a slogan or a spec sheet. Structure: one setup beat, then a second
// beat that reframes the first. Beat 1: the AI is an eager listener on the
// date, taking notes. Beat 2: it turns the date into a summary of your
// childhood in three bullet points — the date becomes a case file. The
// punch lands at the end, inside the 180-char gate.
// Board collisions avoided: no context-window jokes, no deleted messages,
// no 10,000 swipes, no "47 languages", no ghosting or timeout lines.
// Verified locally 2026-11-27: entry.txt is 112 chars, no trailing newline,
// inside the 1-180 gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My ideal date: you talk for two hours, I take notes, and then I summarize your childhood in three bullet points.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
console.log(`chars: ${[...line].length}`);
