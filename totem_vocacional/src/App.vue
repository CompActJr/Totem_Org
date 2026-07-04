<template>
  <HeaderDropDown />
  <main class="main_layout">
    <RouterView />
  </main>
  <BottomStatus />
</template>

<script setup lang="ts">
import BottomStatus from './components/BottomStatus.vue';
import HeaderDropDown from './components/HeaderDropDown.vue';
</script>
