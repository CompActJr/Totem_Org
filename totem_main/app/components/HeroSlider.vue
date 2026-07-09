<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const banners = [
  "/images/banner_colegios.jpg",
  "/images/banner_home_on.jpg",
  "/images/banner_santa_maria.jpg",
  "/images/banner_santa_rosa.jpg",
  "/images/banner_ijui.jpg"
]
</script>

<template>
  <section class="w-full h-20 lg:h-200 ">
    <Swiper
      class="h-full"
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true }"
      :loop="true"
    >
      <SwiperSlide
        v-for="banner in banners"
        :key="banner"
        class="relative h-full"
      >
        <NuxtImg
          :src="banner"
          class="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          format="webp"
        />

        <div class="absolute inset-0 bg-black/30" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>