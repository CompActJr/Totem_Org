<script lang="ts" setup>
import LinkExterno from '~/components/LinkExterno.vue';

</script>

<template>
    <section class="min-h-128 w-full flex flex-col  gap-4 bg-white responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                PLATAFORMAS PARCEIRAS
            </h2>

            <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
        </div>

        <h2 class="text-gray-600 text-2xl md:text-6xl font-bold mt-8">PLURALL</h2>

        <article class="flex flex-col md:flex-row items-center gap-8"> 
            <div class=" max-w-xs sm:max-w-sm md:max-w-md aspect-square shrink-0">
                <NuxtImg src="/apoiadores/PLURALL.jpg" alt="Plurall"
                    class="h-full w-full rounded-2xl object-cover shadow-lg" loading="lazy" format="webp" />
            </div>

            
            <div class="flex flex-1 flex-col">

                <p class="leading-8 text-gray-700">
                    O Plurall reúne todo o conteúdo digital das editoras e sistemas de ensino
                    da SOMOS Educação e conecta alunos, professores, gestores escolares e
                    responsáveis em um ambiente virtual de aprendizagem completo, seguro e
                    moderno.
                </p>

                <ul class="mt-6 space-y-2 font-bold text-gray-700">
                    <li>• Conteúdo didático de excelência</li>
                    <li>• Gestão pedagógica otimizada</li>
                    <li>• Soluções educacionais inovadoras</li>
                    <li>• Ensino personalizado e motivador</li>
                    <li>• Plataforma moderna e atualizada</li>
                    <li>• Aprendizagem significativa</li>
                </ul>

                <LinkExterno :external-link="'https://plurall.net/'"/>

            </div>
        </article>

        <h2 class="text-gray-600 text-2xl md:text-6xl font-bold mt-8">SAS EDUCAÇÃO</h2>

        <article class="flex flex-col md:flex-row items-center gap-8"> 
            <div class=" max-w-xs sm:max-w-sm md:max-w-md aspect-square shrink-0">
                <NuxtImg src="/apoiadores/SAS.jpg" alt="Plurall"
                    class="h-full w-full rounded-2xl object-cover shadow-lg" loading="lazy" format="webp" />
            </div>

            
            <div class="flex flex-1 flex-col">

                <p class="leading-8 text-gray-700">
                    No Totem, acreditamos que aprender vai muito além da sala de aula — e é por isso que escolhemos o SAS Educação como nosso sistema de ensino.
                    Reconhecido nacionalmente pela excelência acadêmica, o SAS oferece uma plataforma completa que integra conteúdo de alta qualidade, tecnologia educacional e acompanhamento constante do desempenho dos alunos. Tudo isso pensado para desenvolver não apenas o conhecimento, mas também habilidades essenciais para a vida.
                    Com materiais didáticos atualizados, trilhas personalizadas de aprendizagem e recursos digitais interativos, os alunos têm uma experiência dinâmica, envolvente e eficiente. Além disso, o sistema permite um monitoramento preciso da evolução de cada estudante, garantindo intervenções rápidas e um aprendizado mais sólido.
                    Outro grande diferencial está na preparação para os principais desafios acadêmicos, como vestibulares e ENEM, com metodologias comprovadas e foco em resultados reais.
                    Mais do que um sistema de ensino, o SAS é uma ferramenta estratégica que potencializa o desenvolvimento dos nossos alunos e fortalece o compromisso do Totem com uma educação de excelência.
                </p>

                <LinkExterno :external-link="'https://app.portalsaseducacao.com.br/entrar/'"/>

            </div>
        </article>

        <h2 class="text-gray-600 text-2xl md:text-6xl font-bold mt-8">MACMILLAN EDUCATION</h2>

        <article class="flex flex-col md:flex-row items-center gap-8"> 
            <div class=" max-w-xs sm:max-w-sm md:max-w-md aspect-square shrink-0">
                <NuxtImg src="/apoiadores/MACMILLAN.jpg" alt="MACMILLAN"
                    class="h-full w-full rounded-2xl object-cover shadow-lg" loading="lazy" format="webp" />
            </div>

            
            <div class="flex flex-1 flex-col">

                <p class="leading-8 text-gray-700">
                    Programa Bilíngue com Macmillan Education
                    Em um mundo cada vez mais conectado, falar inglês deixou de ser um diferencial — tornou-se essencial. Pensando nisso, o Totem oferece um programa bilíngue estruturado com a excelência da Macmillan Education, uma das maiores e mais respeitadas instituições educacionais do mundo.
                    Nosso programa vai muito além do ensino tradicional de idiomas. Ele proporciona uma verdadeira imersão na língua inglesa, integrando o aprendizado ao cotidiano dos alunos de forma natural, significativa e contínua. Aqui, o estudante não apenas aprende inglês — ele vive o idioma.
                    Com uma metodologia moderna e baseada em evidências, a Macmillan combina desenvolvimento linguístico com habilidades do século XXI, como pensamento crítico, comunicação, criatividade e colaboração. As aulas são dinâmicas, com recursos digitais interativos, materiais atualizados e uma abordagem que respeita o ritmo de cada aluno.
                    Além disso, o programa acompanha de perto a evolução dos estudantes, garantindo consistência no aprendizado e segurança para as famílias. O resultado é a formação de alunos confiantes, preparados para se comunicar com fluência e atuar em contextos globais.
                    Escolher o programa bilíngue com a Macmillan é optar por uma formação completa, atual e alinhada com o futuro.
                </p>

                <LinkExterno :external-link="'https://www.macmillaneducationeverywhere.com/'"/>

            </div>
        </article>

    </section>
</template>