import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  runtimeConfig: {
    apiBaseInternal: process.env.NUXT_API_BASE_INTERNAL || 'http://localhost:9000/api',
    cookieSecure: process.env.NUXT_COKKIE_SECURE === 'true',
    nodeProduction: !!process.env.NUXT_NODE_PRODUCTION,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:9000/api',
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
