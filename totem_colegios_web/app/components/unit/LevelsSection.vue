<template>
  <section class="section-levels">
    <div class="container">
      <p class="eyebrow eyebrow-center">NÍVEIS DE ENSINO</p>

      <div class="levels-grid">
        <div class="level-card" v-for="level in levels" :key="level.name">
          <div class="level-card-image">
            <img :src="level.image" :alt="level.name" />
          </div>
          <div class="level-card-body">
            <h4>{{ level.name }}</h4>
            <a :href="level.link" class="btn btn-primary btn-sm">SAIBA MAIS &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { educationLevelsInfo } from '@/data/totem.js'

defineProps({
  levels: { type: Array, default: () => educationLevelsInfo },
})
</script>

<style scoped>
.section-levels {
  text-align: center;
}

.eyebrow-center {
  justify-content: center;
  width: 100%;
}

/* Flex em vez de grid de 12 colunas: 6 cards por linha (equivalente
   ao antigo col-2), e qualquer linha incompleta (a última, quando o
   total não é múltiplo de 6) centraliza automaticamente como grupo —
   não card a card. */
.levels-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);

  margin-top: var(--space-5);
}

.level-card {
  /* largura de 1/6 da linha, descontando os 5 gaps entre 6 cards */
  flex: 0 0 calc((100% - var(--space-3) * 5) / 6);
  max-width: calc((100% - var(--space-3) * 5) / 6);

  display: flex;
  flex-direction: column;

  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);

  text-align: left;
}

.level-card-image {
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.level-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 0;
}

.level-card-body {
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  background: var(--primary);
  color: var(--white);
  padding: var(--space-3);
}

.level-card-body h4 {
  color: var(--white);
  margin-bottom: 0;
}

.level-card-body .btn-sm {
  margin-top: auto;
}

.btn-sm {
  padding: var(--space-1) var(--space-2);
  font-size: 13px;
}

@media (max-width: 1024px) {
  .level-card {
    flex: 0 0 calc((100% - var(--space-3) * 2) / 3); /* 3 por linha */
    max-width: calc((100% - var(--space-3) * 2) / 3);
  }
}

@media (max-width: 768px) {
  .level-card {
    flex: 0 0 calc((100% - var(--space-3)) / 2); /* 2 por linha */
    max-width: calc((100% - var(--space-3)) / 2);
  }

  .level-card-body {
    padding: var(--space-2);
  }
}

@media (max-width: 480px) {
  .level-card {
    flex: 0 0 100%; /* 1 por linha */
    max-width: 100%;
  }
}
</style>