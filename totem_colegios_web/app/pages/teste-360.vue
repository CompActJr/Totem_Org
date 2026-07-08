<template>
  <div class="pagina-teste">
    <h1>Teste do Visualizador 360º</h1>
    <NuxtLink to="/">← Voltar para a Home</NuxtLink>

    <div class="container-360">
      <ClientOnly>
        <div ref="viewerContainer" class="meu-visualizador"></div>
        
        <template #fallback>
          <div class="carregando">Carregando motor 360...</div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const viewerContainer = ref<HTMLElement | null>(null)
let viewerInstance: any = null

onMounted(async () => {
  const { Viewer } = await import('@photo-sphere-viewer/core')
  await import('@photo-sphere-viewer/core/index.css')

  // 2. Inicializamos o visualizador
  if (viewerContainer.value) {
    viewerInstance = new Viewer({
      container: viewerContainer.value,
      panorama: '/images/panoramas/santa_maria/teste360.webp',
      navbar: ['zoom', 'fullscreen'],
    })
  }
})

// 3. Limpamos a memória quando você sair dessa página
onBeforeUnmount(() => {
  if (viewerInstance) {
    viewerInstance.destroy()
  }
})
</script>

<style scoped>
.pagina-teste {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  font-family: sans-serif;
}

.container-360 {
  margin-top: 2rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.meu-visualizador {
  width: 100%;
  height: 600px;
  background-color: #111;
}

.carregando {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #666;
}
</style>