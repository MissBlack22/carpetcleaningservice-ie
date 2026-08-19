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

const replacements = [
  ["/assets/logo/logo-color.svg", "/assets/logo/logo-real-black.png"],
  ["/assets/logo/logo-mono-white.svg", "/assets/logo/logo-real-white.png"],
  [
    '<link rel="icon" type="image/svg+xml" href="/assets/logo/favicon-icon.svg">\n<link rel="apple-touch-icon" href="/assets/logo/favicon-icon.svg">',
    '<link rel="icon" type="image/png" href="/assets/logo/favicon-real.png">\n<link rel="apple-touch-icon" href="/assets/logo/favicon-real.png">',
  ],
];

let counts = replacements.map(() => 0);

for (const f of files) {
  let text = fs.readFileSync(f, "utf8");
  const before = text;
  replacements.forEach(([oldStr, newStr], i) => {
    const n = text.split(oldStr).length - 1;
    counts[i] += n;
    text = text.split(oldStr).join(newStr);
  });
  if (text !== before) fs.writeFileSync(f, text, "utf8");
}

console.log("Files scanned:", files.length);
replacements.forEach(([oldStr], i) => console.log(`Replaced "${oldStr.slice(0, 50)}...": ${counts[i]}`));
