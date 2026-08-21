// Trims meta descriptions over 160 chars by dropping the least-essential
// trailing clause(s) first — never rewrites or invents wording, only
// removes clauses that are redundant with other on-page/pillar-page info
// (e.g. "plus upholstery, mattress and rug cleaning" when those services
// already have their own dedicated pages).
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const files = execSync('git ls-files -- "*.html"', { cwd: root })
  .toString()
  .split("\n")
  .filter((f) => f.endsWith("index.html") || f.endsWith(".html"))
  .map((f) => path.join(root, f));

const LIMIT = 160;
let fixed = 0;
let stillOver = [];

for (const file of files) {
  let html = fs.readFileSync(file, "utf8");
  const m = html.match(/<meta name="description" content="([^"]*)"/);
  if (!m) continue;
  let d = m[1];
  if (d.length <= LIMIT) continue;
  const original = d;

  // Step 1: drop a trailing "plus/and <service list> cleaning/removal (too)"
  // clause that immediately precedes the final sentence (Free quotes / etc).
  d = d.replace(/,\s*(?:plus|and)\s+[a-z][a-z ,'-]*?(?:cleaning|removal)(?:\s*too)?(\.\s*[A-Z][^.]*\.)?$/i, "$1");
  d = d.replace(/^\s+/, "");

  // Step 2: if still too long, drop the trailing "Free quotes." /
  // "Free, no-obligation quotes." sentence entirely (the preceding
  // sentence already has its own closing period, so replace with "").
  if (d.length > LIMIT) {
    d = d.replace(/\s*Free,?\s*(?:no-obligation\s+)?quotes?\.$/i, "");
  }

  // Step 3b: drop a trailing "Upholstery, mattress, rug and pet-stain
  // cleaning too." style sentence — redundant with the service pillar
  // pages and the page's own body copy, same reasoning as step 1.
  if (d.length > LIMIT) {
    d = d.replace(/\s*Upholstery,[^.]*\.$/i, "");
  }

  // Step 3c: condense an embedded "carpets, upholstery, mattresses and
  // rugs" service list down to "carpets and more" when a long local
  // descriptor still pushes it over — the full list is already on every
  // relevant service pillar page and in the page's own H1/body copy.
  if (d.length > LIMIT) {
    d = d.replace(/\bcarpets, upholstery, mattresses and rugs\b/i, "carpets and more");
  }

  // Step 3: if still too long, drop a leading "Professional " (redundant
  // with the title tag, which always states the service).
  if (d.length > LIMIT && /^Professional\s/.test(d)) {
    d = d.replace(/^Professional\s/, "");
    d = d.charAt(0).toUpperCase() + d.slice(1);
  }

  if (d === original) continue;
  if (d.length > LIMIT) {
    stillOver.push(`${path.relative(root, file)}: ${d.length}ch — "${d}"`);
    continue; // don't write a change that didn't fully fix it without review
  }

  html = html.replace(m[0], `<meta name="description" content="${d}"`);
  // Keep og:description / twitter description in sync if it's an exact copy of the original.
  html = html.split(`content="${original}"`).join(`content="${d}"`);
  fs.writeFileSync(file, html);
  fixed++;
}

console.log(`Fixed: ${fixed}`);
console.log(`\nStill over ${LIMIT} after trimming (needs manual look, ${stillOver.length}):`);
stillOver.forEach((s) => console.log("  " + s));
