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
const issues = [];

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const main = html.match(/<main[\s\S]*?<\/main>/);
  if (!main) continue;
  const headings = [...main[0].matchAll(/<h([1-6])[\s>]/g)].map((m) => parseInt(m[1], 10));
  const rel = "/" + path.relative(root, file).replace(/\\/g, "/").replace(/index\.html$/, "");
  let prev = 0;
  for (const level of headings) {
    if (prev !== 0 && level > prev + 1) {
      issues.push(`${rel}: skipped from h${prev} to h${level}`);
      break;
    }
    prev = level;
  }
}

console.log(`Checked ${pages.length} pages.`);
console.log(`Heading-hierarchy skips: ${issues.length}`);
issues.slice(0, 40).forEach((i) => console.log("  " + i));
