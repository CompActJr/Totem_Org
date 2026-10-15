<!--
  @author Jonas
  Menu após a refatoração: o slot recebe os links de cada unidade/layout,
  aqui ficam só as características mobile e desktop.
-->
  
<script setup lang="ts">
import { useMenuState } from '~/composables/useMenuState';

const route = useRoute()
const { menuOpen, closeAll } = useMenuState()

// fecha o menu ao navegar (inclusive em links com #âncora)
watch(() => route.fullPath, closeAll)

const styles = {
  header:
    'relative z-50 flex min-h-12 w-full items-center justify-between bg-orange-500 px-10 py-6 text-white shadow-xl md:px-8 lg:bg-orange-500/95 lg:px-12 xl:px-24',
  logo: 'w-36 lg:w-44 xl:w-52',
  burger: 'flex flex-col gap-1 md:hidden',
  burgerLine: 'h-1 w-7 rounded bg-[#332E29]',
  nav: 'absolute left-0 top-full z-20 max-h-[calc(100vh-4rem)] w-full flex-col overflow-y-auto bg-orange-600 md:static md:flex md:max-h-none md:w-auto md:flex-row md:overflow-visible md:bg-transparent',
}
</script>

<template>
  <header :class="styles.header">
    <NuxtLink to="/" @click="closeAll">
      <img src="/geral/logo-totem-colegios.png" alt="Colégio Totem" :class="styles.logo" />
    </NuxtLink>

    <button
      :class="styles.burger"
      aria-label="Abrir menu"
      :aria-expanded="menuOpen"
      @click="menuOpen = !menuOpen"
    >
      <span v-for="n in 3" :key="n" :class="styles.burgerLine" />
    </button>

    <nav :class="[styles.nav, menuOpen ? 'flex' : 'hidden']">
      <slot />
    </nav>
  </header>
</template>