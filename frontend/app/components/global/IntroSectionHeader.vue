<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/utils/cn";

const props = defineProps<{ class?: string }>();

const introClass = computed(() =>
    cn(
        "text-orange-600 font-extrabold text-xl md:text-2xl",
        props.class,
    ),
);
</script>

<template>
  <div class="flex items-center">
    <h2 :class="introClass" aria-label="nossas unidades">
      <slot></slot>
    </h2>
    <div class="bg-orange-600 w-32 h-1 rounded-full ml-8"></div>
  </div>
</template>
