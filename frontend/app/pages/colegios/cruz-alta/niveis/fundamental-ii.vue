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

</script>

<template>
    <HeroSlider :banners="banners" 
        :titulo="'Fundamental II'" 
        :subtitle="'Cruz Alta'"
        :link="'/unidades/cruz-alta/fundamental-ii/#agende-visita'" />

    <HeroNiveisEnsino :nivel="'Fundamental II'"
      :destaque="'HORA DE DECOLAR'"
      :descricao="'Ambiente rico em cuidados, segurança e aprendizagens. Profissionais experientes para consolidar as habilidades já trabalhadas e oportunizar novas vivências, ampliando a visão de mundo e futuro de cada estudante.\n\nA Importância do Ensino Fundamental II\nFase essencial para consolidar os conhecimentos do Fundamental I e buscar novos, com apoio pedagógico e emocional que naturalizam a transição para o Ensino Médio.\nCom foco na autonomia, nos hábitos de estudo e no desenvolvimento cidadão, o Totem investe no sucesso dos nossos estudantes valorizando cada vez mais a parceria entre os jovens, a família e a escola, consolidando saberes e desenvolvendo práticas escolares que transformam vidas.\n\nDiferenciais que preparam para o futuro\nEducação Financeira e Empreendedorismo conectam a escola com o mundo real, desenvolvendo pensamento crítico e prático. Sistema de Ensino J. Piaget, Programa Bilíngue Totem, produção textual, Cooperativa Escolar, Laboratórios de Português e Matemática, suporte e incentivo ao esporte, Projeto Socioemocional e muitos outros trabalham juntos para formar cidadãos conscientes e preparados para os desafios da vida.'" />

    <DiferenciaisNiveisEnsino :nivelId="4"
        :unidadeId="3"/>

    <SecaoProfessores :unidadeId="3" :nivelId="4"/>

    <InfraNiveisEnsino :nivelId="4"
      :unidadeId="3" />

    <DepoimentosNiveisEnsino :nivelId="4"
      :unidadeId="3" />

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>
</template>