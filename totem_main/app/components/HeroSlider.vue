<script lang="ts" setup>

import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules";

const banners = [
    "/images/banner_colegios.jpg",
    "/images/banner_home_on.jpg",
    "/images/banner_santa_maria.jpg",
    "/images/banner_santa_rosa.jpg",
    "/images/banner_ijui.jpg"
]

</script>

<template>
    <Swiper :modules="[Autoplay, Pagination]" :autoplay="{ delay: 3000 }" :slides-per-view="1"
        :pagination="{ clickable: true }">

        <SwiperSlide v-for="banner in banners" :key="banner">
            <NuxtImg :src="banner" class="w-full" loading="lazy" format="webp" />
        </SwiperSlide>

    </Swiper>

</template>