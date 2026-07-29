<script lang="ts" setup>
import Viewer360 from '~/components/Viewer360.vue';

const panoramas = [
  {
    id: 'hall',
    name: 'Hall de entrada',
    panorama: '/panoramas/cachoeira_do_sul/c_sala1.jpeg'
  },
  {
    id: 'biblioteca',
    name: 'Biblioteca',
    panorama: '/panoramas/cachoeira_do_sul/c_refeitorio.jpeg'
  }
]

</script>

<template>
  <ClientOnly>
    <Viewer360 :panoramas="panoramas"/>
  </ClientOnly>
</template>