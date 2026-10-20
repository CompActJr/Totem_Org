<script lang="ts" setup>
import Viewer360 from '~/components/ui/Viewer360.vue';
import { useOrganizations } from '~/composables/api/useOrganizations';

definePageMeta({ layout: 'colegios' })

const route = useRoute()

const slug = computed(() => String(route.params.slug))

const {
  unidade
} =  useOrganizations(slug.value, 'colegios')


</script>

<template>
  <ClientOnly>
    <Viewer360 v-if="unidade" :panoramas="unidade.panoramas" />

    <!--
       <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">
        Carregando unidade...
      </p>
    -->
   

    <p v-else class="responsive-padding py-12 text-red-600">
      Não foi possível carregar esta unidade.
    </p>
  </ClientOnly>
</template>
