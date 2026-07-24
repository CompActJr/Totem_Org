<script lang="ts" setup>
import Viewer360 from '~/components/Viewer360.vue';

const panoramas = [
  {
    id: 'hall',
    name: 'Hall de entrada',
    panorama: '/panoramas/cruz_alta/hall.webp'
  },
  {
    id: 'biblioteca',
    name: 'Biblioteca',
    panorama: '/panoramas/cruz_alta/hall.webp'
  },
  {
    id: 'laboratorio',
    name: 'Laboratório',
    panorama: '/panoramas/cruz_alta/hall.webp'
  }
]

</script>

<template>
  <ClientOnly>
    <Viewer360 :panoramas="panoramas"/>
  </ClientOnly>
</template>