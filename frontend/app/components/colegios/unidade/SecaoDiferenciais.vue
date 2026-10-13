<script lang="ts" setup>
import type { DiferencialType } from '~/types/diferenciais.types';

/**
 * @author  Jonas
 * seção para os diferenciais do site
 */

interface Props {
    diferenciais: DiferencialType[]
}

const props = defineProps<Props>();

</script>

<template>
    <section class="min-h-128 bg-gray-200 py-8 lg:py-20 px-8 md:px-32 lg:px-64">
        <div class="flex items-center gap-8">
            <h2
                class="text-3xl font-bold uppercase tracking-wide text-gray-700"
            >
                Motivos para matricular
            </h2>

            <div class="h-1 w-28 rounded bg-orange-600"></div>
        </div>

        <article class="mt-8">
            <ul class="space-y-4">
                <li v-for="value in diferenciais" 
                    :key="value.id" 
                     class="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-white"
                >
                    <span class="mt-2 h-2 w-2 rounded-full bg-orange-600 shrink-0"></span>

                    <p class="text-gray-700 leading-7">
                        {{ value.diferencial }}
                    </p>
                </li>
            </ul>
        </article>

    </section>
</template>