<script lang="ts" setup>
/**
 * @author Jonas
 * componente de card para os professores
*/

import type { ProfessorType } from '~/types/professores.types';

interface Props {
    professor: ProfessorType
}

const props = defineProps<Props>()

</script>

<template>
    <article class="
        overflow-hidden rounded-2xl border border-gray-200 bg-white 
        shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
        w-96
    ">
        <!-- Área da imagem -->
        <div class="relative h-128">

            <NuxtImg :src="professor.imagemUrl || '/geral/perfil.png'" :alt="professor.nome"
                class="h-full w-full object-cover" loading="lazy" />


            <div class=" absolute inset-0 flex items-end">
                <div class="bg-orange-600/80 p-4 w-full min-h-46">
                    <h2 class="text-3xl font-bold text-white text-center">
                        {{ professor.nome }}
                    </h2>

                    <button 
                        class="
                            rounded-full bg-yellow-300 px-6 py-3 font-semibold
                            text-gray-700 transition hover:bg-orange-400 hover:text-white
                            absolute bottom-4 left-1/2 -translate-x-1/2
                        "
                        type="button"
                    >
                        Saiba mais →
                    </button>

                </div>
            </div>
        </div>
    </article>
</template>