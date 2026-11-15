<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/utils/cn";

const props = defineProps<{ class?: string }>();

const sectionClasses = computed(() =>
    cn(
        "py-20 px-11 md:px-8 lg:py-16 lg:px-16 xl:px-24 min-h-[66vh] bg-[#FFF6C9]",
        props.class,
    ),
);
</script>

<template>
    <section :class="sectionClasses">
        <slot name="header" />
        <slot name="content" />
    </section>
</template>