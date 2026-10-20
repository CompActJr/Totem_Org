<script lang="ts" setup>
import type { Organization } from '~/types/organizations.types';

defineProps<{
  unidade: Organization
}>()
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
            {{ unidade.city }}
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
        :to="unidade.slug ? `/vestibulares/unidade/${unidade.slug}` : '/vestibulares'"
        class="rounded-full bg-yellow-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-orange-400 hover:text-white"
      >
        Saiba mais →
      </NuxtLink>
    </footer>
  </article>
</template>
