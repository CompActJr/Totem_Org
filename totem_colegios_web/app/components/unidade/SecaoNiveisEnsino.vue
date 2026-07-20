<script lang="ts" setup>
import type { UnidadeType } from '~/types/unidade.type';
import niveis from "~/data/niveis_ensino.json";
import type { EducationalLevel } from '~/types/educational.types';
import NivelEnsinoCard from './NivelEnsinoCard.vue';

/**
 * @author Jonas
 * seção para niveis de ensino da unidade com cards interativos
 */

interface Props {
  unidade: UnidadeType
}

const props = defineProps<Props>();

//filtrando os niveis de ensino da unidade com base nos niveis cadastrados na unidade
const filteredNiveis = (niveis as EducationalLevel[]).filter((n) =>
    props.unidade.levels.includes(n.name)
)

</script>

<template>
    <section class="min-h-128 w-full bg-[#FFF6C9] py-20 responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                NÍVEIS DE ENSINO
            </h2>

            <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
        </div>

        <div class="mt-8 flex flex-row flex-wrap gap-16 justify-start">
            <NivelEnsinoCard v-for="value in filteredNiveis" 
                :key="value.name" :unidade-slug="unidade.slug" :nivel="value"/>
        </div>

    </section>
</template>