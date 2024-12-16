import path from "path";
import { defineConfig } from "vite";

module.exports = defineConfig({
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "ImageDragger",
      fileName: "image-dragger",
    },
  },
});
