<template>
  <div class="news-header" :class="[`news-header-${align}`, `news-header-${size}`]">
    <component :is="size === 'sm' ? 'h3' : 'h2'" class="news-title">
      {{ titleMain }}<br />
      <span class="text-primary">{{ titleAccent }}</span>
    </component>

    <span class="accent-line"></span>

    <p v-if="subtitle" class="news-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  titleMain: { type: String, required: true },
  titleAccent: { type: String, required: true },
  subtitle: { type: String, default: '' },
  size: { type: String, default: 'lg' },
  align: { type: String, default: 'right' },
})
</script>

<style scoped>
.news-header {
  max-width: 560px;
}

.news-header-right {
  margin-left: auto;
}

.news-header-lg {
  margin-bottom: var(--space-6);
}

.news-header-sm {
  margin-top: var(--space-8);
  margin-bottom: var(--space-5);
}

.news-title {
  color: var(--gray);
}

.news-header-sm .news-title {
  font-size: 32px;
  line-height: 40px;
}

.text-primary {
  color: var(--primary);
}

.accent-line {
  display: block;

  width: 56px;
  height: 4px;
  border-radius: 2px;

  background: #F5C400;

  margin: var(--space-2) 0 var(--space-3);
}

.news-subtitle {
  margin-bottom: 0;
}

@media (max-width: 1024px) {
  .news-header-right {
    margin-left: 0;
  }
}
</style>
