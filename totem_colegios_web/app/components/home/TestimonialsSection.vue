<template>
  <section class="section-testimonials">
    <div class="container testimonials-inner">
      <div class="testimonials-header">
        <p class="eyebrow">RELATOS</p>
        <h2>DE QUEM CONHECE<br />O COLÉGIO TOTEM</h2>
      </div>

      <span class="quote-mark" aria-hidden="true">&rdquo;</span>

      <div class="testimonial-card">
        <img
          :src="current.photo"
          :alt="current.name"
          class="testimonial-photo"
        />
        <div class="testimonial-body">
          <p class="testimonial-text">{{ current.text }}</p>
          <div class="testimonial-author">
            <h4 class="testimonial-name"><strong>{{ current.name }}</strong></h4>
            <p class="testimonial-role">— {{ current.role }}</p>
          </div>
        </div>
      </div>

      <div class="testimonial-dots">
        <span
          v-for="(t, i) in testimonials"
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
import { testimonials as defaultTestimonials } from '@/data/totem.js'

const props = defineProps({
  testimonials: { type: Array, default: () => defaultTestimonials },
})

const active = ref(0)
const current = computed(() => props.testimonials[active.value])
</script>

<style scoped>
.section-testimonials {
  background: var(--yellow-soft);
}

.testimonials-inner {
  position: relative;
}

.testimonials-header {
  margin-bottom: var(--space-5);
}

.quote-mark {
  position: absolute;
  top: 0;
  right: var(--space-4);

  font-size: 240px;
  line-height: 1;
  font-weight: 700;

  color: rgba(255,255,255,.6);

  pointer-events: none;
}

.testimonial-card {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
  min-height: 220px;
  padding-left: var(--space-7);
  padding-right: var(--space-10);
  width: 100%;

  position: relative;
  z-index: 1;
}

.testimonial-photo {
  width: 156px;
  height: 156px;
  min-width: 156px;

  object-fit: cover;
  border-radius: var(--radius-md);
}

.testimonial-text {
  color: var(--text);
  margin-bottom: var(--space-2);
  line-height: 2.0;
}

.testimonial-author {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px;
}

.testimonial-name {
  line-height: 1.2;
  font-weight: 700;
  color: var(--text-light);
  margin: 0;
}

.testimonial-role {
  font-size: 14px;
  color: var(--text-light);
  margin: 0;
}

.testimonial-dots {
  display: flex;
  gap: var(--space-1);
  margin-top: var(--space-4);
}

.testimonial-dots .dot.active {
  background: var(--primary);
}

@media (max-width: 1024px) {
  .quote-mark {
    font-size: 120px;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    flex-direction: column;
  }

  .testimonial-photo {
    width: 72px;
    height: 72px;
    min-width: 72px;
  }

  .quote-mark {
    font-size: 88px;
    right: var(--space-2);
  }
}

@media (max-width: 480px) {
  .quote-mark {
    display: none;
  }

  .testimonial-card {
    gap: var(--space-2);
  }
}
</style>
