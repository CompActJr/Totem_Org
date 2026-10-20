<script lang="ts" setup>
import { niveis } from '~/data/static'
import type { EducationalTypes } from '~/types/organizations.types'

interface Props {
  nivel: EducationalTypes
  unidadeSlug: string
}

const props = defineProps<Props>()

const currentNivel = computed(() => {
  return (
    niveis.find((item) => item.name === props.nivel) ?? {
      name: props.nivel,
      image: '/geral/NIVEL-INFANTIL.jpg',
      link: 'infantil',
    }
  )
})

const levelLink = computed(() => {
  return `/colegios/unidade/${props.unidadeSlug}/niveis/${encodeURIComponent(currentNivel.value.link)}`
})
</script>

<template>
  <article class="
    overflow-hidden rounded-2xl border border-gray-200 bg-white
    shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
    w-full
  ">
    <div class="relative h-128">
      <NuxtImg
        :src="currentNivel.image"
        :alt="props.nivel"
        class="h-full w-full object-cover"
        loading="lazy"
      />

      <div class="absolute inset-0 flex items-end">
        <div class="bg-orange-500/80 p-4 w-full min-h-46">
          <h2 class="text-3xl font-bold text-white text-center">
            {{ props.nivel }}
          </h2>

          <NuxtLink
            :to="levelLink"
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