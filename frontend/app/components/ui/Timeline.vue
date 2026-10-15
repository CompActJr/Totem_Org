<script setup lang="ts">
  import { portais } from '~/data/static';
</script>

<template>

<div class="relative p-8">

    <div class="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-orange-500 -translate-x-1/2"/>
    
    <TimelineCard
        v-for="(portal,index) in portais"
        :key="portal.title"
        :portal="portal"
        :reverse="index % 2 === 1"
    />

</div>

</template>