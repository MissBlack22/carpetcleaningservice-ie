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

const files = walk(path.join(__dirname, ".."), []);

const HEADER_OLD = '<a href="/" class="brand-mark"><span class="brand-mark__stripes" aria-hidden="true"></span>Carpet Cleaning Service</a>';
const HEADER_NEW = '<a href="/" class="brand-mark"><img src="/assets/logo/logo-color.svg" alt="Carpet Cleaning Service" class="brand-mark__logo"></a>';

const FOOTER_OLD = '<a href="/" class="brand-mark" style="color:var(--color-white); margin-bottom: var(--sp-3); display:flex;"><span class="brand-mark__stripes" aria-hidden="true"></span>Carpet Cleaning Service</a>';
const FOOTER_NEW = '<a href="/" class="brand-mark" style="margin-bottom: var(--sp-3); display:flex;"><img src="/assets/logo/logo-mono-white.svg" alt="Carpet Cleaning Service" class="brand-mark__logo brand-mark__logo--footer"></a>';

const FAVICON_TAG = '<link rel="icon" type="image/svg+xml" href="/assets/logo/favicon-icon.svg">\n<link rel="apple-touch-icon" href="/assets/logo/favicon-icon.svg">';

let headerCount = 0, footerCount = 0, faviconCount = 0;

for (const f of files) {
  let text = fs.readFileSync(f, "utf8");
  const before = text;

  text = text.split(HEADER_OLD).join(HEADER_NEW);
  const hMatches = (before.match(new RegExp(HEADER_OLD.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
  headerCount += hMatches;

  text = text.split(FOOTER_OLD).join(FOOTER_NEW);
  const fMatches = (before.match(new RegExp(FOOTER_OLD.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
  footerCount += fMatches;

  if (!text.includes("rel=\"icon\"")) {
    text = text.replace(
      '<meta name="viewport" content="width=device-width, initial-scale=1">',
      '<meta name="viewport" content="width=device-width, initial-scale=1">\n' + FAVICON_TAG
    );
    faviconCount++;
  }

  if (text !== before) fs.writeFileSync(f, text, "utf8");
}

console.log("Files scanned:", files.length);
console.log("Header brand-marks replaced:", headerCount);
console.log("Footer brand-marks replaced:", footerCount);
console.log("Favicon tags added:", faviconCount);
