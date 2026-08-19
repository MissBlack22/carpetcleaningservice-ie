const sharp = require("sharp");
const path = require("path");

const dir = path.join(__dirname, "..", "assets", "staging", "krystalklean");

(async () => {
  // carpet-cleaning.jpg: 960x960, diamond watermark bottom-right of the "after" panel.
  // Crop off the bottom strip entirely — clears the mark, keeps both before/after panels intact above it.
  await sharp(path.join(dir, "carpet-cleaning.jpg"))
    .extract({ left: 0, top: 0, width: 960, height: 790 })
    .toFile(path.join(dir, "carpet-cleaning-cropped.jpg"));

  // sofa-cleaning-dublin.jpg: 1440x1440 stacked before/after, watermark bottom-right of "after" panel.
  // Crop off enough of the bottom to clear it with margin.
  await sharp(path.join(dir, "sofa-cleaning-dublin.jpg"))
    .extract({ left: 0, top: 0, width: 1440, height: 1050 })
    .toFile(path.join(dir, "sofa-cleaning-dublin-cropped.jpg"));

  console.log("done");
})();
