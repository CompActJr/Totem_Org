<script setup lang="ts">
    import { useAnchorsMenu } from '~/composables/useAnchorsMenu';
    import { useNavigation } from '~/composables/useNavigation';

    const menuOpen = ref(false)
    const { anchors } = useAnchorsMenu();
    const { navLinks } = useNavigation();
    
</script>

<template>
  <header class="fixed z-50 w-full flex items-center justify-between  px-12 md:px-24 py-2 bg-white text-[#332E29] shadow-xl min-h-12">

      <NuxtLink to="/">
        <img src="/images/logo_vestibulares.png" alt="Colégio Totem" class="w-36"/>
      </NuxtLink>

      <button class="flex flex-col gap-1 md:hidden" @click="menuOpen = !menuOpen">
        <span class="h-1 w-7 rounded bg-[#332E29]"></span>
        <span class="h-1 w-7 rounded bg-[#332E29]"></span>
        <span class="h-1 w-7 rounded bg-[#332E29]"></span>
      </button>

      <nav :class="[
        menuOpen ? 'flex' : 'hidden',
        'absolute z-20 left-0 top-16 w-full flex-col bg-white md:static md:flex md:w-auto md:flex-row'
      ]">
        <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href"
          class="px-5 py-4 font-semibold text-gray-600 transition  hover:text-orange-400"
          @click="menuOpen = false">
          {{ link.label }}
        </NuxtLink>
        <a v-for="value in anchors" :key="value.href" :href="value.href" 
          class="px-5 py-4 font-semibold text-gray-600 transition hover:text-orange-400">
          {{ value.label }}
        </a>
      </nav>
  </header>
</template>