// Renames <h4> to <h3> ONLY within <main>...</main> (never touches the
// footer's <h4>Services/Areas/Company</h4>, which is a separate nav
// landmark, not part of the document content outline). Verified first
// that h4 always directly follows h2 (never sub-nests under an existing
// h3), so this is a pure structural fix — no content change, no risk of
// colliding with legitimate h3 usage elsewhere on the same page.
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const files = execSync('git ls-files -- "*.html"', { cwd: root })
  .toString()
  .split("\n")
  .filter((f) => f.endsWith("index.html"))
  .map((f) => path.join(root, f));

let changed = 0;

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/);
  if (!mainMatch) continue;
  if (!/<h4[\s>]/.test(mainMatch[0])) continue;

  const fixedMain = mainMatch[0].replace(/<h4(\s[^>]*)?>/g, "<h3$1>").replace(/<\/h4>/g, "</h3>");
  const newHtml = html.slice(0, mainMatch.index) + fixedMain + html.slice(mainMatch.index + mainMatch[0].length);
  fs.writeFileSync(file, newHtml);
  changed++;
}

console.log(`Fixed heading hierarchy on ${changed} pages.`);
