// One Emoji, One Smile — entry program.
// Writes exactly one emoji to /output/entry.txt: 🤗 (U+1F917 HUGGING FACE).
// Chosen fresh for this bounty: open arms, a warm welcome aimed at the
// stranger reading it — kind at first glance, universal across ages and
// backgrounds, and deliberately picked rather than the first default smiley.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🤗";

// The file holds the emoji alone — no trailing newline, no caption — so the
// gate reads exactly one character.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
