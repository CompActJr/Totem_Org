<script lang="ts" setup>
const props = defineProps<{
    href: string
}>();

</script>

<template>
    <NuxtLink :to="href">
        <p class="font-medium text-lg text-white transition-all 
            duration-200 hover:underline">
            <slot/>
        </p>   
    </NuxtLink>
</template>