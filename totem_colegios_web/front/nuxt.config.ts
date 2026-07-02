// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  css: ['~/assets/css/style.css'],
  
  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
  ],
  
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3001'
    }
  }
})
