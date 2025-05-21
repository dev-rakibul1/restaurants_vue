import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,vue}", // Ensure your component files are scanned
  ],
  safelist: ["w-[60%]"],
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss({
      // Optional: Custom spacing config
      spacing: {
        px: "1px",
        0.5: "0.125rem",
        1: "0.25rem",
        // ... extend as needed
      },
    }),
  ],

  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
