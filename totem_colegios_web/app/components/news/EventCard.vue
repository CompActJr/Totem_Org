<template>
  <article class="event-card" :class="{ 'event-card-past': variant === 'past' }">
    <div class="event-card-row" @click="$emit('toggle')">
      <div class="event-media">
        <div class="event-accent"></div>
        <img :src="event.image" :alt="event.title" class="event-image" />
      </div>

      <div class="event-date">
        <span class="event-day">{{ event.day }}</span>
        <span class="event-month">{{ event.month }}</span>
      </div>

      <div class="event-divider"></div>

      <div class="event-main">
        <h4>{{ event.title }}</h4>
        <p class="event-category">{{ event.category }}</p>
      </div>

      <button
        class="event-toggle"
        type="button"
        :aria-expanded="event.expanded"
        aria-label="Expandir detalhes do evento"
      >
        <img
          :src="icons.chevron"
          alt=""
          class="chevron"
          :class="{ 'chevron-open': event.expanded }"
        />
      </button>
    </div>

    <div v-if="event.expanded" class="event-details">
      <p>{{ event.description }}</p>
      <div class="event-meta">
        <span class="event-meta-item">
          <img :src="icons.clock" alt="" class="icon-sm" />
          {{ event.time }}
        </span>
        <span class="event-meta-item">
          <img :src="icons.pin" alt="" class="icon-sm" />
          {{ event.location }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
/* Arquivos reais em public/images/icons/ — tudo dentro de public/
   é servido a partir da raiz do site, por isso o caminho aqui NÃO
   leva "public" nem "~/". */
const icons = {
  chevron: '/images/icons/chevron-right.svg',
  clock: '/images/icons/clock.svg',
  pin: '/images/icons/pin.svg',
}

defineProps({
  event: { type: Object, required: true },
  variant: { type: String, default: 'upcoming' },
})

defineEmits(['toggle'])
</script>

<style scoped>
.event-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);

  overflow: hidden;
}

.event-card-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);

  padding-right: var(--space-4);

  cursor: pointer;
}

.event-media {
  display: flex;
  align-items: stretch;

  height: 104px;
}

.event-accent {
  width: 8px;
  background: var(--primary);
}

.event-card-past .event-accent {
  background: var(--gray);
}

.event-image {
  width: 150px;
  height: 100%;

  object-fit: cover;
  border-radius: 0;
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 64px;

  color: var(--primary);
}

.event-day {
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
}

.event-month {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .04em;
}

.event-divider {
  width: 1px;
  height: 48px;

  background: rgba(0,0,0,.1);
}

.event-main {
  flex: 1;
  min-width: 0;
}

.event-main h4 {
  margin-bottom: var(--space-1);
}

.event-category {
  font-size: 14px;
  margin-bottom: 0;
}

.event-toggle {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  min-width: 40px;

  border: none;
  border-radius: 50%;

  background: var(--primary);

  cursor: pointer;

  transition: .2s;
}

.event-card-past .event-toggle {
  background: var(--gray);
}

.chevron {
  width: 20px;
  height: 20px;

  transition: transform .2s;

  filter: brightness(0) invert(1);
}

.chevron-open {
  transform: rotate(90deg);
}

.event-details {
  padding: 0 var(--space-4) var(--space-4) calc(150px + 8px + var(--space-3));
}

.event-details p {
  margin-bottom: var(--space-3);
}

.event-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);

  padding-top: var(--space-3);
  border-top: 1px solid rgba(0,0,0,.08);
}

.event-meta-item {
  display: flex;
  align-items: center;
  gap: var(--space-1);

  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}

@media (max-width: 1024px) {
  .event-card-row {
    flex-wrap: wrap;
  }

  .event-details {
    padding-left: var(--space-4);
  }
}

@media (max-width: 768px) {
  .event-media {
    height: 88px;
  }

  .event-image {
    width: 96px;
  }

  .event-date {
    min-width: 52px;
  }

  .event-day {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
  .event-card-row {
    padding-right: var(--space-2);
    gap: var(--space-2);
  }

  .event-category {
    font-size: 13px;
  }

  .event-divider {
    display: none;
  }
}
</style>