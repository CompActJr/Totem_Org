import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  vite: {
    plugins: [tailwindcss()]
  },

  css: [
    '~/assets/styles/main.css'
  ],

  modules: ['@nuxt/image'],

  runtimeConfig: {
    public: {
      colegiosApp: import.meta.env.COLEGIOS_APP,
      vestibularesApp: import.meta.env.VESTIBULARES_APP,
    }
  }
})