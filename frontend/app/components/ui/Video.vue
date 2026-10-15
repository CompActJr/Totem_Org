<script lang="ts" setup>
import type { Video } from '~/types/blog.types';

const props = defineProps<{video: Video}>();
</script>

<template>
    <div class="h-130 flex flex-col rounded-2xl shadow-lg
        bg-white overflow-hidden 
        transition-all duration-300 hover:scale-105 p-4">

    </div>
</template>