<script lang="ts" setup>
import {useNavigation} from "~/composables/useNavigate"
const { navLinks } = useNavigation()
</script>

<template>
   <div class="relative min-h-screen">

    <!-- Fundo -->
    <div
      class="fixed inset-0 -z-20 bg-cover bg-center bg-fixed"
      style="background-image: url('/geral/bkg-grafismo-lobo.jpg')"
    />

    <!-- Overlay -->
    <div class="fixed inset-0 -z-10 bg-white/80"/>

    <Menu :links="navLinks"/>

    <main class="flex-1 pt-20 md:pt-26">
      <slot />
    </main>

    <Footer/>

  </div>
</template>