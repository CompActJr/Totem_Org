import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  runtimeConfig: {
    // Variáveis Privadas (O Nuxt preenche automaticamente buscando NUXT_<NOME>
    smtpEndpoint: '',
    smtpPort: '',
    smtpUsername: '',
    smtpPassword: '',

    public: {
      apiBase:  process.env.NUXT_PUBLIC_API_BASE || "http://localhost:9000/api",
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
