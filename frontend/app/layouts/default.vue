<script setup lang="ts">

import Menu from '~/components/ui/Menu.vue';
import MenuItem from '~/components/ui/MenuItem.vue';
import { useNavigation } from '~/composables/useNavigation';

const { links } = useNavigation()
</script>

<template>
  <div class="relative min-h-screen">
    
    <Menu>
      <MenuItem v-for="link in links" :key="link.href" :item="link" />
    </Menu>

    <!-- Fundo -->
    <div
      class="fixed inset-0 -z-20 bg-cover bg-center bg-fixed"
      style="background-image: url('/images/bkg-grafismo-lobo.jpg')"
    />
    <!-- Overlay -->
    <div class="fixed inset-0 -z-10 bg-white/80" />

    <main>
      <slot />
    </main>
  </div>
</template>