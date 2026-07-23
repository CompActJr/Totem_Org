<script lang="ts" setup>
import SecaoDiferenciais from '~/components/unidade/SecaoDiferenciais.vue';
import type { DiferencialType } from '~/types/diferenciais.types';
import type { UnidadeType } from '~/types/unidade.type';


const repository = useUnidadeRepository();

const unidade: UnidadeType | undefined = repository.getBySlug("cachoeira-do-sul")

if (!unidade) {
  throw createError({
    statusCode: 404,
    statusMessage: "Unidade não encontrada",
  })
}

const diferenciais: DiferencialType[] = repository.getDiferenciais(unidade.id);

</script>

<template>
     
    <SecaoDiferenciais :diferenciais="diferenciais"/>
    
</template>