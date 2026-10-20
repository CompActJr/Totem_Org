import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  runtimeConfig: {
    apiBaseInternal: 'http://localhost:9000/api', // NUXT_API_BASE_INTERNAL
    nodeProduction: false,      //NUXT_NODE_PRODUCTION
    public: {
      apiBase: 'http://localhost:9000/api',         // NUXT_PUBLIC_API_BASE
    },
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-10-20',

  vite: {
    plugins: [tailwindcss()]
  },

  modules: [
    '@nuxt/image',
  ]
  
})
