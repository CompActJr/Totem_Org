<script lang="ts" setup>

useSeoMeta({
    title: 'Página principal',
    description: 'esta é a página principal do Site',
})

</script>

<template>

    <HeroSlider />

    <div class="px-4 py-32">
        <h1 class="px-4 py-3 text-gray-600 text-6xl text-center font-bold">
            Totem
        </h1>
        <p class="px-4 py-3 text-gray-600 text-center text-xl">
            Conheça a organização e seus principais portais institucionais
        </p>
    </div>

    <Timeline id="portais" />


    <div class="w-full bg-gray-600 mt-8 mb-8 h-2"></div>
</template>