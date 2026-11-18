<script setup lang="ts">
import type { Portal } from '~/types/blog.types';
import CTA from '../ui/buttons/CTA.vue';


const props = defineProps<{
    portal: Portal
    reverse?: boolean
}>()

</script>

<template>
    <div class="bg-white rounded-2xl flex flex-col gap-8 items-start shadow-xl p-8 hover:shadow-2xl transition">
        <h2 class="text-bold text-gray-600 text-2xl">{{ portal.title }}</h2>
        <p class="text-gray-600 mb-8 mt-8"> {{ portal.description }} </p>
        <CTA :href="portal.link">ACESSAR</CTA>
    </div>
</template>