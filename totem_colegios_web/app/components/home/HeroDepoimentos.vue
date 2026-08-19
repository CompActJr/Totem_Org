<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import depoimentos from "~/data/depoimentos.json";

// Setas ficam fora do <Swiper>, entao usamos elementos externos
// (nextEl/prevEl) em vez do :navigation="true" padrao.
const prevEl = ref<HTMLElement | null>(null);
const nextEl = ref<HTMLElement | null>(null);
</script>

<template>
    <section class="bg-[#FFF6C9] py-20 py-8 px-11 md:px-8 lg:py-16 lg:px-16 xl:px-24">
        <div class="flex items-center">
            <h2 class="font-bold text-orange-600">
                RELATOS
            </h2>

            <div class="ml-8 h-0.5 w-16 bg-orange-600"></div>
        </div>

        <h2 class="mt-6 text-2xl md:text-3xl font-bold leading-tight">
            DE QUEM CONHECE <br>
            O COLÉGIO TOTEM
        </h2>

        <div class="mt-12 relative depoimentos-swiper-wrap">
            <Swiper
                :modules="[Navigation, Pagination]"
                :slides-per-view="1"
                :speed="600"
                :navigation="{ nextEl, prevEl }"
                :pagination="{ clickable: true }"
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
                                    Totem {{ depoimento.unidade }}
                                </span>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

            <button
                ref="prevEl"
                type="button"
                class="swiper-button-prev"
                aria-label="Depoimento anterior"
            ></button>

            <button
                ref="nextEl"
                type="button"
                class="swiper-button-next"
                aria-label="Proximo depoimento"
            ></button>
        </div>
    </section>
</template>

<style>
    /* Setas: escondidas por padrao (mobile, tablet e qualquer dispositivo touch) */
    .swiper-button-next,
    .swiper-button-prev {
        display: none;
        color: #f97316;
        width: 42px;
        height: 42px;
        top: 50%;
        margin-top: -21px;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 22px;
        font-weight: 700;
    }

    .swiper-pagination {
        position: relative;
        margin-top: 20px;
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


    /*
        A partir do breakpoint md, so mostra as setas se o dispositivo
        realmente tiver cursor (mouse/trackpad). Em telas touch (mesmo
        acima do md, como tablets), continua so com os pontos
    */
    @media (min-width: 768px) and (hover: hover) and (pointer: fine) {
        .swiper-button-next,
        .swiper-button-prev {
            display: flex;
        }

        .depoimentos-swiper-wrap {
            padding-left: 56px;
            padding-right: 56px;
            box-sizing: border-box;
        }

        .depoimentos-swiper-wrap .swiper-button-prev {
            left: 4px;
        }

        .depoimentos-swiper-wrap .swiper-button-next {
            right: 4px;
        }
    }
</style>