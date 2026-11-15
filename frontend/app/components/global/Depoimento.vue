<script lang="ts" setup>
import type { Testimonial } from '~/types/organizations.types';

const props = defineProps<{
    depoimento: Testimonial,
    unidadeName: string
}>();

</script>

<template>
    <div class="pl-8 pr-8 flex flex-col lg:flex-row max-w-5xl gap-12 h-full">
        <div class="flex h-12 w-12 lg:w-64 lg:h-64 shrink-0 items-center justify-center bg-orange-100">

            <div v-if="isUrlValid(depoimento.imagem)" class="h-full w-full">
                <NuxtImg :src="depoimento.imagem" alt="Imagem do depoimento" class="h-full w-full object-cover"
                    loading="lazy" format="webp" />
            </div>


            <span v-else class="text-xl lg:text-4xl text-orange-500 font-bold">
                {{ depoimento.nome.charAt(0) }}
            </span>

        </div>

        <div class="flex flex-1 flex-col justify-between gap-8">
            <p class="text-xl leading-9 text-gray-700 italic">
                "{{ depoimento.depoimento }}"
            </p>

            <div class="flex gap-8 items-center">
                <h3 class="text-4xl text-gray-700 font-bold">
                    {{ depoimento.nome }}
                </h3>

                <span class="text-gray-500">
                    {{ unidadeName }}
                </span>
            </div>
        </div>
    </div>
</template>