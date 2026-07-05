<template>
  <div class="app">
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Totem Colégios - Educação de Qualidade',
  meta: [
    {
      name: 'description',
      content: 'Totem Colégios - Educação de qualidade para o futuro dos seus filhos'
    }
  ]
})
</script>

<style scoped>
.app {
  min-height: 100vh;
}

main {
  min-height: 100vh;
}
</style>