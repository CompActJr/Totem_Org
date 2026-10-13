<script setup lang="ts">
/**
 * @Authors Jonas, Fabricio
 * Thanks Fabricios :D
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Viewer } from '@photo-sphere-viewer/core'
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';

interface PanoramaItem {
  id: string
  panorama: string
  name: string
  thumbnail?: string
}

interface Props {
  panoramas: PanoramaItem[]
  initialPanorama?: string
}

const props = defineProps<Props>()

const viewerContainer = ref<HTMLElement | null>(null)
let viewerInstance: Viewer | null = null

onMounted(async () => {
  const { Viewer } = await import('@photo-sphere-viewer/core')

  await import('@photo-sphere-viewer/core/index.css')
  await import('@photo-sphere-viewer/gallery-plugin/index.css')

  if (!viewerContainer.value) return

  viewerInstance = new Viewer({
    container: viewerContainer.value,

    panorama:
      props.initialPanorama ??
      props.panoramas[0]?.panorama,

    caption: props.panoramas[0]?.name,

    navbar: [
      'gallery',
      'zoom',
      'move',
      'caption',
      'fullscreen'
    ],

    plugins: [
      [GalleryPlugin, {
        items: props.panoramas.map(p => ({
          id: p.id,
          panorama: p.panorama,
          name: p.name,
          thumbnail: p.thumbnail ?? p.panorama
        }))
      }]
    ]
  })
})

onBeforeUnmount(() => {
  viewerInstance?.destroy()
})
</script>

<template>
  <div
    ref="viewerContainer"
    class="w-full h-150 md:h-200  overflow-hidden"
  />
</template>