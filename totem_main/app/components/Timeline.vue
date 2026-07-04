<script setup lang="ts">
import type { Portal } from '~/types/portal';


const portals: Portal[] = [
    {
        title: 'Totem Vestibulares',
        description: 'Ambiente completo para alunos e professores.',
        image: '/images/totem-on.png',
        link: '#'
    },
    {
        title: 'Totem Colégios',
        description: 'Gestão escolar moderna.',
        image: '/images/FACHADA-CRUZ-ALTA.jpg',
        link: '#'
    },
    {
        title: 'Totem Cursos',
        description: 'Cursos online e capacitações.',
        image: '/img/cursos.png',
        link: '#'
    },
    {
        title: 'Totem Vocacional',
        description: 'Seu Teste Vocacional em um Clique',
        image: '/img/cursos.png',
        link: '#'
    },
]

</script>

<template>

<div class="relative">

    <div class="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-500 -translate-x-1/2"/>

    <TimelineCard
        v-for="(portal,index) in portals"
        :key="portal.title"
        :portal="portal"
        :reverse="index % 2 === 1"
    />

</div>

</template>