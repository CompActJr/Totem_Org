<script lang="ts" setup>
/**
 * @author jonas
 * grid de professores
 */
import type { ProfessorType } from '~/types/professores.types';
import ProfessorCard from './ProfessorCard.vue';

interface Props {
  unidadeId: number
  nivelId?: number
}

const props = defineProps<Props>();

const repository = useUnidadeRepository();

const professores = computed<ProfessorType[]>(() => {
  const todos = repository.getProfessores(props.unidadeId);

  if (props.nivelId === undefined) {
    return todos;
  }

  return todos.filter((professor) => professor.nivelId.includes(props.nivelId!));
});

</script>

<template>
    <section class="min-h-128 w-full bg-[#FFF6C9] py-8 px-11 md:px-16 lg:py-16 lg:px-20 xl:px-34">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                CONHEÇA NOSSOS PROFISSIONAIS
            </h2>

            <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 justify-items-start">
            <ProfessorCard v-for="professor in professores" :professor="professor" :key="professor.id"/>
        </div>

    </section>
</template>