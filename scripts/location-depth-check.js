// Flags location pages that look thin or near-duplicate: low word count,
// or body text that's heavily overlapping with another location page
// (after stripping the area name) — a sign of templated/spun content.
// Scans every area-page directory, not just /locations/.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const baseDirs = ["locations", "carpet-cleaning-kildare", "carpet-cleaning-wicklow"];

function textOf(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/);
  const body = (main ? main[0] : html)
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return body;
}

const results = [];
for (const base of baseDirs) {
  const baseDir = path.join(root, base);
  if (!fs.existsSync(baseDir)) continue;
  const dirs = fs.readdirSync(baseDir, { withFileTypes: true }).filter((d) => d.isDirectory());
  for (const d of dirs) {
    const file = path.join(baseDir, d.name, "index.html");
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, "utf8");
    const text = textOf(html);
    const words = text.split(/\s+/).filter(Boolean).length;
    results.push({ label: `${base}/${d.name}`, words, normText: text.replace(new RegExp(d.name, "gi"), "AREA") });
  }
}

results.sort((a, b) => a.words - b.words);
console.log(`Total area pages scanned: ${results.length}`);
console.log(`\nBottom 20 by word count:`);
results.slice(0, 20).forEach((r) => console.log(`  ${r.words}w  /${r.label}/`));

console.log(`\nWord count buckets:`);
const buckets = { "<300": 0, "300-600": 0, "600-1000": 0, "1000+": 0 };
results.forEach((r) => {
  if (r.words < 300) buckets["<300"]++;
  else if (r.words < 600) buckets["300-600"]++;
  else if (r.words < 1000) buckets["600-1000"]++;
  else buckets["1000+"]++;
});
console.log(buckets);

function shingles(text, n = 8) {
  const words = text.split(" ");
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(" "));
  return set;
}
function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter || 1);
}

const shingleSets = results.map((r) => ({ label: r.label, s: shingles(r.normText) }));
const dupes = [];
for (let i = 0; i < shingleSets.length; i++) {
  for (let j = i + 1; j < shingleSets.length; j++) {
    const sim = jaccard(shingleSets[i].s, shingleSets[j].s);
    if (sim > 0.4) dupes.push({ a: shingleSets[i].label, b: shingleSets[j].label, sim });
  }
}
dupes.sort((a, b) => b.sim - a.sim);
console.log(`\nNear-duplicate pairs (>40% shingle overlap): ${dupes.length}`);
dupes.forEach((d) => console.log(`  ${d.a} <-> ${d.b}: ${(d.sim * 100).toFixed(0)}% similar`));
