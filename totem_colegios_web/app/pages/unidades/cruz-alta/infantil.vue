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

definePageMeta({
  layout: "unidade"
})

const banners = [
    "/geral/BANNER.jpg",
    "/geral/FACHADA-CRUZ-ALTA.jpg"
]

const repository = useUnidadeRepository();

const unidade: UnidadeType | undefined = repository.getBySlug("cruz-alta")

if (!unidade) {
  throw createError({
    statusCode: 404,
    statusMessage: "Unidade não encontrada",
  })
}

const currentUnit = useCurrentUnit()
currentUnit.value = unidade

//todo filtrar daqueles pelo nivel de ensino
const professores = repository.getProfessores(unidade.id)

</script>

<template>
    <HeroSlider :banners="banners" 
        :titulo="'Infantil'" 
        :subtitle="'Cruz Alta'"
        :link="'/unidades/cruz-alta/infantil/#agende-visita'" />

    <HeroNiveisEnsino :nivel="'Infantil'"
      :destaque="'TODO: destaque'"
      :descricao="'TODO: descricao'" />

    <DiferenciaisNiveisEnsino :nivelId="2"
        :unidadeId="3"/>

    <SecaoProfessores :professores="professores"/>

    <InfraNiveisEnsino :nivelId="2"
      :unidadeId="3" />

    <DepoimentosNiveisEnsino :nivelId="2"
      :unidadeId="3" />

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>
</template>