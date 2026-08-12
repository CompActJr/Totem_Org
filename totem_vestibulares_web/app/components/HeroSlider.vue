<script lang="ts" setup>

import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules";

const banners = [
    "/images/AREA_DE_CONViVIO_6.jpg",
    "/images/RECEPCAO_9.jpg",
    "/images/SALA_DE_AULA_2.jpg",
    "/images/ESPACO_GOURMET_7.jpg",
    "/images/SALA_DE_ATENDIMENTO_4.jpg",
    "/images/SALA_DE_ESTUDOS_3.jpg",
    "/images/HALL5.jpg",
    "/images/SALA_DE_AULA_1.jpg",
    "/images/SECRETARIA_8.jpg"
]

</script>

<template>
    <section class="w-full h-100 lg:h-200 relative">
        <Swiper :modules="[Autoplay, Pagination]" :autoplay="{ delay: 3000 }" :slides-per-view="1"
            :pagination="{ clickable: true }" class="h-full">

            <SwiperSlide v-for="banner in banners" :key="banner">
                <NuxtImg :src="banner" class="absolute inset-0 w-full h-full object-cover" :quality="100" loading="lazy"
                    format="webp" />

            </SwiperSlide>

        </Swiper>

        <div class="absolute inset-0 bg-black/40">
          
            <div class="absolute inset-0 z-10">
                <NuxtLink 
                    to="/matriculas"
                    class="
                        p-2 lg:p-4 rounded-full
                        bg-yellow-400 text-lg lg:text-xl font-bold text-gray-600 
                        transition-all duration-300 hover:text-white
                        hover:scale-105 hover:bg-orange-400 
                        absolute lg:bottom-16 lg:left-16 bottom-12 left-4
                ">
                    Escolha Sua Turma
                </NuxtLink>
            </div>
        </div>

    </section>
</template>