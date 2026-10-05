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
        :titulo="'Ensino Médio'" 
        :subtitle="'Cruz Alta'"
        :link="'/unidades/cruz-alta/ensino-medio/#agende-visita'" />

    <HeroNiveisEnsino :nivel="'Ensino Médio'"
      :destaque="'FORMAÇÃO PARA\nGRANDES RESULTADOS'"
      :descricao="'Preparação para ENEM, Vestibulares e Muito Mais\nAmbiente perfeito para aulas dinâmicas e interativas, com segurança e muito aprendizado. Profissionais experientes e gabaritados que desenvolvem competências e habilidades essenciais para os futuros profissionais.\n\nO Material Didático do Sistema SAS, um dos melhores do Brasil, aliado à Plataforma SAS, oferece múltiplas possibilidades de aprendizado, além de ser perfeitamente aliado ao método Totem de ensino. Atendimentos tira-dúvidas realizados diariamente, simulados constantes e mentorias personalizadas preparam os alunos com maestria.\n\nDesenvolvimento Integral e Protagonismo\nClubes de Ciências, Xadrez, Cinema e Literatura expandem horizontes. Escolinhas de Futebol e Vôlei desenvolvem bem-estar e liderança. Projetos de protagonismo estudantil transformam aprendizagem em ação real.\n\nRelações Humanas e Bem-Estar\nSomos uma escola que pensa no ser humano. Sabemos que, junto com a família, o bem-estar do nosso estudante é prioridade. Acolhimento, escuta ativa e suporte emocional caminham lado a lado com a excelência acadêmica. Nesta etapa final, preparamos não apenas para aprovações, mas para uma vida de sucesso, propósito e impacto.'" />


    <DiferenciaisNiveisEnsino :nivelId="5"
        :unidadeId="3"/>

    <SecaoProfessores :unidadeId="3" :nivelId="5"/>

    <InfraNiveisEnsino :nivelId="5"
      :unidadeId="3" />

    <DepoimentosNiveisEnsino :nivelId="5"
      :unidadeId="3" />

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>
</template>