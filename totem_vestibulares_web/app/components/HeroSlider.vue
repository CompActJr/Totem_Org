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
    <Swiper 
        :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 3000 }"
        :slides-per-view="1"
        :pagination="{ clickable: true }"
        class="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]"
    >

        <SwiperSlide v-for="banner in banners" :key="banner" class="relative">
            <NuxtImg 
                :src="banner"
                class="w-full h-full
                object-cover"
                :quality="100"
                loading="lazy"
                format="webp" 
            />
            <div class="absolute inset-0 bg-black/40"></div>
        </SwiperSlide>
          
    </Swiper>

</template>