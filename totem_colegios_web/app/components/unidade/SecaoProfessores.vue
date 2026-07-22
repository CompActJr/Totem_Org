<script lang="ts" setup>
/**
 * @author jonas
 * grid de professores
 */
import type { ProfessorType } from '~/types/professores.types';
import ProfessorCard from './ProfessorCard.vue';

interface Props {
  professores: ProfessorType[]
}

const props = defineProps<Props>();

</script>

<template>
    <section class="min-h-128 w-full bg-[#FFF6C9] responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                CONHEÇA NOSSOS PROFISSIONAIS
            </h2>

            <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
        </div>

        <div class="mt-8 flex flex-row flex-wrap gap-16 justify-start">
            <ProfessorCard v-for="professor in professores" :professor="professor" :key="professor.id"/>
        </div>

    </section>
</template>