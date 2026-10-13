<template>
   <div class="relative min-h-screen">

    <!-- Fundo -->
    <div
      class="fixed inset-0 -z-20 bg-cover bg-center bg-fixed"
      style="background-image: url('/images/bkg-grafismo-lobo.jpg')"
    />

    <!-- Overlay -->
    <div class="fixed inset-0 -z-10 bg-white/80"/>

    <Menu/>

    <main class="flex-1 lg:pt-20 md:pt-20  pt-20">
      <slot />
    </main>

    <Footer/>

  </div>
</template>