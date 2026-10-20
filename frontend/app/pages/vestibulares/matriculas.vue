<script setup lang="ts">
import GridMatricula from '~/components/matricula/GridMatricula.vue';
import IntroMatricula from '~/components/matricula/IntroMatricula.vue';

definePageMeta({ layout: 'vestibulares' })
</script>

<template>
    <section
        class="relative h-80 lg:h-105 w-full flex items-center justify-center overflow-hidden">

        <img
            src="/geral/FUNDO_MATRICULA.jpg"
            alt="Escolha sua turma"
            class="absolute inset-0 w-full h-full object-cover" />


        <div class="absolute inset-0 bg-black/45"></div>

        <!-- Conteúdo -->
        <div class="relative z-10 text-center text-white px-6">

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">
                Escolha sua turma
            </h1>

            <div class="w-28 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>

        </div>

    </section>

    <IntroMatricula />
    <GridMatricula />
</template>
