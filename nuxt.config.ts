import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['assets/css/main.css'],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'one-dark-pro',
        }
      }
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['nuxt-svgo', '@nuxt/content'],
})