<script lang="ts" setup>
import { ref, onMounted } from 'vue';
let viewerContainer: HTMLElement | null = null;

onMounted(async () => {
  const { Viewer } = await import('@photo-sphere-viewer/core');
  await import('@photo-sphere-viewer/core/index.css');
  viewerContainer = document.querySelector('#viewer')

  if (viewerContainer) {
    const viewer = new Viewer({
      container: viewerContainer,
      panorama: '/panoramas/cruz-alta/teste360.webp',
    });
  }

});
</script>

<template>
  <ClientOnly>
    <div id="viewer" style="width: 100vw; height: 100vh;"></div>
  </ClientOnly>
</template>