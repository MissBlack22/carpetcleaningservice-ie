const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
const src = path.join(root, "CARPET CLEANING LOGO.png");
const outDir = path.join(root, "assets", "logo");

(async () => {
  // 1. Black logo (light-background version) — trim any excess transparent margin, keep real colors.
  await sharp(src).trim().png().toFile(path.join(outDir, "logo-real-black.png"));

  // 2. White logo for dark backgrounds — invert RGB, preserve alpha exactly.
  const img = sharp(src);
  const { data, info } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
    // alpha (data[i+3]) untouched
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .trim()
    .toFile(path.join(outDir, "logo-real-white.png"));

  // 3. Favicon — crop just the circular icon (left portion, no wordmark), then trim + pad to square.
  const meta = await sharp(src).metadata();
  const iconWidth = Math.round(meta.width * 0.44); // icon occupies roughly the left ~44% of the canvas
  const stepA = path.join(outDir, "_step_extract.png");
  const stepB = path.join(outDir, "_step_trim.png");
  await sharp(src).extract({ left: 0, top: 0, width: iconWidth, height: meta.height }).png().toFile(stepA);
  await sharp(stepA).trim().png().toFile(stepB);
  const trimmedMeta = await sharp(stepB).metadata();
  const side = Math.max(trimmedMeta.width, trimmedMeta.height);
  const buf = await sharp(stepB).toBuffer();
  await sharp({ create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: buf, gravity: "center" }])
    .png()
    .toFile(path.join(outDir, "favicon-real.png"));
  fs.unlinkSync(stepA);
  fs.unlinkSync(stepB);

  console.log("Done: logo-real-black.png, logo-real-white.png, favicon-real.png written to", outDir);
})();
