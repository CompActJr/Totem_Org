<template>
  <section class="section-results">
    <div class="container">
      <p class="eyebrow">RESULTADOS INCRÍVEIS</p>
      <h2>AJUDANDO A REALIZAR SONHOS</h2>

      <div class="results-carousel">
        <button class="carousel-arrow carousel-arrow-prev" @click="prev" aria-label="Anterior">&larr;</button>

        <div class="results-track">
          <div class="result-card" v-for="(result, i) in visibleResults" :key="result.title + i">
            <img :src="result.image" :alt="result.title" />
            <div class="result-card-overlay">
              <p class="result-card-title">{{ result.title }}</p>
              <p class="result-card-subtitle">{{ result.subtitle }}</p>
            </div>
          </div>
        </div>

        <button class="carousel-arrow carousel-arrow-next" @click="next" aria-label="Próximo">&rarr;</button>
      </div>

      <div class="results-dots">
        <span
          v-for="(r, i) in results"
          :key="i"
          class="dot"
          :class="{ active: i === active }"
          @click="active = i"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { results as defaultResults } from '@/data/totem.js'

const props = defineProps({
  results: { type: Array, default: () => defaultResults },
})

const active = ref(0)

const visibleResults = computed(() => {
  return [props.results[active.value]]
})

function prev() {
  active.value = (active.value - 1 + props.results.length) % props.results.length
}
function next() {
  active.value = (active.value + 1) % props.results.length
}
</script>

<style scoped>
.section-results {
  background: var(--gray);
  color: var(--white);
}

.section-results h2 {
  color: var(--white);
}

.results-carousel {
  display: flex;
  align-items: center;
  gap: var(--space-3);

  margin-top: var(--space-5);
}

.results-track {
  flex: 1;

  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
}

.result-card {
  position: relative;


  overflow: hidden;
  border-radius: var(--radius-lg);
}

.result-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.result-card-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: var(--space-3);

  background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,.75) 100%);
}

.result-card-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: var(--space-1);
}

.result-card-subtitle {
  font-size: 14px;
  color: var(--primary-light);
  margin-bottom: 0;
}

.carousel-arrow {
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255,255,255,.3);
  border-radius: 50%;
  background: transparent;
  color: var(--white);

  font-size: 20px;
  cursor: pointer;

  transition: .2s;
}

.carousel-arrow:hover {
  background: var(--primary);
  border-color: var(--primary);
}

.results-dots {
  display: flex;
  gap: var(--space-1);
  justify-content: center;
  margin-top: var(--space-4);
}

.results-dots .dot {
  background: rgba(255,255,255,.3);
}

.results-dots .dot.active {
  background: var(--primary);
}

@media (max-width: 1024px) {
  .results-track {
    grid-template-columns: 1fr;
  }
}
</style>
