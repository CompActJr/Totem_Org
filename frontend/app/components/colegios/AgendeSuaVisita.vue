<script setup lang="ts">

/**
 * @author Jonas
 * @author Arthur
 */

import { computed, ref } from "vue";
import { useEmail } from "~/composables/api/useEmail";
import type { EducationalTypes, Organization } from "~/types/organizations.types";

const form = ref<{
  name: string,
  city: string,
  level: EducationalTypes,
  whatsapp: string,
  email: string,
}>({
  name: "",
  city: "",
  level: "Ensino Fundamental I",
  whatsapp: "",
  email: ""
});

const props = defineProps<{
   unidades: Organization[]
}>();

const { enviarAgendamento } = useEmail();
const isSubmitting = ref(false);
const submitMessage = ref("");
const submitError = ref("");

const levelsChanged = computed(()=>{
  return props.unidades
  .filter(unidade => unidade["@type"] === 'colegios')
  .find(unidade => form.value.city === unidade.city)?.levels || []
})

const submitForm = async () => {
  submitMessage.value = "";
  submitError.value = "";
  isSubmitting.value = true;

  try {
    await enviarAgendamento({
      nome: form.value.name,
      cidade: form.value.city,
      nivel: form.value.level,
      whatsapp: form.value.whatsapp,
      email: form.value.email,
    });

    submitMessage.value = "Recebemos seu agendamento. Em breve, nossa equipe entrará em contato.";
    form.value = {
      name: "",
      city: "",
      level: "Ensino Fundamental I",
      whatsapp: "",
      email: "",
    };
  } catch {
    submitError.value = "Não foi possível enviar seu agendamento. Tente novamente.";
  } finally {
    isSubmitting.value = false;
  }
}

</script>


<template>
  <section class="scroll-mt-24 relative h-128 md:min-h-256 w-full overflow-hidden"  id="agende-visita">
    <NuxtImg src="/geral/AGENDE-SUA-VISITA.jpg" alt="Quadra do Colégio Totem"
      class="h-full w-full object-cover object-center" loading="lazy" />

    <div class="absolute inset-0 bg-black/50 responsive-padding overflow-y-auto">

      <h2 class="text-white text-2xl md:text-8xl font-black">Agende Sua Visita</h2>
      <h4 class="text-white text-xl md:text-4xl mt-8">Colégio Totem</h4>

      <form @submit.prevent="submitForm" aria-label="formulário de agendamento de visita" class="mt-8 w-full grid grid-cols-2 gap-8">
        
        <input placeholder="Nome" type="text" id="nome" name="nome" 
          class="p-4 bg-white/80 rounded-full col-span-2" v-model="form.name" required />

        <select id="cidade" name="cidade" v-model="form.city" required
          class="p-4 bg-white/80 rounded-full col-span-2 md:col-span-1">
          <option value="">Cidade</option>
          <option v-for="unidade in props.unidades" :value="unidade.city" :key="unidade._id">
            {{ unidade.city }}
          </option>
        </select>

        <select id="ensino" name="ensino" v-model="form.level" required
          class="p-4 bg-white/80 rounded-full col-span-2 md:col-span-1">
          <option value="">Nível De Ensino</option>
          <option v-for="value in levelsChanged" :value="value" :key="value">
            {{ value }}
          </option>
        </select>

        <input placeholder="Celular: (xx) 9 xxxx-xxxx" type="text" id="celular" name="celular"
          class="p-4 bg-white/80 rounded-full col-span-2 md:col-span-1" v-model="form.whatsapp" required />

        <input placeholder="Email" type="email" id="email" name="email"
          class="p-4 bg-white/80 rounded-full col-span-2 md:col-span-1" v-model="form.email" required />

        <button type="submit" :disabled="isSubmitting"
          class="p-2 lg:p-4 rounded-full
            bg-yellow-400 text-lg lg:text-xl font-bold text-gray-600 
              transition-all duration-300 hover:text-white
              hover:scale-105 hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60">
          {{ isSubmitting ? "ENVIANDO..." : "ENVIAR" }}
        </button>

        <p v-if="submitMessage" role="status" class="text-white col-span-2">{{ submitMessage }}</p>
        <p v-if="submitError" role="alert" class="text-red-200 col-span-2">{{ submitError }}</p>

      </form>

      <div class="flex items-center justify-between w-full gap-8 mt-8">
            <img src="/logos/logo-colegios.png" alt="Colégio Totem" class="w-32 md:w-48 lg:w-64"/>
            <p class="text-xl md:text-2xl lg:text-4xl font-extrabold text-yellow-300">
                É MAIS QUE COLÉGIO:<br />É TOTEM!
            </p>
      </div>

    </div>
  </section>
</template>
