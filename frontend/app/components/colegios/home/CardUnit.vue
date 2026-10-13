<script lang="ts" setup>
/**
 * @author Jonas
 * Card para representar as informações da unidade
 */
import type { UnidadeType } from '~/types/unidade.type';

defineProps<{
  unidade: UnidadeType
}>()
</script>

<template>
  <article
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <!-- Área da imagem -->
    <div class="relative h-128">

      <NuxtImg
        :src="unidade.image || '/geral/SALA_DE_AULA_1.jpg'"
        :alt="unidade.city"
        class="h-full w-full object-cover"
        loading="lazy"
      />

      
      <div class=" absolute inset-0 flex items-end">
        <div class="bg-orange-500/80 p-4 w-full">
          <h2 class="text-3xl font-bold text-white text-center">
            {{ unidade.city }}
          </h2>

          <p v-for="level in unidade.levels" class="text-lg text-white text-center">
            {{ level }}
          </p>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <footer
      class="flex justify-center border-t border-gray-200 bg-white px-5 py-5 gap-8"
    >

      <NuxtLink :to="`/unidades/${unidade.slug}/tour`"
        class="rounded-full shadow-sm px-6 py-3 font-semibold text-gray-700 
        transition hover:shadow-xl  hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="none" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8.5h1.75m0 0a1.75 1.75 0 1 1 0 3.5H3m2.75-3.5a1.75 1.75 0 1 0 0-3.5H3m18 10c0 3.314-4.03 6-9 6s-9-2.686-9-6M14 5h-1a3 3 0 0 0-3 3v2m4.5-.5v.5a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-.5a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2m2.5-1V7a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2z" />
        </svg>
      </NuxtLink>

      <NuxtLink
        :to="`/unidades/${unidade.slug}`"
        class="rounded-full bg-yellow-300 px-6 py-3 font-semibold text-gray-700
         transition hover:bg-orange-400 hover:text-white flex items-center"
      >
        Saiba mais →
      </NuxtLink>

    </footer>

  </article>
</template>