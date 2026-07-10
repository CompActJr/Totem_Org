<template>
  <section class="section-activities" ref="sectionRef">
    <div class="container">
      <p class="eyebrow">ATIVIDADES EXTRACLASSE</p>

      <p class="activities-intro-1">
        Muitas Possibilidades, Muitos Aprendizados e Muita Diversão
      </p>
      <p class="activities-intro-2">
        No Totem, aprender vai além da sala de aula. Nossas atividades
        extraclasse oferecem diversas possibilidades para desenvolver novas
        habilidades, interesses e talentos ao longo do dia. Mais que
        aprendizado, mais que diversão: explore o que mais combina com quem você
        é e descubra novos horizontes.
      </p>

      <div class="activities-grid">
        <div
          class="activity-card"
          v-for="activity in activities"
          :key="activity.name"
        >
          <div class="activity-card-image">
            <img :src="activity.image || activity.icon" :alt="activity.name" />
          </div>
          <div
            class="activity-card-body"
            :ref="(el) => setBodyRef(el, activity.name)"
          >
            <h4>{{ activity.name }}</h4>
            <ul class="activity-details" v-if="activity.details">
              <li v-for="detail in activity.details" :key="detail">
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { activities as defaultActivities } from "@/data/totem.js";

const props = defineProps({
  activities: { type: Array, default: () => defaultActivities },
});

const sectionRef = ref(null);
const bodyRefs = new Map();

function setBodyRef(el, key) {
  if (el) bodyRefs.set(key, el);
  else bodyRefs.delete(key);
}

/**
 * Iguala a altura de TODOS os .activity-card-body (não só os da
 * mesma linha) pela altura do maior. O flex/grid por padrão só
 * estica os itens dentro de uma mesma linha — pra valer pro grid
 * inteiro (com quebras de linha diferentes em cada breakpoint),
 * precisa medir e aplicar via JS mesmo.
 */
function equalizeHeights() {
  const bodies = Array.from(bodyRefs.values());
  if (!bodies.length) return;

  // reseta antes de medir, senão a medida inclui o min-height antigo
  bodies.forEach((el) => {
    el.style.minHeight = "0px";
  });

  const max = Math.max(...bodies.map((el) => el.offsetHeight));

  bodies.forEach((el) => {
    el.style.minHeight = `${max}px`;
  });
}

let resizeTimeout = null;
function onWindowResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(equalizeHeights, 150);
}

onMounted(async () => {
  await nextTick();
  equalizeHeights();
  window.addEventListener("resize", onWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onWindowResize);
  clearTimeout(resizeTimeout);
});

// se a lista de atividades mudar dinamicamente, recalcula
watch(
  () => props.activities,
  async () => {
    bodyRefs.clear();
    await nextTick();
    equalizeHeights();
  },
);
</script>

<style scoped>
.activities-intro-1 {
  margin-top: var(--space-4);
  padding-left: var(--space-4);
  padding-right: var(--space-7);
  line-height: 0.5;
  font-weight: 600;
}

.activities-intro-2 {
  margin-top: var(--space-4);
  padding-left: var(--space-4);
  padding-right: var(--space-7);
}

.activities-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);

  margin-top: var(--space-5);
}

.activity-card {
  flex: 0 0 calc((100% - var(--space-3) * 5) / 6);
  max-width: calc((100% - var(--space-3) * 5) / 6);

  display: flex;
  flex-direction: column;

  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.activity-card-image {
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.activity-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 0;
}

.activity-card-icon {
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--surface);
}

.activity-card-icon img {
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: 0;
}

.activity-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-2);

  background: var(--primary);
  color: var(--white);
  padding: var(--space-3);
}

.activity-card-body h4 {
  color: var(--white);
  margin-bottom: 0;
}

.activity-card-body-light {
  background: var(--gray);
}

.activity-details {
  list-style: none;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

.btn-sm {
  padding: var(--space-1) var(--space-2);
  font-size: 13px;
}

@media (max-width: 1024px) {
  .activity-card {
    flex: 0 0 calc((100% - var(--space-3) * 2) / 3);
    max-width: calc((100% - var(--space-3) * 2) / 3);
  }
}

@media (max-width: 768px) {
  .activity-card {
    flex: 0 0 calc((100% - var(--space-3)) / 2);
    max-width: calc((100% - var(--space-3)) / 2);
  }

  .activity-card-body {
    padding: var(--space-2);
  }
}

@media (max-width: 480px) {
  .activity-card {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
