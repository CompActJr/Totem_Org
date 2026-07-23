<script setup>
    import { useNavigation } from '~/composables/useNavigate';
    const menuOpen = ref(false)
    const openSubmenu = ref(null) // controla qual submenu mobile está aberto (por label)
    const { navLinks } = useNavigation();

    function toggleSubmenu(label) {
      openSubmenu.value = openSubmenu.value === label ? null : label
    }

    function closeAll() {
      menuOpen.value = false
      openSubmenu.value = null
    }
</script>

<template>
   <header class="fixed z-50 w-full flex items-center justify-between 
    px-6 py-6 lg:bg-orange-600/90 bg-orange-600 text-white 
    shadow-xl min-h-12
  ">

      <NuxtLink to="/" @click="closeAll">
        <img src="/geral/logo-totem.png" alt="Colégio Totem" class="w-36"/>
      </NuxtLink>

      <button class="flex flex-col gap-1 md:hidden" @click="menuOpen = !menuOpen">
        <span class="h-1 w-7 rounded bg-[#332E29]"></span>
        <span class="h-1 w-7 rounded bg-[#332E29]"></span>
        <span class="h-1 w-7 rounded bg-[#332E29]"></span>
      </button>

      <nav :class="[
        menuOpen ? 'flex' : 'hidden',
        'absolute bg-orange-600 md:bg-transparent z-20 left-0 top-16 w-full flex-col md:static md:flex md:w-auto md:flex-row max-h-[calc(100vh-4rem)] overflow-y-auto md:overflow-visible md:max-h-none'
      ]">
        <div v-for="link in navLinks" :key="link.href + link.label"
          class="relative group w-full md:w-auto">

          <!-- Item sem filhos (ex: HOME) -->
          <NuxtLink v-if="!link.children" :to="link.href"
            class="block px-5 py-4 font-semibold text-white transition duration-300 hover:text-orange-200 hover:underline"
            @click="closeAll">
            {{ link.label }}
          </NuxtLink>

          <!-- Item com filhos: desktop = hover dropdown / mobile = accordion -->
          <template v-else>
            <button
              class="w-full flex items-center justify-between gap-2 px-5 py-4 font-semibold text-white transition duration-300 hover:text-orange-200 hover:underline md:cursor-default"
              @click="toggleSubmenu(link.label)">
              {{ link.label }}
              <svg
                class="w-3 h-3 shrink-0 transition-transform duration-300 md:group-hover:rotate-180"
                :class="{ 'rotate-180': openSubmenu === link.label }"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>

            <!-- Dropdown desktop -->
            <div class="hidden md:group-hover:flex md:absolute md:left-0 md:top-full md:flex-col md:min-w-[220px] md:bg-orange-600 md:shadow-xl md:rounded-b-lg md:overflow-hidden md:z-30">
              <NuxtLink v-for="child in link.children" :key="child.href + child.label" :to="child.href"
                class="px-5 py-3 font-medium text-white/90 text-sm transition duration-300 hover:text-orange-200 hover:bg-orange-700/50 hover:underline whitespace-nowrap"
                @click="closeAll">
                {{ child.label }}
              </NuxtLink>
            </div>

            <!-- Accordion mobile -->
            <div v-show="openSubmenu === link.label"
              class="md:hidden flex flex-col bg-orange-700/40">
              <NuxtLink v-for="child in link.children" :key="child.href + child.label" :to="child.href"
                class="px-8 py-3 font-medium text-white/90 text-sm transition duration-300 hover:text-orange-200 hover:underline"
                @click="closeAll">
                {{ child.label }}
              </NuxtLink>
            </div>
          </template>

        </div>
      </nav>
  </header>
</template>