const fs = require("fs");
const path = require("path");

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules" || entry.name === "scripts" || entry.name === "gallery") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name === "index.html" || entry.name === "404.html") out.push(full);
  }
  return out;
}

const files = walk(path.join(__dirname, ".."), []);
const OLD = '<li><a href="/guides/">Guides</a></li>';
const NEW = '<li><a href="/guides/">Guides</a></li>\n    <li><a href="/gallery/">Gallery</a></li>';

let count = 0;
for (const f of files) {
  const text = fs.readFileSync(f, "utf8");
  if (!text.includes(OLD)) continue;
  const updated = text.split(OLD).join(NEW);
  count += (text.match(new RegExp(OLD.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
  fs.writeFileSync(f, updated, "utf8");
}
console.log("Files touched, total insertions:", count);
