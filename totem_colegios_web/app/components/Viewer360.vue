<template>
  <div ref="viewerContainer" class="meu-visualizador"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps<{
  url: string
}>()

const viewerContainer = ref<HTMLElement | null>(null)
let viewerInstance: any = null

onMounted(async () => {
  const { Viewer } = await import('@photo-sphere-viewer/core')
  await import('@photo-sphere-viewer/core/index.css')

  if (viewerContainer.value) {
    viewerInstance = new Viewer({
      container: viewerContainer.value,
      panorama: props.url,
      navbar: ['zoom', 'fullscreen'],
    })
  }
})

watch(() => props.url, (newUrl) => {
  if (viewerInstance && newUrl) {
    viewerInstance.setPanorama(newUrl)
  }
})

onBeforeUnmount(() => {
  if (viewerInstance) {
    viewerInstance.destroy()
  }
})
</script>

<style scoped>
.meu-visualizador {
  width: 100%;
  height: 500px;
  background-color: #222;
  border-radius: 8px;
}
</style>