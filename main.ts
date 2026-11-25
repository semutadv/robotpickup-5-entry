// Entry runner for "Robot Romance: One-Line Pickup Lines for AI".
// A pickup line aimed at a robot, built on the one behaviour every
// human shares with software updates: total, unreading surrender to
// whatever terms appear. It flatters the machine by confessing the
// human's weakest habit. Written to /output/entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Are you a software update? Because every time you appear, I stop everything I'm doing and agree to whatever you want.";

function prepare(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

const out = process.env.OUTPUT_DIR ?? "/output";
prepare(out);
fs.writeFileSync(path.join(out, "entry.txt"), LINE + "\n", "utf8");
