<script lang="ts" setup>
import type { EducationalLevel } from '~/types/educational.types';

/**
 * @author Jonas
 * card para o nivel de ensino
 */
interface Props {
  nivel: EducationalLevel,
  unidadeSlug: string
}

const props = defineProps<Props>();
</script>

<template>
    <article class="
        overflow-hidden rounded-2xl border border-gray-200 bg-white 
        shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
        w-96
    ">
        <!-- Área da imagem -->
        <div class="relative h-128">

            <NuxtImg :src="nivel.image || '/geral/SALA_DE_AULA_1.jpg'" :alt="nivel.name"
                class="h-full w-full object-cover" loading="lazy" />


            <div class=" absolute inset-0 flex items-end">
                <div class="bg-orange-600/80 p-4 w-full min-h-46">
                    <h2 class="text-3xl font-bold text-white text-center">
                        {{ nivel.name }}
                    </h2>

                    <NuxtLink 
                        :to="`/unidades/${unidadeSlug}/${nivel.link}`"
                        class="
                            rounded-full bg-yellow-300 px-6 py-3 font-semibold
                            text-gray-700 transition hover:bg-orange-400 hover:text-white
                            absolute bottom-4 left-1/2 -translate-x-1/2
                        "
                    >
                        Saiba mais →
                    </NuxtLink>

                </div>
            </div>
        </div>
    </article>
</template>