import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  runtimeConfig: {
    apiBaseInternal: 'http://backend-totem:9000/api', // NUXT_API_BASE_INTERNAL
    public: {
      apiBase: '/api',                                 // NUXT_PUBLIC_API_BASE
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: [
    '@nuxt/image',
  ]
  
})
