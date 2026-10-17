<script setup lang="ts">
import NivelEnsinoCard from '~/components/niveis/NivelEnsinoCard.vue';
import NivelEnsinoGrid from '~/components/niveis/NivelEnsinoGrid.vue';
import HeroSlider from '~/components/slider/HeroSlider.vue';
import GoogleMaps from '~/components/ui/GoogleMaps.vue';
import type { Organization } from '~/types/organizations.types';

const unidade: Organization;

</script>

<template>
    <HeroSlider :banners="unidade.banners" :titulo="unidade.city" :subtitle="'Colégio Totem'"
        :link="'/colegios/unidade/' + unidade.slug + '/#agende-visita'" />
    
    <section class="min-h-128 w-full flex flex-col md:flex-row gap-4 bg-gray-200 responsive-padding">
        <article class="w-full md:w-7/12 lg:w-8/12">
            <div class="flex items-center">
                <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                    PORQUE O TOTEM?
                </h2>

                <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
            </div>

            <h2 class="text-2xl md:text-4xl mt-4 lg:text-6xl text-gray-700 font-bold">
                É MAIS QUE<br />
                COLÉGIO...
            </h2>

            <p class="mt-4 md:mt-8 mb-8 leading-8 lg:mt-12 lg:mb-12">
                No <strong>{{ unidade.city }}</strong>, os estudantes encontram um ambiente onde o
                afeto e a atenção são prioridades, proporcionando bem-estar e segurança para
                todos. Oferecemos a educação que desperta a criatividade e entrega um mundo de
                conhecimento nas mãos de nossas crianças e jovens. Clique abaixo e conheça 
                os diferenciais que fazem do Totem a sua melhor escolha.
            </p>

            <NuxtLink
                :to="`/colegios/unidade/${unidade}/diferenciais`"
                class="rounded-full bg-white shadow-2xl px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:scale-115"
            >
                Saiba mais →
            </NuxtLink>
        </article>

        <div class="w-full md:w-5/12 lg:w=4/12">
            <img :src="unidade.image" alt="imagem da unidade" class="w-full md:min-h-[90%] object-cover" />
        </div>

    </section>

    <NivelEnsinoGrid>
        <NivelEnsinoCard 
            v-for="nivel in unidade.levels"
            :nivel="nivel"
            :unidade-slug="unidade.slug"
        />
    </NivelEnsinoGrid>

    <section class="min-h-128 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                INFRAESTRUTURA QUE INSPIRA
            </h2>

            <div class="bg-orange-600 w-64 h-0.5 ml-8"></div>
        </div>

        <article class="mt-8 w-full text-justify leading-8 md:leading-10 flex flex-col md:flex-row justify-start gap-8">
            <p class="flex-1">
                A Totem acredita que uma escola de alto nível começa pela qualidade do ambiente que
                oferece. Por isso, cada espaço foi pensado para garantir segurança, conforto e acolhimento,
                criando as condições ideais para que o aprendizado aconteça com mais tranquilidade,
                foco e bem-estar.
                Uma infraestrutura bem planejada não apenas recebe os estudantes — ela protege,
                organiza, acolhe e potencializa.
                Salas funcionais, ambientes agradáveis e uma estrutura que acompanha as necessidades
                da rotina escolar fazem toda a diferença na construção de uma experiência educativa mais
                completa.
            </p>
            <p class="flex-1">
                Aqui, a estrutura é parte do ensino. Ela contribui para formar um ambiente onde
                estudantes se sentem seguros para aprender, conviver e crescer com confiança.
            </p>
        </article>


        <div class="grid grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
            <NuxtImg 
                v-for="imagem in unidade.infraestrutura" 
                :key="imagem" 
                :src="imagem" 
                format="webp" 
                quality="80"
                loading="lazy" 
                class="w-full h-48 md:h-96 object-cover rounded-xl  border-gray-100 border-4 border-solid
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:" />
        </div>
    </section>

    <SecaoAtividades :atividades="unidade.atividades"/>

    <section
        aria-label="PLATAFORMAS PARCEIRAS" 
        class="min-h-128 w-full flex flex-col  gap-4 bg-white responsive-padding"
    >
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

                <ExternalLink :external-link="'https://plurall.net/'"/>

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

                <ExternalLink :external-link="'https://app.portalsaseducacao.com.br/entrar/'"/>

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

                <ExternalLink :external-link="'https://www.macmillaneducationeverywhere.com/'"/>

            </div>
        </article>

    </section>

    <ProfessoresGrid>
        <ProfessorCard
            v-for="professor in unidade.professores"
            :key="professor._id"
            :professor="professor"
        />
    </ProfessoresGrid>

    <HeroVocacional/>

    <GoogleMaps :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>

</template>