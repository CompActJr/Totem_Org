<script lang="ts" setup>
import Aside from '~/components/admin/Aside.vue';;

/**
 * @author Jonas
 * layout admin definir o layout no script da página com definePageMeta ou setLayout
 * */
</script>

<template>
  <div class="flex min-h-screen text-[#262626]">
    
    <Aside/>

     <!-- Fundo -->
    <div
      class="fixed inset-0 -z-20 bg-cover bg-center bg-fixed"
      style="background-image: url('/geral/bkg-grafismo-lobo.jpg')"
    />
    <!-- Overlay -->
    <div class="fixed inset-0 -z-10 bg-white/80" />

    <main class="flex min-h-screen w-full flex-col gap-8 items-center  px-6 py-6 md:px-10 lg:px-16">
        <slot />
    </main>

  </div>
</template>