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
        :titulo="'Fundamental I'" 
        :subtitle="'Cruz Alta'"
        :link="'/unidades/cruz-alta/fundamental-i/#agende-visita'" />

    <HeroNiveisEnsino :nivel="'Fundamental I'"
      :destaque="'MUITO MAIS DO QUE\nALFABETIZAÇÃO'"
      :descricao="'Ambiente amplo e diversificado, rico em cuidados, segurança, experiências e aprendizagens, planejado para atender às necessidades e desenvolver a autonomia das crianças.\n\nAlém de profissionais altamente qualificados, oferecemos material didático do Sistema de Ensino J. Piaget, com plataforma digital com mais de 230 conteúdos disponibilizados por meio de jogos e videoaulas, Programa Bilíngue Totem, atividades práticas nos espaços da escola, projetos que partem do interesse do estudante, Laboratório de Aprendizagem, atividades extracurriculares, projetos socioemocionais, viagens de estudo, entre outros.\n\nAs Três Alfabetizações: Letramento, Alfabetização Tecnológica e Matemática — nosso diferencial que prepara crianças para o mundo real, desenvolvendo habilidades essenciais para o futuro. No Totem, as crianças vivem uma transformação no processo de aprendizagem. Nosso trabalho desperta o interesse e a curiosidade, tornando a alfabetização prazerosa. O estudante investiga, elabora e testa hipóteses, formula e resolve problemas, com atitudes e valores para o crescimento próprio e coletivo. Raciocínio lógico, criatividade, pensamento crítico e digital, cooperatividade, habilidades motoras e jogos são ferramentas sempre presentes, com a segurança de que continuam sendo cuidados com atenção e carinho.'" />


    <DiferenciaisNiveisEnsino :nivelId="3"
        :unidadeId="3"/>

    <SecaoProfessores :unidadeId="3" :nivelId="3"/>

    <InfraNiveisEnsino :nivelId="3"
      :unidadeId="3" />

    <DepoimentosNiveisEnsino :nivelId="3"
      :unidadeId="3" />

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>
</template>