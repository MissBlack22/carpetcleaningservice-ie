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
const longTitles = [];
const shortTitles = [];
const longDescs = [];
const shortDescs = [];

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const rel = "/" + path.relative(root, file).replace(/\\/g, "/").replace(/index\.html$/, "");
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch ? titleMatch[1].replace(/&amp;/g, "&").trim() : "";
  if (title.length > 60) longTitles.push(`${rel}: ${title.length}ch — "${title}"`);
  if (title.length > 0 && title.length < 30) shortTitles.push(`${rel}: ${title.length}ch — "${title}"`);

  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  const desc = descMatch ? descMatch[1].replace(/&amp;/g, "&").trim() : "";
  if (desc.length > 160) longDescs.push(`${rel}: ${desc.length}ch`);
  if (desc.length > 0 && desc.length < 70) shortDescs.push(`${rel}: ${desc.length}ch`);
}

console.log(`Checked ${pages.length} pages.`);
console.log(`\nTitles > 60 chars (${longTitles.length}):`);
longTitles.forEach((t) => console.log("  " + t));
console.log(`\nTitles < 30 chars (${shortTitles.length}):`);
shortTitles.slice(0, 20).forEach((t) => console.log("  " + t));
console.log(`\nDescriptions > 160 chars (${longDescs.length}):`);
longDescs.slice(0, 20).forEach((t) => console.log("  " + t));
console.log(`\nDescriptions < 70 chars (${shortDescs.length}):`);
shortDescs.slice(0, 20).forEach((t) => console.log("  " + t));
