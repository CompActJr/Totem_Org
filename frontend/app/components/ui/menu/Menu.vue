<script setup lang="ts">
import { useMenuState } from '~/composables/useMenuState'
const route = useRoute()
const { menuOpen, closeAll } = useMenuState()

// fecha o menu ao navegar (inclusive em links com #âncora)
watch(() => route.fullPath, closeAll)
</script>

<template>
  <header class="sticky top-0 z-50 flex gap-24 w-full items-center justify-around md:justify-start bg-orange-500/90 text-white shadow-xl px-12 md:px-24">
    <!-- Logo -->
    <NuxtLink to="/" class="inline-flex items-center" @click="closeAll">
      <div class="flex md:h-38 md:w-76 h-16 w-38 shrink-0 items-center justify-center overflow-hidden rounded-md">
        <slot name="logo" />
      </div>
    </NuxtLink>

  
    <!-- Botão hambúrguer (só mobile) -->
    <button
      class="flex flex-col gap-1 md:hidden"
      aria-label="Abrir menu"
      :aria-expanded="menuOpen"
      @click="menuOpen = !menuOpen"
    >
      <span v-for="n in 3" :key="n" class="h-1 w-7 rounded bg-white" />
    </button>

    <!-- Links: coluna no mobile, linha alinhada embaixo e espaçada no desktop -->
    <nav
      class="
        absolute left-0 top-full z-20 max-h-[calc(100vh-4rem)] w-full
        flex-col overflow-y-auto bg-orange-600
        md:static md:flex md:max-h-none md:w-auto
        md:flex-row md:items-end md:gap-10
        md:overflow-visible md:bg-transparent
        lg:gap-24 gap-8
      "
      :class="menuOpen ? 'flex' : 'hidden'"
    >
      <slot />
    </nav>

    <div class="flex gap-8">
      
    </div>
    
  </header>
</template>