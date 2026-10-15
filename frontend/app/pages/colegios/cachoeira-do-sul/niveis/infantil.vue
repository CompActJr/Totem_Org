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
    "/geral/FACHADA-CACHOEIRA.jpg"
]

const repository = useUnidadeRepository();

const unidade: UnidadeType | undefined = repository.getBySlug("cachoeira-do-sul")

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
        :titulo="'Infantil'" 
        :subtitle="'Cachoeira do Sul'"
        :link="'/unidades/cachoeira-do-sul/infantil/#agende-visita'" />

    <HeroNiveisEnsino :nivel="'Infantil'"
      :destaque="'OS PRIMEIROS PASSOS\nSÃO OS MAIS IMPORTANTES'"
      :descricao="'Ambiente amplo, rico em cuidados, segurança, experiências e aprendizagens — planejado para que cada criança se sinta acolhida e segura enquanto descobre o mundo. O projeto de alimentação saudável e balanceada é prioridade máxima.\n\nProfissionais experientes e apaixonados por educar, em constante formação, que estimula as crianças a explorar, experienciar, interagir, brincar, criar hipóteses e enfrentar desafios para desenvolverem novas habilidades.\nCom as atividades que são preparadas de acordo com cada faixa etária, acolhemos as crianças valorizando suas particularidades e potencialidades, proporcionando seu desenvolvimento integral por meio do vínculo afetivo, com olhar pedagógico e cuidadoso.\n\nTrabalhamos em sintonia com os valores de cada família, criando uma rede de apoio real para os pais. Sistema de Ensino J. Piaget, que propicia o protagonismo na construção do próprio conhecimento; jogos, músicas e histórias, motivando nossas crianças a aprender de forma divertida e interativa; Programa Bilíngue Totem; aulas de educação física com profissionais especialistas; atividades extracurriculares diversificadas; e projetos que partem do interesse da criança, transformando a aprendizagem em uma aventura mágica de descoberta e autonomia.'" />

    <DiferenciaisNiveisEnsino :nivelId="2"
        :unidadeId="1"/>

    <SecaoProfessores :unidadeId="1" :nivelId="2"/>

    <InfraNiveisEnsino :nivelId="2"
      :unidadeId="1" />

    <DepoimentosNiveisEnsino :nivelId="2"
      :unidadeId="1" />

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>
</template>