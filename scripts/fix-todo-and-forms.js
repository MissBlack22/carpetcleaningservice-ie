// One-off migration: replace literal TODO placeholders with real business data,
// and wire the quote form to Netlify Forms so submissions actually go somewhere.
// Run once with: node scripts/fix-todo-and-forms.js
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const REAL = {
  name: "Carpet Cleaning Service",
  telSchema: "+353899632144", // E.164, matches homepage's existing correct schema block
  telHref: "+353899632144",
  phoneDisplay: "089 963 2144",
  email: "contact@carpetcleaningservice.ie",
  hours: "Mon–Fri: 8:00am – 5:00pm", // matches js/business.js's hoursDisplay exactly (en dash)
  priceRange: "€€", // matches homepage's existing schema value — symbolic tier, not an invented number
};

// Order matters: more specific/longer tokens first so a later pass can't clobber
// a string a shorter pattern already touched.
const TODO_REPLACEMENTS = [
  [/tel:TODO(?!_)/g, `tel:${REAL.telHref}`],
  [/mailto:TODO(?!_)/g, `mailto:${REAL.email}`],
  [/"telephone":\s*"TODO_PHONE"/g, `"telephone": "${REAL.telSchema}"`],
  [/"priceRange":\s*"TODO"/g, `"priceRange": "${REAL.priceRange}"`],
  [/"name":\s*"TODO_BUSINESS_NAME"/g, `"name": "${REAL.name}"`],
  [/"email":\s*"TODO_EMAIL"/g, `"email": "${REAL.email}"`],
  [/TODO_EMAIL/g, REAL.email],
  [/TODO_OPENING_HOURS/g, REAL.hours],
  [/TODO PHONE NUMBER/g, REAL.phoneDisplay],
];

const OLD_FORM_OPEN =
  '<form class="quote-card" data-quote-form id="quote-form" action="#" method="post">';
const NEW_FORM_OPEN =
  '<form class="quote-card" data-quote-form id="quote-form" name="quote-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you/">\n' +
  '          <input type="hidden" name="form-name" value="quote-request" />\n' +
  '          <p hidden><label>Leave this field blank: <input name="bot-field" /></label></p>';

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git" || entry.name === ".netlify") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

const files = walk(ROOT, []);
let todoFixedCount = 0;
let formFixedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const before = content;

  for (const [pattern, replacement] of TODO_REPLACEMENTS) {
    content = content.replace(pattern, replacement);
  }
  if (content !== before) todoFixedCount++;

  if (content.includes(OLD_FORM_OPEN)) {
    content = content.split(OLD_FORM_OPEN).join(NEW_FORM_OPEN);
    formFixedCount++;
  }

  if (content !== before) fs.writeFileSync(file, content, "utf8");
}

console.log(`Scanned ${files.length} HTML files.`);
console.log(`TODO placeholders fixed in ${todoFixedCount} files.`);
console.log(`Quote form wired to Netlify Forms in ${formFixedCount} files.`);

// Sanity: nothing matching the fixed TODO patterns should remain.
const leftovers = [];
for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  if (
    /tel:TODO(?!_)/.test(content) ||
    /mailto:TODO(?!_)/.test(content) ||
    content.includes("TODO_PHONE") ||
    content.includes("TODO_EMAIL") ||
    content.includes("TODO_BUSINESS_NAME") ||
    content.includes("TODO_OPENING_HOURS") ||
    content.includes("TODO PHONE NUMBER") ||
    /"priceRange":\s*"TODO"/.test(content)
  ) {
    leftovers.push(file);
  }
}
if (leftovers.length) {
  console.log(`WARNING: ${leftovers.length} files still contain a targeted TODO pattern:`);
  leftovers.forEach((f) => console.log("  " + f));
  process.exitCode = 1;
} else {
  console.log("No targeted TODO placeholders remain.");
}
