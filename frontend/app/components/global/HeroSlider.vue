<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Pagination } from "swiper/modules";

const props = defineProps<{
    banners: string[],
}>();

</script>

<template>
    <section class="w-full h-100 lg:h-200 relative z-0 ">
        
        <Swiper 
            :modules="[Autoplay, Pagination]" 
            :autoplay="{ delay: 3000 }" 
            :slides-per-view="1"
            :pagination="{ clickable: true }" 
            class="h-full"
        >

            <SwiperSlide v-for="banner in props.banners" :key="banner">
                <NuxtImg 
                    :src="banner" 
                    class="absolute inset-0 w-full h-full object-cover" 
                    :quality="100" 
                    loading="lazy" 
                    format="webp" 
                />
            </SwiperSlide>
        </Swiper>

        <slot>
          <!-- overlay cta-->  
        </slot>

    </section>
</template>