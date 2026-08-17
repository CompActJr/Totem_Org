<script lang="ts" setup>

interface Props {
    nivel: string,
    destaque: string,
    descricao: string
}

const props = defineProps<Props>();

</script>

<template>
  <section id="porque_o_totem" class="scroll-mt-24 min-h-128 w-full flex flex-col md:flex-row gap-1 bg-gray-200  responsive-padding">
    <article class="w-full md:w-7/12 lg:w-8/12">
      <div class="flex items-center">
        <h2 class="text-gray-600 font-bold" aria-label="nossas unidades">
          {{ nivel }}
        </h2>
        <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
      </div>

      <h2 class="text-2xl md:whitespace-pre-line text-4xl mt-4 lg:text-6xl mt-8 text-gray-700 font-bold">
        {{ destaque }}
      </h2>

      <p class="mt-4 mr-4 md:mt-8 mr-12">
        {{ descricao }}
      </p>
    </article>

    <div class="w-full md:w-5/12 lg:w=4/12">
      <img class="w-[95%] md:min-h-[90%] w-full object-cover" src="/geral/POR-QUE-O-TOTEM.jpg" alt="Pátio do Colégio Totem visto de cima" />
    </div>
  </section>
</template>