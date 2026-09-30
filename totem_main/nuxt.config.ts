import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

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
      apiBasePath: '', // NUXT_PUBLIC_API_BASE_PATH
      mainUrl: 'http://localhost:8001', // NUXT_PUBLIC_MAIN_URL
      colegiosUrl: 'http://localhost:8002', // NUXT_PUBLIC_COLEGIOS_URL
      vestibularesUrl: 'http://localhost:8003' // NUXT_PUBLIC_VESTIBULARES_URL
    }
  }
})