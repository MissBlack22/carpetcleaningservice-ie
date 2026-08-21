// One-off technical SEO sweep across every page: title/meta-description
// uniqueness, H1 count, canonical self-reference, and JSON-LD validity.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const skipDirs = new Set(["node_modules", ".git", ".netlify", "scripts", "assets", "css", "js", "data", "seo"]);

function findPages(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      findPages(path.join(dir, entry.name), out);
    } else if (entry.name === "index.html") {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

const pages = findPages(root, []);
pages.push(path.join(root, "404.html"));

const titles = new Map();
const descs = new Map();
const issues = [];

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const rel = "/" + path.relative(root, file).replace(/\\/g, "/").replace(/index\.html$/, "");
  const urlPath = rel === "/" ? "/" : rel;

  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : null;
  if (!title) issues.push(`${urlPath}: MISSING <title>`);
  else {
    if (titles.has(title)) issues.push(`${urlPath}: DUPLICATE title with ${titles.get(title)} — "${title}"`);
    else titles.set(title, urlPath);
  }

  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  const desc = descMatch ? descMatch[1].trim() : null;
  if (!desc) issues.push(`${urlPath}: MISSING meta description`);
  else {
    if (descs.has(desc)) issues.push(`${urlPath}: DUPLICATE meta description with ${descs.get(desc)}`);
    else descs.set(desc, urlPath);
  }

  const h1Matches = html.match(/<h1[\s>]/g) || [];
  if (h1Matches.length === 0) issues.push(`${urlPath}: ZERO <h1>`);
  if (h1Matches.length > 1) issues.push(`${urlPath}: ${h1Matches.length} <h1> tags (should be 1)`);

  const canonMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/);
  if (!canonMatch) {
    issues.push(`${urlPath}: MISSING canonical tag`);
  } else {
    const canonUrl = canonMatch[1];
    const expected = "https://carpetcleaningservice.ie" + urlPath;
    if (canonUrl !== expected) issues.push(`${urlPath}: canonical mismatch — has "${canonUrl}", expected "${expected}"`);
  }

  const ldMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const m of ldMatches) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      issues.push(`${urlPath}: INVALID JSON-LD — ${e.message}`);
    }
  }

  if (/TODO/.test(html.replace(/<!--[\s\S]*?-->/g, ""))) {
    issues.push(`${urlPath}: literal TODO outside an HTML comment (crawler-visible)`);
  }
}

console.log(`Checked ${pages.length} pages.`);
console.log(`Issues found: ${issues.length}\n`);
issues.forEach((i) => console.log(i));
