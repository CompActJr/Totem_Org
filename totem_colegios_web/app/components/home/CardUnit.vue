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
        class="overflow-hidden rounded-2xl border border-gray-200
        bg-white shadow-md 
         transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="p-4">
          <NuxtImg
            :src="unidade.image || '/images/SALA_DE_AULA_1.jpg'"
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
            {{ unidade.whatsapp }}
          </p>

          <NuxtLink
            :to="`/unidades/${unidade.slug}`"
            class="mt-6 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
          >
            Saiba mais →
          </NuxtLink>
        </div>

        <footer
          class="flex items-center justify-between border-t border-gray-200 px-5 py-4"
        >
          <div class="flex gap-4">
            <a :href="unidade.facebook" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="#000" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
              </svg>
            </a>

            <a :href="unidade.instagram" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="#000" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
              </svg>
            </a>

            <a :href="`mailto:${unidade.email}`">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="#000" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
              </svg>
            </a>
          </div>

          <a :href="`https://wa.me/${unidade.whatsapp.replace(/\D/g, '')}`" target="_blank"
            class="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold
             text-white transition hover:bg-green-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <g fill="#fff">
                <path fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718l-.697 2.359l2.32-.648l.379.243A8 8 0 1 0 12 4M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382l1.426-4.829l-.006-.007l-.033-.055A9.96 9.96 0 0 1 2 12" clip-rule="evenodd" />
                <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1 1 0 0 0-.34-.075c-.196 0-.362.098-.49.291c-.146.217-.587.732-.723.886c-.018.02-.042.045-.057.045c-.013 0-.239-.093-.307-.123c-1.564-.68-2.751-2.313-2.914-2.589c-.023-.04-.024-.057-.024-.057c.005-.021.058-.074.085-.101c.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711c-.158-.377-.366-.552-.655-.552c-.027 0 0 0-.112.005c-.137.005-.883.104-1.213.311c-.35.22-.94.924-.94 2.16c0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537c1.412.564 2.081.63 2.461.63c.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276c.192-.534.243-1.117.115-1.329c-.088-.144-.239-.216-.43-.308" />
              </g>
            </svg>
          </a>
          
        </footer>
      </article>
</template>