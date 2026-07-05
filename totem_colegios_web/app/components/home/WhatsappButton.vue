<template>
  <a class="whatsapp-btn" :href="link" target="_blank" rel="noopener">
    <svg class="icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.8C13.4 27.7 14.7 28 16 28c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-1.2 0-2.4-.3-3.5-.8l-.3-.1-4.6 1.1 1.1-4.4-.2-.3C7.5 19 7 17 7 15c0-5 4-9 9-9s9 4 9 9-4 9-9 9z"/>
    </svg>
    <span class="whatsapp-label">{{ label }}</span>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { buildWhatsappLink } from '@/data/totem.js'

const props = defineProps({
  whatsapp: { type: String, required: true }, // ex.: "55 9 9088-3334"
  message: { type: String, default: 'Olá! Gostaria de saber mais sobre o Colégio Totem.' },
  label: { type: String, default: 'Mande um Whats' },
})

const link = computed(() => buildWhatsappLink(props.whatsapp, props.message))
</script>

<style scoped>
.whatsapp-btn {
  position: absolute;
  right: 96px;
  bottom: 48px;

  display: flex;
  align-items: center;
  gap: var(--space-1);

  background: var(--whatsapp-green);
  color: var(--white);

  padding: var(--space-2);
  border-radius: 50px;

  box-shadow: var(--shadow-md);
}

.whatsapp-btn .icon {
  width: 32px;
  height: 32px;

  flex-shrink: 0;
}

.whatsapp-label {
  font-size: 13px;
  font-weight: 600;
  max-width: 70px;
  line-height: 1.2;
}

@media (max-width: 480px) {
  .whatsapp-btn {
    right: 12px;
    bottom: 20px;

    padding: 12px;
    border-radius: 50%;
  }

  .whatsapp-label {
    display: none;
  }

  .whatsapp-btn .icon {
    width: 24px;
    height: 24px;
  }
}
</style>
