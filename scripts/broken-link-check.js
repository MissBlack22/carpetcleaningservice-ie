// Crawl every internal href/src across all pages and verify the target
// resolves to an actual file on disk (accounting for pretty-URL folders).
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const skipDirs = new Set(["node_modules", ".git", ".netlify"]);

function findPages(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      findPages(path.join(dir, entry.name), out);
    } else if (entry.name.endsWith(".html")) {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

function resolves(urlPath) {
  const clean = urlPath.split("#")[0].split("?")[0];
  if (clean === "" || clean === "/") return true;
  const rel = clean.replace(/^\//, "");
  const asFile = path.join(root, rel);
  const asDirIndex = path.join(root, rel, "index.html");
  return fs.existsSync(asFile) || fs.existsSync(asDirIndex);
}

const pages = findPages(root, []);
const hrefRe = /(?:href|src)="(\/[^"]*)"/g;
const broken = [];
const external = new Set();

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const relPage = "/" + path.relative(root, file).replace(/\\/g, "/");
  let m;
  while ((m = hrefRe.exec(html))) {
    const target = m[1];
    if (target.startsWith("//")) continue; // protocol-relative external
    if (!resolves(target)) broken.push(`${relPage} -> ${target}`);
  }
}

console.log(`Checked ${pages.length} HTML files.`);
console.log(`Broken internal links: ${broken.length}\n`);
broken.forEach((b) => console.log(b));
