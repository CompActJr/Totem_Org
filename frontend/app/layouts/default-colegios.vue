<script setup lang="ts">
  import { useNavigation } from '~/composables/useNavigation';
  const { links } = useNavigation()
</script>

<template>
  <div class="relative min-h-screen">
    
    <UiMenu>
      <UiMenuItem v-for="link in links" :key="link.href" :item="link" />
    </UiMenu>

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