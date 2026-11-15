<script lang="ts" setup>
import Viewer360 from '~/components/global/Viewer360.vue';
import { useOrganizations } from '~/composables/api/useOrganizations';
import type { Organization } from '~/types/organizations.types';

definePageMeta({ layout: 'colegios' })

const route = useRoute()

const slug = computed(() => String(route.params.slug))

const { data: unidadeData, pending, error } = await useOrganizations(slug, 'colegios')
const unidade = computed<Organization | undefined>(() => unidadeData.value)

if (!unidade.value) {
  throw createError({ statusCode: 404, statusMessage: 'Unidade não encontrada', fatal: true })
}

</script>

<template>
  <ClientOnly>
    <Viewer360 v-if="unidade" :panoramas="unidade.panoramas" />


    <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">
        Carregando unidade...
    </p>
   

    <p v-else class="responsive-padding py-12 text-red-600">
      Não foi possível carregar esta unidade.
    </p>
  </ClientOnly>
</template>
