<script lang="ts" setup>

const props = defineProps<{ 
    class?: string,
    href: string
}>();

const propsClass =  computed(() => 
    cn(
        "rounded-full bg-white shadow-2xl px-6 py-3 font-semibold text-gray-700 transition-all duration-200 hover:scale-105",
        props.class
    ),
)
</script>


<template>
    <NuxtLink :to="props.href" 
        target="_blank" 
        :class="propsClass"
    >
        <span><slot></slot></span>
    </NuxtLink>
</template>