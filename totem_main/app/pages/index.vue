<script lang="ts" setup>

useSeoMeta({
    title: 'Página principal',
    description: 'esta é a página principal do Site',
})

const { setMenu } = useAnchorMenu()

setMenu([
    {
        label: 'Portais',
        href: '#portais'
    },
    {
        label: 'Contato',
        href: '#contato'
    }
])

</script>

<template>

    <HeroSlider />

    <div class="px-4 py-6" id="inicio">
        <h1 class="text-2xl text-center p-8 font-bold">Bem vindo Ao Totem</h1>
    </div>

    <Timeline id="portais"/>


</template>