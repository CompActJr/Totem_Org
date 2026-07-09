<template>
  <div class="event-list">
    <EventCard
      v-for="(event, i) in events"
      :key="i"
      :event="event"
      :variant="variant"
      @toggle="$emit('toggle', i)"
    />
  </div>
</template>

<script setup>
import EventCard from '@/components/news/EventCard.vue'

defineProps({
  events: { type: Array, required: true },
  variant: { type: String, default: 'upcoming' },
})

defineEmits(['toggle'])
</script>

<style scoped>
.event-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);

  margin-bottom: var(--space-6);
}
</style>
