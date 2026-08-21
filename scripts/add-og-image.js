// Adds og:image + twitter:card/twitter:image to every page missing them.
// Uses the page's own first content photo (inside <main>) when present,
// falling back to the site's flagship real work photo otherwise.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const skipDirs = new Set(["node_modules", ".git", ".netlify"]);
const SITE = "https://carpetcleaningservice.ie";
const FALLBACK_IMAGE = "/assets/photos/business/carpet-cleaning/carpet-cleaning-wand-checkerboard.webp";

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
let changed = 0;
let skippedNoOgUrl = 0;

for (const file of pages) {
  let html = fs.readFileSync(file, "utf8");
  if (/og:image/.test(html)) continue;

  const mainMatch = html.match(/<main[\s\S]*?<\/main>/);
  let imgSrc = null;
  if (mainMatch) {
    const imgMatch = mainMatch[0].match(/<img\s[^>]*src="([^"]+)"[^>]*>/);
    if (imgMatch) imgSrc = imgMatch[1].replace(/-800\.webp$/, ".webp");
  }
  if (!imgSrc) imgSrc = FALLBACK_IMAGE;
  const absoluteImg = SITE + imgSrc;

  const ogUrlLineMatch = html.match(/<meta property="og:url" content="[^"]*">\r?\n/);
  if (!ogUrlLineMatch) {
    skippedNoOgUrl++;
    console.log(`SKIP (no og:url found): ${path.relative(root, file)}`);
    continue;
  }

  const insertion = `<meta property="og:image" content="${absoluteImg}">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:image" content="${absoluteImg}">\n`;
  html = html.replace(ogUrlLineMatch[0], ogUrlLineMatch[0] + insertion);

  // Avoid a second, redundant twitter:card if the page already declared one further down.
  const cardCount = (html.match(/name="twitter:card"/g) || []).length;
  if (cardCount > 1) {
    html = html.replace(/<meta name="twitter:card" content="summary_large_image">\n(?=[\s\S]*<meta name="twitter:card")/, "");
  }

  fs.writeFileSync(file, html);
  changed++;
}

console.log(`\nUpdated ${changed} pages. Skipped (no og:url): ${skippedNoOgUrl}.`);
