<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Bem-vindo ao Totem Colégios</h1>
          <p>Educação de qualidade para o futuro dos seus filhos</p>
          <button class="btn btn-primary">Saiba Mais</button>
        </div>
      </div>
    </section>

    <section class="section-lg">
      <div class="container">
        <h2 class="text-center mb-7">Nossos Serviços</h2>
        <div class="grid">
          <div class="col-4">
            <div class="card">
              <h3>Educação de Qualidade</h3>
              <p>Ensino baseado em métodos modernos e comprovados.</p>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <h3>Infraestrutura Completa</h3>
              <p>Instalações modernas e seguras para aprendizado.</p>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <h3>Comunidade Engajada</h3>
              <p>Família e escola unidas pelo crescimento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home - Totem Colégios',
})
</script>

<style scoped>
.home {
  width: 100%;
}
</style>
