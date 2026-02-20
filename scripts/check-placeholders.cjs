/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "src");
const hits = [];

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.isFile() && (p.endsWith(".ts") || p.endsWith(".tsx"))) {
      const txt = fs.readFileSync(p, "utf8");
      if (txt.includes('href: "#"') || txt.includes('href="#"') || txt.includes('href={"#"}')) {
        hits.push(p);
      }
    }
  }
}

walk(root);

if (hits.length) {
  console.error("Found placeholder href=\"#\" in:");
  for (const h of hits) console.error(" - " + h);
  process.exit(1);
} else {
  console.log("OK: no href=\"#\" placeholders in src/");
}
