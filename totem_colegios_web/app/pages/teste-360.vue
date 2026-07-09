<template>
  <div class="pagina-teste">
    <h1>Visualizador 360º</h1>
    
    <div class="container-360">
      <ClientOnly>
        <Viewer360 url="/images/panoramas/santa_maria/teste360.webp" />
        
        <template #fallback>
          <div class="carregando">Carregando</div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.pagina-teste {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  font-family: sans-serif;
}

.container-360 {
  margin-top: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.carregando {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #666;
}
</style>