<script lang="ts" setup>
/**
 * @author Jonas
 * seção para mostrar as atividades extracurriculares daquela unidade
 */

import AtividadeCard from './AtividadeCard.vue';
import type { AtividadeType } from '~/types/atividades.types.js';

interface Props {
    atividades: AtividadeType[]
}

const props = defineProps<Props>();

</script>

<template>
    <section class="min-h-128 bg-gray-200 responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                ATIVIDADES EXTRACLASSES
            </h2>

            <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
        </div>

        <p class="mt-4 text-lg">Muitas possibilidades</p>         
        <p class="text-lg">Muito aprendizado</p>
        <p class="text-lg">Muita diversão</p>

        <p class="mt-4 text-lg">
            No Totem, aprender vai muito além da sala de aula. 
            Nossas atividades extracurriculares ampliam repertórios, 
            desenvolvem talentos, fortalecem vínculos e ajudam cada estudante a descobrir 
            novas habilidades, interesses e formas de crescer. 
            Mais do que atividades complementares: oportunidades reais de expressão, descoberta 
            e desenvolvimento.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
            <AtividadeCard 
                v-for="atividade in atividades" 
                :atividade="atividade" 
                :key="atividade.id"
            />
        </div>

    </section>
</template>