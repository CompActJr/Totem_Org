<script lang="ts" setup>

import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules";

interface Props {
    banners: string[],
    titulo: string,
    subtitle: string,
    link: string
}

const props = defineProps<Props>();

</script>

<template>
    <section class="w-full h-100 lg:h-200 relative z-0 ">
        <Swiper :modules="[Autoplay, Pagination]" :autoplay="{ delay: 3000 }" :slides-per-view="1"
            :pagination="{ clickable: true }" class="h-full">

            <SwiperSlide v-for="banner in props.banners" :key="banner">
                <NuxtImg :src="banner" class="absolute inset-0 w-full h-full object-cover" :quality="100" loading="lazy"
                    format="webp" />
                
            </SwiperSlide>

        </Swiper>

        <div class="absolute inset-0 bg-black/40">

            <div class="absolute inset-0 z-10">

                <div class="absolute z-10 lg:bottom-48 bottom-32 lg:left-16 left-4">
                    <h1 class="lg:text-8xl md:text-4xl text-2xl text- font-bold text-amber-50">
                        {{ props.titulo }}
                    </h1>
                    <span class="lg:text-4xl md:text-2xl text-1xl text-amber-50">
                        {{ props.subtitle }}
                    </span>
                </div>

                <NuxtLink 
                    :to="props.link"
                    class="
                        p-2 lg:p-4 rounded-full
                        bg-yellow-400 text-lg lg:text-xl font-bold text-gray-600 
                        transition-all duration-300 hover:text-white
                        hover:scale-105 hover:bg-orange-400 
                        absolute lg:bottom-16 lg:left-16 bottom-12 left-4
                ">
                    Agende Sua Visita
                </NuxtLink>
                
            </div>
        </div>

    </section>
</template>