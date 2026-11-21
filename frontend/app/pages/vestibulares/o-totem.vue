<script lang="ts" setup>
import Grid from '~/components/ui/cards/Grid.vue';
import SectionLayout from '~/components/ui/SectionLayout.vue';


definePageMeta({
    layout: 'vestibulares',
    title: 'Vestibulares Totem - Educação de Qualidade',
    description: 'O Vestibulares Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
    ogTitle: 'Vestibulares Totem - Educação de Qualidade',
    ogDescription: 'O Vestibulares Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
    ogImage: '/logos/logo-vestibulares.png',
    ogUrl: 'https://vestibulares.totem.com.br/',
    ogType: 'website',
})

</script>

<template>

    <SectionLayout class="bg-white">
        <template #header>
            <IntroSectionHeader>
                O TOTEM
            </IntroSectionHeader>
        </template>
        <template #content>

            <article class="flex">
                <div class="flex-1">
                    <p class="pt-4 md:pt-8 md:leading-10 text-sm md:text-4sm">
                        Nosso principal objetivo é ver o nosso aluno atingindo o seu resultado de ingresso no ensino
                        superior. Com 20 ANOS de atuação no Rio Grande do Sul, somos um curso moderno e o que mais
                        aprova no Estado nos cursos mais concorridos. Vibramos com todas as nossas conquistas e ficamos
                        muito felizes em celebrar diversas aprovações nos cursos de Medicina no Enem, UFRGS e demais
                        vestibulares.
                        Com esse conjunto de características que o Totem é reconhecido pela sua qualidade,
                        profissionalismo, credibilidade e excelente relacionamentos com seus alunos. As milhares de
                        aprovações e conquistas realizadas não poderiam traduzir de melhor forma isso tudo. Aqui no
                        Totem comemoramos a conquista do aluno não apenas por um número, mas pela realização do seu
                        sonho.
                    </p>
                </div>

                <div class="hidden md:flex flex-1 items-center justify-center p-4">
                    <NuxtImg src="/geral/aguia_bg.png" class="w-full h-auto max-h-100 object-contain aguia-zoom"
                        loading="lazy" />
                </div>
            </article>

            <article class="flex flex-wrap justify-around mt-12 gap-4">
                <div class="flex flex-1 flex-col gap-8 p-4 shadow-md rounded-lg">
                    <IntroSectionHeader>
                        NOSSA VISÃO
                    </IntroSectionHeader>
                    <p>
                        Ser reconhecida como a melhor instituição do RS no processo de preparação para as provas do ENEM
                        e Vestibulares.
                    </p>
                </div>

                <div class="flex flex-1 flex-col gap-8 p-4 shadow-md rounded-lg">
                    <IntroSectionHeader>
                        A MISSÃO DO TOTEM
                    </IntroSectionHeader>
                    <p>
                        Promover uma experiência extraordinária para o aluno e para sua família, desde o atendimento
                        inicial até a conclusão de todo o processo de aprovação.
                    </p>
                </div>

            </article>

        </template>
    </SectionLayout>


    <SectionLayout>
        <template #header>
            <IntroSectionHeader>
                As características do Totem:
            </IntroSectionHeader>
        </template>
        <template #content>
            <Grid>
                <div class="p-4 rounded-2xl flex items-center flex-col gap-8">
                    <img src="/geral/totem-icon-acompanhamento-excursoes.png" />
                    <p class="text-center font-medium text-color-gray-700 md:w-1/2">
                        Acompanhamento ao aluno em TODOS os vestibulares do sul do Brasil.
                    </p>
                </div>

                <div class="p-4 rounded-2xl flex items-center flex-col gap-8">
                    <img src="/geral/totem-icon-turmas-reduzidas.png" />
                    <p class="text-center font-medium text-color-gray-700 md:w-1/2">
                        Turmas reduzidas com foco na aprovação em medicina.
                    </p>
                </div>

                <div class="p-4 rounded-2xl flex items-center flex-col gap-8">
                    <img src="/geral/totem-icon-professores.png" />
                    <p class="text-center font-medium text-color-gray-700 md:w-1/2">
                        Professores experientes e treinados para o desafio do Enem, UFRGS e demais vestibulares.
                    </p>
                </div>

                <div class="p-4 rounded-2xl flex items-center flex-col gap-8">
                    <img src="/geral/totem-icon-simulados.png" />
                    <p class="text-center font-medium text-color-gray-700 md:w-1/2">
                        Simulados modelos Enem, UFRGS e demais vestibulares

                    </p>
                </div>

                <div class="p-4 rounded-2xl flex items-center flex-col gap-8">
                    <img src="/geral/totem-icon-gigante-aprovacao.png" />
                    <p class="text-center font-medium text-color-gray-700 md:w-1/2">

                        Curso que mais aprova no Rio Grande do Sul
                    </p>
                </div>

                <div class="p-4 rounded-2xl flex items-center flex-col gap-8">
                    <img src="/geral/totem-icon-turmas.png" />
                    <p class="text-center font-medium text-color-gray-700 md:w-1/2">
                        Turmas modelo extensivo com foco no Enem e UFRGS.
                    </p>
                </div>

            </Grid>

        </template>
    </SectionLayout>

</template>
