<template>
  <section class="section-news">
    <div class="container">
      <p class="eyebrow">NOVIDADES</p>

      <div class="news-carousel">
        <div class="news-card">
          <img :src="current.image" :alt="current.title" class="news-card-image" />
          <div class="news-card-body">
            <h3>{{ current.title }}</h3>
            <p class="news-card-date">{{ current.date }}</p>
            <p class="news-card-excerpt">{{ current.excerpt }}</p>
            <a :href="current.link" class="btn btn-outline btn-sm">LEIA MAIS &rarr;</a>
          </div>
        </div>

        <div class="news-nav">
          <button class="carousel-arrow" @click="prev" aria-label="Anterior">&larr;</button>
          <div class="news-dots">
            <span
              v-for="(n, i) in news"
              :key="i"
              class="dot"
              :class="{ active: i === active }"
              @click="active = i"
            ></span>
          </div>
          <button class="carousel-arrow" @click="next" aria-label="Próximo">&rarr;</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { news as defaultNews } from '@/data/totem.js'

const props = defineProps({
  news: { type: Array, default: () => defaultNews },
})

const active = ref(0)
const current = computed(() => props.news[active.value])

function prev() {
  active.value = (active.value - 1 + props.news.length) % props.news.length
}
function next() {
  active.value = (active.value + 1) % props.news.length
}
</script>

<style scoped>
.news-carousel {
  margin-top: var(--space-5);
}

.news-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  align-items: center;

  background: var(--surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.news-card-image {
  height: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 0;
}

.news-card-body {
  padding: var(--space-4);
}

.news-card-date {
  font-size: 13px;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.news-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);

  margin-top: var(--space-4);
}

.news-dots {
  display: flex;
  gap: var(--space-1);
}

.news-nav .carousel-arrow {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0,0,0,.2);
  border-radius: 50%;
  background: transparent;
  color: var(--text);

  font-size: 20px;
  cursor: pointer;

  transition: .2s;
}

.news-nav .carousel-arrow:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}

.btn-sm {
  padding: var(--space-1) var(--space-2);
  font-size: 13px;
}

@media (max-width: 1024px) {
  .news-card {
    grid-template-columns: 1fr;
  }

  .news-card-image {
    aspect-ratio: 16 / 9;
  }
}
</style>
