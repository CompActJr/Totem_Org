<script lang="ts" setup>

import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules";

const banners = [
    "/geral/BANNER.jpg",
    "/geral/AGENDE-SUA-VISITA.jpg"
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
                        mt-8 
                        rounded-full
                        bg-yellow-400 
                        px-8 py-4 text-xl 
                        font-semibold
                        text-gray-600 
                        hover:text-white
                        transition-all 
                        duration-300 
                        hover:scale-105
                        hover:bg-orange-400 
                        absolute bottom-16 left-16 
                        hidden md:flex lg:flex"
                >
                    Agende Sua Visita
                </NuxtLink>
            </div>
        </div>

    </section>
</template>