import tailwindcss from "@tailwindcss/vite";

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
  modules: ["@nuxt/icon"],

  icon: {
    mode: "css",
    cssLayer: "base",
  },
});
