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
        <div class="bg-orange-600/80 p-4 w-full">
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
      class="flex justify-center border-t border-gray-200 bg-white px-5 py-5"
    >
      <NuxtLink
        :to="`/unidades/${unidade.slug}`"
        class="rounded-full bg-yellow-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-orange-400 hover:text-white"
      >
        Saiba mais →
      </NuxtLink>
    </footer>

  </article>
</template>