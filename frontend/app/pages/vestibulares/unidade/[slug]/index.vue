<script setup lang="ts">
import { useOrganizations } from '~/composables/api/useOrganizations';

definePageMeta({ layout: 'vestibulares' })

const route = useRoute()

const slug = computed(() => String(route.params.slug))

const {
  data: unidade,
  pending,
  error,
  refresh,
} = await useOrganizations(slug.value, 'vestibulares')


useSeoMeta({
  title: () =>
    unidade.value
      ? `Vestibulares Totem em ${unidade.value.city} | Educação`
      : 'Vestibulares Totem',

  description: () =>
    unidade.value
      ? `Conheça o Vestibulares Totem em ${unidade.value.city}, sua estrutura e níveis de ensino.`
      : 'Conheça as unidades dos Vestibulares Totem.',

  ogTitle: () =>
    `Vestibulares Totem${unidade.value ? ` em ${unidade.value.city}` : ''}`,

  ogDescription: () =>
    unidade.value
      ? `Conheça a unidade Totem em ${unidade.value.city}.`
      : 'Conheça nossos pŕe vestibulares.',

  ogType: 'website',
  robots: 'index, follow',
});

</script>


<template>

</template>
