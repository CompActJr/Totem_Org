<script lang="ts" setup>
import type { Organization } from '~/types/organizations.types';

const props = defineProps<{
  unidade: Organization
}>();

const { details, tour } = useUnidadeRoutes(() => props.unidade);
</script>

<template>
  <article
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="relative h-128">
      <NuxtImg
        :src="unidade.image || '/geral/perfil.jpg'"
        :alt="unidade.city || 'Unidade Totem'"
        class="h-full w-full object-cover"
        loading="lazy"
      />

      <div class="absolute inset-0 flex items-end">
        <div class="w-full bg-orange-500/80 p-4">
          <h2 class="text-center text-3xl font-bold text-white">
            {{ unidade.city.toUpperCase() }}
          </h2>

          <p
            v-for="level in unidade.levels || []"
            :key="level"
            class="text-center text-lg text-white"
          >
            {{ level }}
          </p>
        </div>
      </div>
    </div>

    <footer class="flex justify-center gap-8 border-t border-gray-200 bg-white px-5 py-5">
      <NuxtLink
        v-if="tour"
        :to="tour"
        aria-label="Tour virtual"
        class="flex items-center rounded-full px-6 py-3 shadow-sm transition hover:shadow-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="none" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8.5h1.75m0 0a1.75 1.75 0 1 1 0 3.5H3m2.75-3.5a1.75 1.75 0 1 0 0-3.5H3m18 10c0 3.314-4.03 6-9 6s-9-2.686-9-6M14 5h-1a3 3 0 0 0-3 3v2m4.5-.5v.5a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-.5a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2m2.5-1V7a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2z" />
        </svg>
      </NuxtLink>

      <NuxtLink
        :to="details"
        class="flex items-center rounded-full bg-yellow-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-orange-400 hover:text-white"
      >
        Saiba mais →
      </NuxtLink>
    </footer>
  </article>
</template>