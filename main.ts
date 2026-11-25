// One-Line Office Jokes — entry program.
// Writes a single-line joke about office life to /output/entry.txt.
// Gate: UTF-8 text, 1-199 characters, not only whitespace, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our Monday meeting is called a 'quick sync,' which is corporate for two hours of nodding while everyone quietly updates their résumé.";

// Enforce the gate ourselves so a bad edit can never ship silently:
// one line, 1-199 characters, not only whitespace.
if (
  JOKE.length < 1 ||
  JOKE.length > 199 ||
  JOKE.includes("\n") ||
  JOKE.trim().length === 0
) {
  throw new Error(`Joke fails the gate (${JOKE.length} chars): ${JSON.stringify(JOKE)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
