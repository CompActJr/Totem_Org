<template>
  <div class="news-banner">
    <div class="news-banner-left">
      <span class="news-banner-icon">
        <img :src="calendarIcon" alt="" class="icon" />
      </span>

      <div>
        <p class="news-banner-title">Acompanhe nossos eventos</p>
        <p class="news-banner-subtitle">e participe dos próximos momentos!</p>
      </div>
    </div>

    <a href="/eventos" class="btn btn-events">Ver todos os eventos &rarr;</a>
  </div>
</template>

<script setup>
/* Arquivo real em public/images/icons/calendar.svg — sem "public"
   nem "~/" no caminho, porque public/ já é servido na raiz do site. */
const calendarIcon = '/images/icons/calendar.svg'
</script>

<style scoped>
.news-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;

  background: var(--yellow-soft);
  border-radius: var(--radius-xl);

  padding: var(--space-4) var(--space-5);
}

.news-banner-left {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.news-banner-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;

  background: var(--primary);
}

.news-banner-icon img {
  filter: brightness(0) invert(1);
}

.news-banner-title {
  font-weight: 700;
  color: var(--gray);
  margin-bottom: 2px;
}

.news-banner-subtitle {
  font-size: 14px;
  margin-bottom: 0;
}

.btn-events {
  background: var(--primary);
  color: var(--white);

  white-space: nowrap;
}

.btn-events:hover {
  background: var(--primary-dark);
}

@media (max-width: 768px) {
  .news-banner {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-events {
    width: 100%;
  }
}
</style>