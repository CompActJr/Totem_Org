<script setup lang="ts">
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { DepoimentoNivel } from "~/types/depoimentos_niveis.types.ts";
import depoimentosData from "~/data/niveis_depoimentos.json";

const props = defineProps<{
  unidadeId: number;
  nivel: string;
}>();

const depoimentos = computed(() =>
  (depoimentosData as DepoimentoNivel[]).filter(
    (depoimento) =>
      depoimento.unidadeId === props.unidadeId &&
      depoimento.nivel === props.nivel
  )
);
</script>

<template>
  <section class="bg-[#FFF6C9] py-20 responsive-padding">
    <div class="flex items-center">
      <h2 class="font-bold text-orange-600">
        RELATOS
      </h2>

      <div class="ml-8 h-0.5 w-16 bg-orange-600"></div>
    </div>

    <h2 class="mt-6 text-3xl font-bold leading-tight">
      DE QUEM CONHECE <br>
      O COLÉGIO TOTEM
    </h2>

    <Swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="1"
      :speed="600"
      :navigation="true"
      :pagination="{ clickable: true }"
      class="mt-12"
    >
      <SwiperSlide
        v-for="depoimento in depoimentos"
        :key="depoimento.id"
      >
        <div class="mx-auto flex flex-col lg:flex-row max-w-5xl items-center gap-12">

            <div
                class="flex h-12 w-12 lg:w-40 lg:h-40 shrink-0 items-center justify-center rounded-2xl bg-orange-100"
            >
                <span class="text-xl lg:text-4xl text-orange-500 font-bold">
                    {{ depoimento.nome.charAt(0) }}
                </span>
            </div>

          <div class="flex-1">
            <p class="text-xl leading-9 text-gray-700 italic">
              "{{ depoimento.depoimento }}"
            </p>

            <div class="mt-8">
              <h3 class="text-2xl font-bold">
                {{ depoimento.nome }}
              </h3>

              <span class="text-gray-500">
                {{ depoimento.unidade }}
              </span>
            </div>
          </div>

        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style>
    .swiper-button-next,
    .swiper-button-prev {
        color: #f97316;
        width: 42px;
        height: 42px;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 22px;
        font-weight: 700;
    }

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: #d6d3d1;
        opacity: 1;
    }

    .swiper-pagination-bullet-active {
        background: #f97316;
    }
</style>