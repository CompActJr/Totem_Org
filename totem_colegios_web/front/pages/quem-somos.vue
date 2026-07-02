<template>
  <div class="about">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Quem Somos</h1>
          <p>Conheça a história do Totem Colégios</p>
        </div>
      </div>
    </section>

    <section class="section-lg">
      <div class="container">
        <div class="grid">
          <div class="col-6">
            <h2>Nossa Missão</h2>
            <p>Formar cidadãos conscientes, críticos e preparados para enfrentar os desafios do mundo moderno através de uma educação de qualidade que valoriza a criatividade e o pensamento inovador.</p>
          </div>
          <div class="col-6">
            <h2>Nossos Valores</h2>
            <p>Acreditamos na inclusão, respeito à diversidade, excelência acadêmica, responsabilidade social e na importância de criar um ambiente acolhedor onde todos possam aprender e crescer juntos.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-lg" style="background-color: var(--surface);">
      <div class="container">
        <h2 class="text-center mb-7">Estatísticas</h2>
        <div class="grid">
          <div class="col-3 text-center">
            <h3>500+</h3>
            <p>Alunos formados</p>
          </div>
          <div class="col-3 text-center">
            <h3>25+</h3>
            <p>Anos de experiência</p>
          </div>
          <div class="col-3 text-center">
            <h3>50+</h3>
            <p>Professores dedicados</p>
          </div>
          <div class="col-3 text-center">
            <h3>98%</h3>
            <p>Aprovação</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Quem Somos - Totem Colégios',
})
</script>

<style scoped>
.about {
  width: 100%;
}
</style>
