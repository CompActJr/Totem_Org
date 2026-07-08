<template>
  <section id="contato" class="section-contact">
    <div class="container grid">
      <div class="col-6 contact-info">
        <p class="eyebrow">ENTRE EM CONTATO</p>
        <h2>{{ unidade.city }}</h2>

        <p>{{ unidade.address }}</p>
        <p>Telefone: {{ unidade.phone }}</p>
        <p>WhatsApp: {{ unidade.whatsapp }}</p>
        <a :href="`mailto:${unidade.email}`">{{ unidade.email }}</a>
      </div>

      <div class="col-6 contact-map">
        <iframe
          :src="unidade.mapEmbed"
          width="100%"
          height="100%"
          style="border:0"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          :title="`Mapa - Colégio Totem ${unidade.city}`"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  unidade: { type: Object, required: true },
})
</script>

<style scoped>
.section-contact {
  background: var(--surface);
}

.contact-info {
  align-self: center;
}

.contact-info a {
  color: var(--primary);
  font-weight: 600;
}

.contact-map {
  min-height: 360px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
</style>
