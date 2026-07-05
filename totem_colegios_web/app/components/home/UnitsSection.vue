<template>
  <section class="section-units">
    <div class="container">
      <p class="eyebrow">NOSSAS UNIDADES</p>

      <div class="grid units-grid">
        <div class="col-4 unit-card" v-for="unit in unidades" :key="unit.city">
          <div class="unit-card-image">
            <img :src="unit.image" :alt="`Unidade ${unit.city} do Colégio Totem`" />
          </div>
          <div class="unit-card-body">
            <h4>{{ unit.city }}</h4>
            <ul class="unit-levels">
              <li v-for="level in unit.levels" :key="level">{{ level }}</li>
            </ul>
            <a :href="unit.link" class="btn btn-primary btn-sm">SAIBA MAIS &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { unidades as defaultUnidades } from '@/data/totem.js'

defineProps({
  unidades: { type: Array, default: () => defaultUnidades },
})
</script>

<style scoped>
.units-grid {
  margin-top: var(--space-5);
  align-items: center;
  gap: var(--space-5);
}

.unit-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%; 

  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.unit-card-image {
  aspect-ratio: 6 / 5;
  overflow: hidden;
}

.unit-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.unit-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;

  background: var(--primary);
  color: var(--white);
  padding: var(--space-3);
}

.unit-card-body h4 {
  color: var(--white);
}

.unit-levels {
  flex: 1;
  margin-bottom: ;
}

.unit-levels li {
  font-size: 14px;
  line-height: 1.3;
}

.btn-sm {
  padding: var(--space-1) var(--space-2);
  font-size: 13px;
}

@media (max-width: 480px) {
  .unit-card-body {
    padding: var(--space-2);
  }
}
</style>
