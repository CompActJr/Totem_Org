<script lang="ts" setup>
definePageMeta({
  layout: 'admin'
})

const email = ref('seunome@instituicao.edu.br')
const password = ref('')
const passwordVisible = ref(false)
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-[#f3f2f1] px-6 py-6 md:px-10 lg:px-16">
    <header class="flex w-full items-center justify-between pb-8 pt-2 text-[#1f1f1f]">
      <NuxtLink to="/" class="flex items-center gap-3 text-[1.08rem] font-medium text-[#2d2d2d] transition-opacity hover:opacity-80">
        <span class="text-[1.5rem] leading-none">←</span>
        <span>Voltar ao totem</span>
      </NuxtLink>

      <span class="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#444]">ÁREA ADMINISTRATIVA</span>
    </header>

    <div class="flex flex-1 items-center justify-center">
      <form class="w-full max-w-xl">
        <div class="mb-7 flex justify-center">
          <span class="inline-flex items-center gap-2 rounded-full border border-[#e4b37f] bg-[#f9e6d0] px-4 py-2 text-[0.92rem] font-medium text-[#b86618] shadow-sm">
            <span class="flex h-4 w-4 items-center justify-center rounded-full border border-[#bf6d22] text-[0.7rem]">✓</span>
            Acesso exclusivo para diretores
          </span>
        </div>

        <h1 class="text-center text-[2.9rem] font-black leading-[1.06] tracking-[-0.07em] text-[#1e1e1e] md:text-[4rem]">
          Bem-vindo à sua gestão
        </h1>

        <p class="mx-auto mt-6 max-w-lg text-center text-[1.05rem] leading-relaxed text-[#4f4b47] md:text-[1.15rem]">
          Entre com suas credenciais institucionais para acessar o painel administrativo.
        </p>

        <div class="mt-10 space-y-6">
          <label class="block text-[1.02rem] font-medium text-[#3d3d3d]">
            <span class="mb-2 block">E-mail institucional</span>
            <div class="flex items-center gap-3 rounded-[14px] border border-[#d2d0cd] bg-[#f8f7f5] px-4 py-4 shadow-[inset_0_1px_0_rgba(0,0,0,0.02)]">
              <span class="text-[#8a7f74]">
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" stroke-width="1.6"/>
                  <path d="M5 7.5 12 13l7-5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <input v-model="email" type="email" class="w-full border-0 bg-transparent text-[1.08rem] text-[#2c2c2c] placeholder:text-[#8c857d] focus:outline-none" aria-label="E-mail institucional" />
            </div>
          </label>

          <label class="block text-[1.02rem] font-medium text-[#3d3d3d]">
            <span class="mb-2 block">Senha</span>
            <div class="flex items-center gap-3 rounded-[14px] border border-[#d2d0cd] bg-[#f8f7f5] px-4 py-4 shadow-[inset_0_1px_0_rgba(0,0,0,0.02)]">
              <span class="text-[#8a7f74]">
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M7 10V8a5 5 0 1 1 10 0v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                  <rect x="5" y="10" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.6"/>
                  <circle cx="12" cy="14.5" r="1.2" fill="currentColor"/>
                </svg>
              </span>
              <input v-model="password" :type="passwordVisible ? 'text' : 'password'" placeholder="Digite sua senha" class="w-full border-0 bg-transparent text-[1.08rem] text-[#2c2c2c] placeholder:text-[#8c857d] focus:outline-none" aria-label="Senha" />
              <button type="button" class="text-[#7b7169] transition-opacity hover:opacity-80" @click="passwordVisible = !passwordVisible" aria-label="Mostrar ou ocultar senha">
                <svg v-if="!passwordVisible" viewBox="0 0 24 24" class="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 3l18 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                  <path d="M10.6 10.6A2.5 2.5 0 0 0 13.4 13.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                  <path d="M9 5.7A15.2 15.2 0 0 1 12 5c6.5 0 10 7 10 7a17.3 17.3 0 0 1-3.7 5.1M6.2 6.2A17.8 17.8 0 0 0 2 12s3.5 7 10 7a11.9 11.9 0 0 0 5.7-1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </label>
        </div>

        <div class="mt-6 flex justify-end">
          <button type="button" class="text-[1.02rem] font-semibold text-[#d77a2d] transition-opacity hover:opacity-80">
            Esqueci minha senha
          </button>
        </div>

        <button type="submit" class="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#b4662a] px-6 py-5 text-[1.15rem] font-bold text-white shadow-[0_10px_18px_rgba(180,102,42,0.2)] transition-transform hover:-translate-y-px hover:bg-[#a85d26] focus:outline-none focus:ring-4 focus:ring-[#d8b08c]">
          <span>Entrar no painel</span>
          <span aria-hidden="true">→</span>
        </button>

        <div class="mt-8 flex items-center justify-center gap-3 text-center text-[0.98rem] text-[#5a564f]">
          <span class="flex h-5 w-5 items-center justify-center rounded-full border border-[#d7d1ca] bg-[#f5f2ee] text-[#7b7169]">
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 3.5a7 7 0 0 0-7 7V11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.5a7 7 0 0 0-7-7Zm-5 8.5h10M12 8v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
              <path d="M7.5 17.5h9a2 2 0 0 1 2 2v.5H5.5v-.5a2 2 0 0 1 2-2Z" fill="currentColor" opacity="0.15"/>
            </svg>
          </span>
          <span>
            Este é um dispositivo compartilhado. Ao finalizar, saia da sua conta para proteger seus dados.
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
