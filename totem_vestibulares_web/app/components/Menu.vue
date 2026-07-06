<script setup lang="ts">
    import { useAnchorsMenu } from '~/composables/useAnchorsMenu';
    import { useNavigation } from '~/composables/useNavigation';

    const menuOpen = ref(false)
    const { anchors } = useAnchorsMenu();
    const { navLinks } = useNavigation();
    
</script>

<template>
  <header class="flex items-center justify-between px-6 bg-orange-600 text-yellow-200 shadow-lg min-h-24">

      <NuxtLink to="/">
        <img src="/images/logo-totem-colegios.png" alt="Colégio Totem" width="128px" />
      </NuxtLink>

      <button class="flex flex-col gap-1 md:hidden" @click="menuOpen = !menuOpen">
        <span class="h-1 w-7 rounded bg-yellow-200"></span>
        <span class="h-1 w-7 rounded bg-yellow-200"></span>
        <span class="h-1 w-7 rounded bg-yellow-200"></span>
      </button>

      <nav :class="[
        menuOpen ? 'flex' : 'hidden',
        'absolute left-0 top-16 w-full flex-col bg-orange-600 md:static md:flex md:w-auto md:flex-row'
      ]">
        <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href"
          class="px-5 py-4 font-semibold text-yellow-200 transition hover:bg-orange-700 hover:text-white"
          @click="menuOpen = false">
          {{ link.label }}
        </NuxtLink>
        <a v-for="value in anchors" :key="value.href" :href="value.href" 
          class="px-5 py-4 font-semibold text-yellow-200 transition hover:bg-orange-700 hover:text-white">
          {{ value.label }}
        </a>
      </nav>
  </header>
</template>