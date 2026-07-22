<script setup lang="ts">

/**
 * @author Jonas
 * @author Arthur
 */

import { ref } from "vue";
import { reroute } from "vue-router/experimental";
import type { EducationalTypes } from "~/types/educational.types";
import type { UnidadeType } from "~/types/unidade.type";

type Formulario = {
  name: string,
  city: string,
  level: EducationalTypes,
  whatsapp: string,
  email: string,
}

const form = ref<Formulario>({
  name: "",
  city: "",
  level: "Ensino Fundamental I",
  whatsapp: "",
  email: ""
});

//recalcula os niveis de ensino de acordo com a unidade escolhida
const levelsChanged = computed(()=>{
  return props.unidades.find(unidade => form.value.city === unidade.city)?.levels || []
})

//feat arthur implementar submissão e envio para o email da secretaria
const submitForm = () => {

}

interface Props {
  unidades: UnidadeType[]
}

const props = defineProps<Props>();

</script>


<template>
  <section class="scroll-mt-24 relative h-128 md:min-h-256 w-full overflow-hidden"  id="agende-visita">
    <NuxtImg src="/geral/AGENDE-SUA-VISITA.jpg" alt="Quadra do Colégio Totem"
      class="h-full w-full object-cover object-center" loading="lazy" />

    <div class="absolute inset-0 bg-black/50 responsive-padding overflow-y-auto">

      <h2 class="text-white text-2xl md:text-8xl font-black">Agende Sua Visita</h2>
      <h4 class="text-white text-xl md:text-4xl mt-8">Colégio Totem</h4>

      <form action="" method="POST" aria-label="formulario de matrícula" class="mt-8 w-full grid grid-cols-2 gap-8">
        
        <input placeholder="Nome" type="text" id="nome" name="nome" 
          class="p-4 bg-white/80 rounded-full col-span-2" v-model="form.name"/>

        <select id="cidade" name="cidade" v-model="form.city"
          class="p-4 bg-white/80 rounded-full col-span-2 md:col-span-1">
          <option value="">Cidade</option>
          <option v-for="unidade in props.unidades" :value="unidade.city" :key="unidade.id">
            {{ unidade.city }}
          </option>
        </select>

        <select id="ensino" name="ensino" 
          class="p-4 bg-white/80 rounded-full col-span-2 md:col-span-1">
          <option value="">Nível De Ensino</option>
          <option v-for="value in levelsChanged" :value="value" :key="value">
            {{ value }}
          </option>
        </select>

        <input placeholder="Celular: (xx) 9 xxxx-xxxx" type="text" id="celular" name="celular"
          class="p-4 bg-white/80 rounded-full col-span-2 md:col-span-1" required />

        <input placeholder="Email" type="email" id="email" name="email"
          class="p-4 bg-white/80 rounded-full col-span-2 md:col-span-1" required />

        <button type="submit" 
          class="p-2 lg:p-4 rounded-full
            bg-yellow-400 text-lg lg:text-xl font-bold text-gray-600 
              transition-all duration-300 hover:text-white
              hover:scale-105 hover:bg-orange-400 ">
          ENVIAR
        </button>

      </form>

      <div class="flex items-center justify-between w-full gap-8 mt-8">
            <img src="/geral/logo-totem.png" alt="Colégio Totem" class="w-32 md:w-48 lg:w-64"/>
            <p class="text-xl md:text-2xl lg:text-4xl font-extrabold text-yellow-300">
                É MAIS QUE COLÉGIOS:<br />É TOTEM!
            </p>
      </div>

    </div>
  </section>
</template>
