<template>
  <div class="blog">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Blog</h1>
          <p>Notícias, dicas e artigos sobre educação</p>
        </div>
      </div>
    </section>

    <section class="section-lg">
      <div class="container">
        <div class="grid">
          <div class="col-6">
            <div class="card">
              <h3>Como desenvolver a criatividade</h3>
              <p>Dicas práticas para estimular a criatividade nas crianças desde cedo.</p>
              <NuxtLink to="#">Leia mais →</NuxtLink>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <h3>Importância da tecnologia na educação</h3>
              <p>Entenda como a tecnologia está transformando o ensino moderno.</p>
              <NuxtLink to="#">Leia mais →</NuxtLink>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <h3>Desenvolvimento socioemocional</h3>
              <p>Por que trabalhar inteligência emocional é fundamental na escola.</p>
              <NuxtLink to="#">Leia mais →</NuxtLink>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <h3>Rotina e estudos em casa</h3>
              <p>Organizando o tempo para melhorar o desempenho acadêmico.</p>
              <NuxtLink to="#">Leia mais →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog - Totem Colégios',
})
</script>

<style scoped>
.blog {
  width: 100%;
}

a {
  color: var(--primary);
  font-weight: 600;
}

a:hover {
  color: var(--primary-dark);
}
</style>
