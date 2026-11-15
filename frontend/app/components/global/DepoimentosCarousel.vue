<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Testimonial } from "~/types/organizations.types";


const props = defineProps<{
    unidadeName: string,
    depoimentos: Testimonial[],
}>();


const prevEl = ref<HTMLElement | null>(null);
const nextEl = ref<HTMLElement | null>(null);
</script>

<template>
    <div class="mt-12 relative depoimentos-swiper-wrap">
        <Swiper :modules="[Navigation, Pagination]" :slides-per-view="1" :speed="600" :navigation="{ nextEl, prevEl }"
            :pagination="{ clickable: true }">
            <SwiperSlide v-for="depoimento in depoimentos" :key="depoimento._id">
                <Depoimento :depoimento="depoimento" :unidade-name="unidadeName"/>
            </SwiperSlide>
        </Swiper>

        <button ref="prevEl" type="button" class="swiper-button-prev" aria-label="Depoimento anterior"></button>
        <button ref="nextEl" type="button" class="swiper-button-next" aria-label="Proximo depoimento"></button>
    </div>
</template>


<style>
/* Setas: escondidas por padrao (mobile, tablet e qualquer dispositivo touch) */
.swiper-button-next,
.swiper-button-prev {
    display: none;
    color: #f97316;
    width: 42px;
    height: 42px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
    font-size: 22px;
    font-weight: 700;
}

.swiper-pagination {
    position: relative;
    margin-top: 32px;
}

.swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background: #d6d3d1;
    opacity: 1;
}

.swiper-pagination-bullet-active {
    background: #333;
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
}
</style>