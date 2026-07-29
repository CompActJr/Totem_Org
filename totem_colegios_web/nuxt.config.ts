import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  runtimeConfig: {
    // Variáveis Privadas (O Nuxt preenche automaticamente buscando NUXT_<NOME>
    smtpEndpoint: '',
    smtpPort: '',
    smtpUsername: '',
    smtpPassword: '',

    public: {
      apiBasePath: '', // NUXT_PUBLIC_API_BASE_PATH
      mainUrl: 'http://localhost:8001', // NUXT_PUBLIC_MAIN_URL
      colegiosUrl: 'http://localhost:8002', // NUXT_PUBLIC_COLEGIOS_URL
      vestibularesUrl: 'http://localhost:8003' // NUXT_PUBLIC_VESTIBULARES_URL
    }
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: [
    '@nuxt/image',
  ]
  
})
