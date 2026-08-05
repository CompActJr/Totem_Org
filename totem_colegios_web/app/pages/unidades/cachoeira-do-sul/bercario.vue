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

//todo filtrar daqueles pelo nivel de ensino
const professores = repository.getProfessores(unidade.id)

</script>

<template>
    <HeroSlider :banners="banners" 
        :titulo="'Berçário'" 
        :subtitle="'Cachoeira do Sul'"
        :link="'/unidades/cachoeira-do-sul/bercario/#agende-visita'" />

    <HeroNiveisEnsino :nivel="'Berçário'"
      :destaque="'MUITO MAIS\nGUTI GUTI...'"
      :descricao="'Os primeiros anos de vida de um bebê são intensos e cheios de descobertas — e entendemos que escolher a escola é uma decisão importante para toda a família. No Colégio Totem, o Berçário 1 e 2 funciona como uma extensão do lar: um ambiente seguro, acolhedor e preparado para cuidar, estimular e respeitar o tempo de cada criança. Nessa fase, a convivência com outros pequenos, os estímulos adequados, a rotina organizada e o acompanhamento de profissionais qualificados impulsionam o desenvolvimento emocional, cognitivo e motor. A escola também fortalece autonomia, socialização e vínculos, sempre com carinho e intencionalidade pedagógica.Escolher o berçário é oferecer ao seu filho um espaço onde será cuidado, estimulado e amado — um ambiente rico em experiências desde os primeiros passos. No Totem, cada detalhe é pensado para sua tranquilidade e para um começo de vida cheio de afeto, aprendizado e desenvolvimento.'" />

    <DiferenciaisNiveisEnsino :nivelId="1"
        :unidadeId="1"/>

    <SecaoProfessores :professores="professores"/>

    <InfraNiveisEnsino :nivelId="1"
      :unidadeId="1" />

    <DepoimentosNiveisEnsino :nivelId="1"
      :unidadeId="1" />

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>
</template>