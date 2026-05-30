import tailwindcss from "@tailwindcss/vite";

import { createResolver } from "nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: {
    optimizeDeps: {
      include: ["motion-v"],
    },
    plugins: [tailwindcss()],
  },

  css: ["./app/assets/css/main.css"],
  modules: ["@nuxt/icon", "@nuxt/image"],

  icon: {
    mode: "css",
    cssLayer: "base",
    customCollections: [
      {
        prefix: "logos",
        dir: resolve("./app/assets/logos"),
      },
    ],
  },
});