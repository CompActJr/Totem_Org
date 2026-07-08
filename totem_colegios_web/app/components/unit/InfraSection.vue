<template>
  <section class="section-infra">
    <div class="container grid">
      <p class="eyebrow col-12">ATIVIDADES EXTRACLASSE</p>
      <div class="col-11 infra-text">
        <p>
          O Totem acredita que uma escola de alto nível começa com uma estrutura qualificada,
          pensada para o dia a dia real dos estudantes. Por isso, cada espaço foi projetado para
          gerar aprendizado, conforto e acolhimento, criando condições ideais para que o
          desenvolvimento aconteça com mais tranquilidade, foco e bem-estar.
        </p>
        <p>
          Uma infraestrutura bem planejada vai além do espaço físico: ela reflete valores como
          organização, cuidado e intencionalidade. Estar bem estruturado é uma forma de cuidado
          e acolhimento — e essa é uma das prioridades do Colégio Totem: acolher e valorizar
          cada estudante.
        </p>
      </div>

      <div class="col-6 infra-text infra-text-secondary">
        <p><strong>Aqui, a estrutura é parte do ensino.</strong></p>
        <p>
          Ela contribui diretamente na construção de uma experiência educacional completa,
          estimulando a autonomia, a curiosidade e o convívio em comunidade em cada canto do
          colégio.
        </p>
      </div>

      <div class="col-12 infra-gallery" v-if="gallery.length">
        <div class="infra-gallery-item" v-for="(photo, i) in gallery" :key="i">
          <img :src="photo" alt="Ambiente do Colégio Totem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  gallery: { type: Array, default: () => [] },
})
</script>

<style scoped>
.section-infra {
  background: var(--surface);
}

.eyebrow {
  margin-bottom: var(--space-4);
  max-width: 720px;
}

.infra-text {
  padding-left: var(--space-4);
  padding-right: var(--space-7);
}

.infra-text-secondary {
    padding-left: var(--space-4);
  padding-right: var(--space-7);
  align-self: end;
}

.infra-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2);

  margin-top: var(--space-4);
}

.infra-gallery-item {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-md);
}

.infra-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

@media (max-width: 1024px) {
  .infra-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .infra-gallery {
    grid-template-columns: 1fr;
  }
}
</style>