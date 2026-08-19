const fs = require("fs");
const path = require("path");

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules" || entry.name === "scripts") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name === "index.html" || entry.name === "404.html") out.push(full);
  }
  return out;
}

const VERSION = process.argv[2] || "2";
const files = walk(path.join(__dirname, ".."), []);
const replacements = [
  [/href="\/css\/tokens\.css(\?v=\d+)?"/g, `href="/css/tokens.css?v=${VERSION}"`],
  [/href="\/css\/base\.css(\?v=\d+)?"/g, `href="/css/base.css?v=${VERSION}"`],
  [/href="\/css\/components\.css(\?v=\d+)?"/g, `href="/css/components.css?v=${VERSION}"`],
];

let count = 0;
for (const f of files) {
  let text = fs.readFileSync(f, "utf8");
  const before = text;
  for (const [re, replacement] of replacements) {
    text = text.replace(re, replacement);
  }
  if (text !== before) {
    fs.writeFileSync(f, text, "utf8");
    count++;
  }
}
console.log("Version bumped to", VERSION, "on", count, "files");
