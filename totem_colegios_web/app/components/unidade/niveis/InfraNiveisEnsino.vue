<script setup lang="ts">
import { computed } from 'vue'
import type { InfraNivel } from '../../../types/infra_niveis.types'
import infraData from '../../../data/niveis_infra.json'

const props = defineProps<{
  nivel: string
  unidade: string
}>()

const infras = infraData as InfraNivel[]

const infrasFiltrados = computed(() =>
  infras.filter(
    (d) =>
      d.nivel === props.nivel &&
      d.unidade === props.unidade
  )
)

</script>

<template>
    <section class="min-h-128 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                INFRAESTRUTURA QUE INSPIRA
            </h2>

            <div class="bg-orange-600 w-64 h-0.5 ml-8"></div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <NuxtImg
            v-for="infra in infrasFiltrados"
            :key="infra.id"
            :src="infra.image"
            format="webp"
            quality="80"
            loading="lazy"
            class="w-full h-48 md:h-96 object-cover rounded-xl border-gray-100 border-4 border-solid transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        />
        </div>

    </section>
</template>