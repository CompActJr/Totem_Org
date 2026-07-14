<script lang="ts" setup>
/**
 * @author Jonas
 * layout admin definir o layout no script da página com definePageMeta ou setLayout
 * */
</script>

<template>
    <div class="relative min-h-screen">

        <!-- Fundo -->
        <div class="fixed inset-0 -z-20 bg-cover bg-center bg-fixed"
            style="background-image: url('/images/bkg-grafismo-lobo.jpg')" />

        <!-- Overlay -->
        <div class="fixed inset-0 -z-10 bg-white/80" />

        <aside class="absolute top-0 bg-orange-400 w-78 h-full">
            <h2 class="text-white font-bold text-2xl text-center py-8">Painel Adminstrativo</h2>
        </aside>

        <main>
            <slot />
        </main>

    </div>
</template>