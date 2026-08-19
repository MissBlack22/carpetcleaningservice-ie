const fs = require("fs");
const path = require("path");

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules" || entry.name === "scripts") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name === "index.html") out.push(full);
  }
  return out;
}

const files = walk(".", []);

function toUrlPath(f) {
  let p = f.replace(/^\./, "").replace(/index\.html$/, "").replace(/\\/g, "/");
  if (!p.startsWith("/")) p = "/" + p;
  if (p === "//") p = "/";
  return p;
}

const pageMap = new Map();
for (const f of files) pageMap.set(toUrlPath(f), f);

const inbound = new Map();
for (const p of pageMap.keys()) inbound.set(p, new Set());

for (const f of files) {
  const text = fs.readFileSync(f, "utf8");
  const srcUrl = toUrlPath(f);
  const hrefs = [...text.matchAll(/href="(\/[a-zA-Z0-9\/#-]*)"/g)].map((m) => m[1].split("#")[0]);
  for (let h of hrefs) {
    if (h === "") h = "/";
    if (pageMap.has(h) && h !== srcUrl) {
      inbound.get(h).add(srcUrl);
    }
  }
}

let orphans = [];
for (const [p, set] of inbound.entries()) {
  if (p === "/404") continue;
  if (set.size === 0) orphans.push(p);
}
console.log("Total pages:", pageMap.size);
console.log("Orphan pages (0 inbound links from other pages):", orphans.length);
orphans.forEach((o) => console.log("  ORPHAN:", o));

console.log("\nInbound link count distribution (bottom 10 lowest, excluding 404):");
const arr = [...inbound.entries()].filter(([p]) => p !== "/404").sort((a, b) => a[1].size - b[1].size);
arr.slice(0, 10).forEach(([p, set]) => console.log(" ", set.size, p));
