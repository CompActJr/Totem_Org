<script setup lang="ts">
import type { Portal } from '~/types/portal';

const props = defineProps<{
    portal: Portal
    reverse?: boolean
}>()

</script>

<template>

<div
    class="relative mb-16 md:grid md:grid-cols-2 md:gap-20 items-center"
>

    <!-- esquerda -->

    <div :class="reverse ? 'md:order-2' : ''">

        <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
           <h2 class="text-bold text-gray-600 text-2xl">{{ portal.title }}</h2>
           
            <p class="text-gray-600 mb-8 mt-8"> {{ portal.description }} </p>

            <NuxtLink
                :to="portal.link"
                class="
                    inline-flex
                    bg-gray-600
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-orange-400
                    transition">
                Acessar portal →
            </NuxtLink>

        </div>

    </div>

    <!-- outro lado vazio -->
    <div :class="reverse ? '' : 'hidden md:block'"/>

    <!-- bolinha -->
    <div
        class="
            hidden 
            md:flex
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            h-6
            w-6
            rounded-full
            bg-gray-600
            border-4
            border-white
            shadow"
    />

</div>

</template>