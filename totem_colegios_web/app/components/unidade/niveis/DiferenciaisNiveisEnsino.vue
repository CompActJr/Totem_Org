<template>
  <section class="scroll-mt-24 w-full responsive-padding py-12">
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
      <div class="flex-[2]">
        <img
          :src="diferencial.imagem"
          :alt="diferencial.titulo"
          class="w-full h-full object-cover"
        />
      </div>

      <article class="flex-[8]">
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