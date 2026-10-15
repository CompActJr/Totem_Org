<script lang="ts" setup>
import Viewer360 from '~/components/ui/Viewer360.vue';
import type { Organization } from '~/types/organizations.types';

const unidade: Organization;

</script>

<template>
  <ClientOnly>
    <Viewer360 :panoramas="unidade.panoramas"/>
  </ClientOnly>
</template>