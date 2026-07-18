<script setup>
    import { useNavigation } from '~/composables/useNavigate';
    const menuOpen = ref(false)
    const { navLinks } = useNavigation();
    
</script>

<template>
   <header class="fixed z-50 w-full flex items-center justify-between 
    px-6 py-6 lg:bg-orange-600/90 bg-orange-600 text-white 
    shadow-xl min-h-12
  ">

      <NuxtLink to="/">
        <img src="/geral/logo-totem.png" alt="Colégio Totem" class="w-36"/>
      </NuxtLink>

      <button class="flex flex-col gap-1 md:hidden" @click="menuOpen = !menuOpen">
        <span class="h-1 w-7 rounded bg-[#332E29]"></span>
        <span class="h-1 w-7 rounded bg-[#332E29]"></span>
        <span class="h-1 w-7 rounded bg-[#332E29]"></span>
      </button>

      <nav :class="[
        menuOpen ? 'flex' : 'hidden',
        'absolute bg-orange-600 md:bg-transparent z-20 left-0 top-16 w-full flex-col md:static md:flex md:w-auto md:flex-row'
      ]">
        <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href"
          class="px-5 py-4 font-semibold text-white transition duration-300 hover:text-orange-200 hover:underline"
          @click="menuOpen = false">
          {{ link.label }}
        </NuxtLink>
      </nav>
  </header>
</template>


