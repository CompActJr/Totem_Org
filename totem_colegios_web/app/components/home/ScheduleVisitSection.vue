<template>
  <section id="agende" class="section-cta">
    <img
      src="/images/geral/AGENDE-SUA-VISITA.jpg"
      alt="Quadra do Colégio Totem"
      class="cta-bg"
    />
    <div class="cta-overlay"></div>

    <div class="container cta-inner">
      <h1>Agende sua Visita</h1>
      <h2 class="cta-subtitle">Colégio Totem</h2>

      <form class="cta-form" @submit.prevent="submitForm">
        <input
          type="text"
          v-model="form.name"
          placeholder="Nome"
          class="full-width"
          required
        />

        <select v-model="form.city" required>
          <option value="" disabled selected>Cidade</option>
          <option v-for="unit in unidades" :key="unit.city" :value="unit.city">
            {{ unit.city }}
          </option>
        </select>

        <select v-model="form.level" required>
          <option value="" disabled selected>Nível de Ensino</option>
          <option v-for="level in educationLevels" :key="level" :value="level">
            {{ level }}
          </option>
        </select>

        <input
          type="tel"
          v-model="form.whatsapp"
          placeholder="WhatsApp"
          required
        />
        <input
          type="email"
          v-model="form.email"
          placeholder="E-mail"
          required
        />

        <button type="submit" class="btn btn-primary full-width">ENVIAR</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { unidades, educationLevels } from "@/data/totem.js";

const emit = defineEmits(["submitted"]);

const form = ref({
  name: "",
  city: "",
  level: "",
  whatsapp: "",
  email: "",
});

function submitForm() {
  // TODO: integrar com endpoint / CRM real
  emit("submitted", { ...form.value });
  alert("Recebemos seus dados! Em breve entraremos em contato.");
  form.value = { name: "", city: "", level: "", whatsapp: "", email: "" };
}
</script>

<style scoped>
.section-cta {
  position: relative;

  padding: var(--space-8) 0;

  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 0;
}

.cta-overlay {
  position: absolute;
  inset: 0;

  background: var(--overlay-cta);
}

.cta-inner {
  position: relative;
  z-index: 1;

  max-width: 640px;
}

.cta-inner h1 {
  color: var(--white);
  text-align: center;
}

.cta-subtitle {
  color: var(--white);
  margin-bottom: var(--space-5);
  font-weight: 400;
  margin-top: -24px;
  text-align: center;
}

.cta-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
}

.cta-form .full-width {
  grid-column: 1 / -1;
}

@media (max-width: 1024px) {
  .cta-form {
    grid-template-columns: 1fr;
  }
}
</style>
