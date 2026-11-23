<script lang="ts" setup>
import { computed } from "vue";
import { cn } from "@/utils/cn";

const props = defineProps<{ class?: string }>();

const class_ = computed(() =>
    cn(
        "rounded-lg bg-white p-4 md:p-8 transition-all duration-400",
        props.class,
    ),
);
</script>

<template>
    <div :class="class_">
        <slot name="body"/>
        <slot name="foot"/>
    </div>
</template>