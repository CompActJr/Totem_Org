<template>
  <section class="section-platforms">
    <div class="container">
      <p class="eyebrow">PLATAFORMAS PARCEIRAS</p>

      <div class="platform-block" v-for="(platform, i) in platforms" :key="platform.name">
        <h3>Plataforma {{ i + 1 }}</h3>

        <div class="platform-content">
          <div class="platform-logo">
            <img :src="platform.logo" :alt="platform.name" />
          </div>

          <div class="platform-text">
            <p>{{ platform.description }}</p>
            <a :href="platform.link" class="platform-link">ACESSE: {{ platform.linkLabel }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { platforms as defaultPlatforms } from '@/data/totem.js'

defineProps({
  platforms: { type: Array, default: () => defaultPlatforms },
})
</script>

<style scoped>
.platform-block {
  padding-block: var(--space-5);
  border-bottom: 1px solid rgba(0,0,0,.08);
}

.platform-block:last-child {
  border-bottom: none;
}

.platform-content {
  display: flex;
  gap: var(--space-5);
  align-items: center;
}

.platform-logo {
  width: 160px;
  min-width: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: var(--surface);
}

.platform-logo img {
  border-radius: 0;
  object-fit: contain;
}

.platform-link {
  color: var(--primary);
  font-weight: 600;
  font-size: 14px;
}

@media (max-width: 1024px) {
  .platform-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
