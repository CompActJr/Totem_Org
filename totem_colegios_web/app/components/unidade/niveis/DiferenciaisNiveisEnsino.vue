<template>
  <section class="scroll-mt-24 w-full py-8 px-12 md:px-8 lg:py-16 lg:px-16 xl:px-48">
    <div class="flex items-center mb-8">
      <h2 class="text-gray-600 font-bold" aria-label="motivos para matricular">
        Motivos para Matricular
      </h2>
      <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
    </div>

    <div
      v-for="diferencial in diferenciaisFiltrados"
      :key="diferencial.id"
      class="flex flex-col md:flex-row gap-4 mb-12 last:mb-0"
    >
      <div class="mx-auto md:mx-0 w-10/12 md:w-6/12 lg:w-3/12">
        <NuxtImg :src="diferencial.imagem" :alt="diferencial.titulo"
            class="h-full w-full rounded-2xl object-cover shadow-lg" loading="lazy" format="webp" />
      </div>

      <article class="w-10/12 md:w-6/12 lg:w-9/12">
        <h3 class="text-xl md:text-2xl text-gray-700 font-bold mb-4">
          {{ diferencial.titulo }}
        </h3>

        <p
          v-for="(paragrafo, i) in paragrafos(diferencial.descricao)"
          :key="i"
          class="mt-4 first:mt-0"
        >
          {{ paragrafo }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DiferencialNivel } from '../../../types/diferenciais_niveis.types'
import diferenciaisData from '../../../data/diferenciais_niveis.json'

const props = defineProps<{
  nivelId: number
  unidadeId: number
}>()

const diferenciais = diferenciaisData as DiferencialNivel[]

const diferenciaisFiltrados = computed(() =>
  diferenciais.filter((d) => 
    d.nivelId === props.nivelId &&
    d.unidadeId === props.unidadeId)
)

function paragrafos(descricao: string) {
  return descricao.split('\n\n')
}
</script>