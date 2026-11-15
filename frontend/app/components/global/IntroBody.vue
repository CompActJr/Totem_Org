<script setup lang="ts">
withDefaults(
  defineProps<{
    imageSrc?: string
    imageAlt?: string
    ctaLink?: string | null
    ctaText?: string
  }>(),
  {
    imageSrc: '/geral/POR-QUE-O-TOTEM.jpg',
    imageAlt: 'Pátio do Colégio Totem visto de cima',
    ctaLink: null,
    ctaText: 'Saiba mais →',
  },
)
</script>

<template>
  <div class="min-h-128 w-full flex flex-col md:flex-row gap-4 xl:gap-[5vw]">
    <article class="w-full md:w-7/12 lg:w-8/12">
      <h2 class="pt-8 lg:pt-12 text-2xl md:text-4xl lg:text-6xl text-gray-700 font-bold">
        <slot name="title">É MAIS QUE<br />COLÉGIO...</slot>
      </h2>

      <div class="pt-8 lg:pt-12 lg:text-lg leading-12">
        <slot name="content" />
      </div>

      <slot name="after-content" />

      <NuxtLink v-if="ctaLink" :to="ctaLink"
        class="mt-8 lg:mt-12 inline-flex w-fit rounded-full bg-white shadow-2xl px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:scale-115"
      >
        {{ ctaText }}
      </NuxtLink>
    </article>

    <div class="w-full md:w-5/12 lg:w-4/12">
        <NuxtImg :src="imageSrc" :alt="imageAlt" class="w-full md:h-180 h-130 object-cover rounded-xl" loading="lazy" format="webp"/>
    </div>

  </div>
</template>
