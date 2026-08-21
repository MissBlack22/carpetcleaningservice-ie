// Flags location pages that look thin or near-duplicate: low word count,
// or body text that's >90% identical to another location page (after
// stripping the area name) — a sign of templated/spun content.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const locDir = path.join(root, "locations");

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

const dirs = fs.readdirSync(locDir, { withFileTypes: true }).filter((d) => d.isDirectory());
const results = [];

for (const d of dirs) {
  const file = path.join(locDir, d.name, "index.html");
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  const text = textOf(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  results.push({ slug: d.name, words, normText: text.replace(new RegExp(d.name, "gi"), "AREA") });
}

results.sort((a, b) => a.words - b.words);
console.log(`Total location pages: ${results.length}`);
console.log(`\nBottom 20 by word count:`);
results.slice(0, 20).forEach((r) => console.log(`  ${r.words}w  /locations/${r.slug}/`));

console.log(`\nWord count buckets:`);
const buckets = { "<300": 0, "300-600": 0, "600-1000": 0, "1000+": 0 };
results.forEach((r) => {
  if (r.words < 300) buckets["<300"]++;
  else if (r.words < 600) buckets["300-600"]++;
  else if (r.words < 1000) buckets["600-1000"]++;
  else buckets["1000+"]++;
});
console.log(buckets);

// Near-duplicate check: compare normalized text similarity via simple hash
// of shingles (crude but catches spun/templated pairs).
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

const shingleSets = results.map((r) => ({ slug: r.slug, s: shingles(r.normText) }));
const dupes = [];
for (let i = 0; i < shingleSets.length; i++) {
  for (let j = i + 1; j < shingleSets.length; j++) {
    const sim = jaccard(shingleSets[i].s, shingleSets[j].s);
    if (sim > 0.6) dupes.push(`${shingleSets[i].slug} <-> ${shingleSets[j].slug}: ${(sim * 100).toFixed(0)}% similar`);
  }
}
console.log(`\nNear-duplicate pairs (>60% shingle overlap): ${dupes.length}`);
dupes.slice(0, 30).forEach((d) => console.log("  " + d));
