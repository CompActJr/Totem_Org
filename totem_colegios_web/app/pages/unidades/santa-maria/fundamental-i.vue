<script setup lang="ts">
import HeroSlider from '~/components/HeroSlider.vue';
import AgendeSuaVisita from '~/components/home/AgendeSuaVisita.vue';
import EntreEmContato from '~/components/unidade/EntreEmContato.vue';
import SecaoProfessores from '~/components/unidade/SecaoProfessores.vue';
import WhatsappButton from '~/components/WhatsappButton.vue';
import HeroNiveisEnsino from '~/components/unidade/niveis/HeroNiveisEnsino.vue';
import DiferenciaisNiveisEnsino from '~/components/unidade/niveis/DiferenciaisNiveisEnsino.vue';
import InfraNiveisEnsino from '~/components/unidade/niveis/InfraNiveisEnsino.vue';
import DepoimentosNiveisEnsino from '~/components/unidade/niveis/DepoimentosNiveisEnsino.vue';
import type { UnidadeType } from '~/types/unidade.type';

/**
 * @authors Jonas, Arthur, A.Pão
 */
const repository = useUnidadeRepository();

definePageMeta({
  layout: "unidade"
})

const banners = [
    "/geral/BANNER.jpg",
    "/geral/FACHADA-SANTA-MARIA.jpg"
]

const unidade: UnidadeType | undefined = repository.getBySlug("santa-maria")

if (!unidade) {
  throw createError({
    statusCode: 404,
    statusMessage: "Unidade não encontrada",
  })
}

const currentUnit = useCurrentUnit()
currentUnit.value = unidade

</script>

<template>
    <HeroSlider :banners="banners" 
        :titulo="'Fundamental I'" 
        :subtitle="'Santa Maria'"
        :link="'/unidades/santa-maria/fundamental-i/#agende-visita'" />

    <HeroNiveisEnsino :nivel="'Fundamental I'"
      :destaque="'TODO: destaque'"
      :descricao="'TODO: descricao'" />

    <DiferenciaisNiveisEnsino :nivelId="3"
        :unidadeId="2"/>

    <SecaoProfessores :unidadeId="2" :nivelId="3"/>

    <InfraNiveisEnsino :nivelId="3"
      :unidadeId="2" />

    <DepoimentosNiveisEnsino :nivelId="3"
      :unidadeId="2" />

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>
</template>