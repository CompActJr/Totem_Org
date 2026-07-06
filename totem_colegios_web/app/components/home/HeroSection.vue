<template>
  <section class="hero">
    <img
      src="/assets/imagens/BANNER.jpg"
      alt="Crianças do Colégio Totem brincando"
      class="hero-bg"
    />
    <div class="hero-overlay"></div>

    <div class="container hero-content-wrap">
      <div class="hero-content">
        <h1>Matrículas Abertas</h1>
        <p class="hero-subtitle">Colégio Totem</p>
        <a href="#agende" class="btn btn-primary">AGENDE SUA VISITA</a>
      </div>
    </div>

    <div class="hero-dots">
      <span
        v-for="(dot, i) in slideCount"
        :key="i"
        class="dot dot-on-dark"
        :class="{ active: i === activeSlide }"
        @click="activeSlide = i"
      ></span>
    </div>

    <WhatsappButton
      :whatsapp="unidadeContato.whatsapp"
      :message="`Olá! Gostaria de saber mais sobre o Colégio Totem - ${unidadeContato.city}.`"
    />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import WhatsappButton from '@/components/layout/WhatsappButton.vue'
import { unidades } from '@/data/totem.js'

const props = defineProps({
  slideCount: { type: Number, default: 3 },
  autoplayMs: { type: Number, default: 6000 },
  // unidade usada no botão de WhatsApp flutuante do hero
  unidadeContato: { type: Object, default: () => unidades[0] },
})

const activeSlide = ref(0)
let heroInterval = null

onMounted(() => {
  heroInterval = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % props.slideCount
  }, props.autoplayMs)
})
onBeforeUnmount(() => clearInterval(heroInterval))
</script>

<style scoped>
.hero {
  position: relative;

  min-height: 100vh;

  padding: 0;

  display: block;

  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(180deg, var(--overlay-light) 0%, var(--overlay-dark) 100%);
}

.hero-content-wrap {
  position: relative;

  height: 100vh;

  display: flex;
  align-items: flex-end;

  padding-bottom: var(--space-8);

  text-align: left;
}

.hero-content h1 {
  color: var(--white);
  margin-bottom: var(--space-1);
  text-align: left;
}

.hero-subtitle {
  color: var(--white);
  font-size: 20px;
  margin-bottom: var(--space-4);
  text-align: left;
}

.hero-dots {
  position: absolute;
  bottom: var(--space-4);
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: var(--space-1);
}

@media (max-width: 480px) {
  .hero-content-wrap {
    padding-bottom: var(--space-7);
  }
}
</style>
