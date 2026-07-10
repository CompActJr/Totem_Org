<script lang="ts" setup>
import type { UnidadeType } from '~/types/unidade.type';

defineProps<{
    unidade: UnidadeType
}>()
</script>

<template>
      <article
        class="overflow-hidden rounded-2xl border border-gray-200
        bg-white shadow-md 
         transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="p-4">
          <NuxtImg
            :src="unidade.image || '/images/unidade-placeholder.jpg'"
            :alt="unidade.city"
            class="h-56 w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>

        <div class="px-5 pb-5">
          <h2 class="text-2xl font-bold text-[#332E29]">
            {{ unidade.city }}
          </h2>

          <p class="mt-3 text-gray-600">
            {{ unidade.address }}
          </p>

          <p class="mt-2 text-sm text-gray-500">
            {{ unidade.phone }}
          </p>

          <NuxtLink
            :to="`/unidades/${unidade.slug}`"
            class="mt-6 inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
          >
            Saiba mais →
          </NuxtLink>
        </div>

        <footer
          class="flex items-center justify-between border-t border-gray-200 px-5 py-4"
        >
          <div class="flex gap-4">
            <a :href="unidade.facebook" target="_blank">
             
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 transition hover:bg-orange-500 hover:text-white"
              >
                FB
              </div>
            </a>

            <a :href="unidade.instagram" target="_blank">
           
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 transition hover:bg-orange-500 hover:text-white"
              >
                IG
              </div>
            </a>

            <a :href="`mailto:${unidade.email}`">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 transition hover:bg-orange-500 hover:text-white"
              >
                @
              </div>
            </a>
          </div>

          <a
            :href="`https://wa.me/${unidade.whatsapp.replace(/\D/g, '')}`"
            target="_blank"
            class="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            WhatsApp
          </a>
        </footer>
      </article>
</template>