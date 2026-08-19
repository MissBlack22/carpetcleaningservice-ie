const fs = require("fs");
const path = require("path");

const OLD = `      <div class="hero__visual" aria-hidden="true">
        <span class="hero__visual-label"><span>Before</span><span>After a professional clean</span></span>
      </div>`;

const NEW = `      <div class="hero__visual hero__visual--photo">
        <img src="/assets/photos/business/carpet-cleaning/carpet-cleaning-wand-checkerboard.webp" alt="Real carpet cleaning in progress, steam-cleaning wand on a commercial carpet" loading="eager" width="1600" height="1200">
        <div class="hero__visual-overlay" aria-hidden="true"></div>
        <span class="hero__visual-label"><span>Before</span><span>After a professional clean</span></span>
      </div>`;

const dir = path.join(__dirname, "..", "locations");
let changed = 0;
for (const name of fs.readdirSync(dir)) {
  const file = path.join(dir, name, "index.html");
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes(OLD)) {
    console.log("SKIP (no match):", name);
    continue;
  }
  fs.writeFileSync(file, html.replace(OLD, NEW));
  changed++;
}
console.log("Updated", changed, "location pages");
