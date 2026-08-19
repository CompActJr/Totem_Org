<script lang="ts" setup>
import type { AtividadeType } from '~/types/atividades.types';

/**
 * @author Jonas
 * componente de card para as atividades
*/

interface Props {
    atividade: AtividadeType
}

const props = defineProps<Props>()

const aberto = ref(false);

function toggle() {
    aberto.value = !aberto.value;
}

</script>

<template>
    <article class="
        overflow-hidden rounded-2xl border border-gray-200 bg-white 
        shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
        w-[100%]
    ">
        <!-- Área da imagem -->
        <div class="relative h-128">

            <NuxtImg 
                :src="atividade.image || '/geral/SALA_DE_AULA_1.jpg'" 
                :alt="atividade.name"
                class="h-full w-full object-cover" 
                loading="lazy" 
            />

            <div class="absolute inset-0 flex items-end">

                <div
                    class="relative w-full bg-orange-500/90 p-5 overflow-hidden transition-all
                        duration-500 ease-in-out"
                    :class="aberto ? 'min-h-[80%]' : 'min-h-46'"
                >

                    <Transition name="fade" mode="out-in">
                        <div v-if="!aberto" key="titulo">
                            <h2 class="text-2xl font-bold text-white text-center">
                                {{ atividade.name }}
                            </h2>
                        </div>

                        <div 
                            v-else key="descricao" 
                            class="text-white leading-relaxed text-sm pr-2 overflow-y-auto max-h-72"
                        >
                            <div v-for="turma in atividade.turmas" :key="`${atividade.id}-${turma.nome}`">
                                <h2 class="mt-4 font-bold">
                                    {{ turma.nome }}
                                </h2>
                                <p class="mt-2">
                                    {{ turma.detalhes }}
                                </p>
                            </div>

                        </div>

                    </Transition>

                    <button
                        @click="toggle"
                        class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full
                        bg-yellow-300 px-6 py-3 font-semibold text-gray-700
                        transition hover:scale-105"
                    >
                        {{ aberto ? "Voltar" : "Leia mais →" }}
                    </button> 
                </div>
            </div>

        </div>
    </article>
</template>