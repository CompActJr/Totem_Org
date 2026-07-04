<template>
  <div class="sobre">
    <!-- ===================================================
         HEADER
    =================================================== -->
    <header class="header">
      <div class="container header-inner">
        <a href="/" class="logo">
          <img src="/assets/imagens/logo-totem-colegios.png" alt="Colégio Totem" class="logo-img" />
        </a>

        <nav class="nav" :class="{ 'nav-open': menuOpen }">
          <ul class="nav-list">
            <li v-for="link in navLinks" :key="link.label" class="nav-item">
              <a :href="link.href" class="nav-link" @click="menuOpen = false">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <a href="#agende" class="btn btn-interest">TENHO INTERESSE</a>

        <button class="nav-toggle" @click="menuOpen = !menuOpen" aria-label="Abrir menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    <!-- ===================================================
         HERO DA UNIDADE
    =================================================== -->
    <section class="hero">
      <img :src="unit.heroImage" :alt="`Unidade ${unit.city} do Colégio Totem`" class="hero-bg" />
      <div class="hero-overlay"></div>

      <div class="container hero-content-wrap">
        <div class="hero-content">
          <p class="hero-eyebrow">Colégio Totem</p>
          <h1>{{ unit.city }}</h1>
          <a href="#agende" class="btn btn-primary">AGENDE SUA VISITA</a>
        </div>
      </div>

      <div class="hero-dots">
        <span
          v-for="(dot, i) in heroSlides"
          :key="i"
          class="dot"
          :class="{ active: i === activeSlide }"
          @click="activeSlide = i"
        ></span>
      </div>

      <a class="whatsapp-btn" :href="whatsappLink" target="_blank" rel="noopener">
        <svg class="icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.8C13.4 27.7 14.7 28 16 28c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-1.2 0-2.4-.3-3.5-.8l-.3-.1-4.6 1.1 1.1-4.4-.2-.3C7.5 19 7 17 7 15c0-5 4-9 9-9s9 4 9 9-4 9-9 9z"/>
        </svg>
        <span class="whatsapp-label">Mande um Whats</span>
      </a>
    </section>

    <!-- ===================================================
         POR QUE O TOTEM
    =================================================== -->
    <section id="sobre" class="section-about">
      <div class="container grid">
        <div class="col-6 about-text">
          <p class="eyebrow">POR QUE O TOTEM</p>
          <h2>É MAIS QUE<br />COLÉGIO...</h2>

          <p>Bem-vindo(a) ao SEU FUTURO! Prepare-se para construir o amanhã.</p>
          <p>
            No <strong>Colégio Totem</strong>, acreditamos que a escolha certa é a que motiva,
            acolhe e faz feliz. Aqui, nossos estudantes encontram um ambiente onde o afeto e a
            atenção são prioridades, proporcionando bem-estar e segurança para todos. Oferecemos
            a educação que desperta a criatividade e entrega um mundo de conhecimento nas mãos de
            nossas crianças e jovens.
          </p>
          <p><strong>É MAIS QUE COLÉGIO: É TOTEM!</strong></p>
        </div>

        <div class="col-6 about-image">
          <img src="/assets/imagens/POR-QUE-O-TOTEM.jpg" alt="Pátio do Colégio Totem visto de cima" />
        </div>
      </div>
    </section>

    <!-- ===================================================
         NÍVEIS DE ENSINO
    =================================================== -->
    <section class="section-levels">
      <div class="container">
        <p class="eyebrow eyebrow-center">NÍVEIS DE ENSINO</p>

        <div class="grid levels-grid">
          <div class="col-4 level-card" v-for="level in educationLevelsInfo" :key="level.name">
            <div class="level-card-image">
              <img :src="level.image" :alt="level.name" />
            </div>
            <div class="level-card-body">
              <h4>{{ level.name }}</h4>
              <a :href="level.link" class="btn btn-primary btn-sm">SAIBA MAIS &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================
         INFRAESTRUTURA QUE INSPIRA
    =================================================== -->
    <section class="section-infra">
      <div class="container grid">
        <div class="col-6 infra-text">
          <p class="eyebrow">INFRAESTRUTURA QUE INSPIRA</p>
          <p>
            O Totem acredita que uma escola de alto nível começa com uma estrutura qualificada,
            pensada para o dia a dia real dos estudantes. Por isso, cada espaço foi projetado para
            gerar aprendizado, conforto e acolhimento, criando condições ideais para que o
            desenvolvimento aconteça com mais tranquilidade, foco e bem-estar.
          </p>
          <p>
            Uma infraestrutura bem planejada vai além do espaço físico: ela reflete valores como
            organização, cuidado e intencionalidade. Estar bem estruturado é uma forma de cuidado
            e acolhimento — e essa é uma das prioridades do Colégio Totem: acolher e valorizar
            cada estudante.
          </p>
        </div>

        <div class="col-6 infra-text infra-text-secondary">
          <p><strong>Aqui, a estrutura é parte do ensino.</strong></p>
          <p>
            Ela contribui diretamente na construção de uma experiência educacional completa,
            estimulando a autonomia, a curiosidade e o convívio em comunidade em cada canto do
            colégio.
          </p>
        </div>

        <div class="col-12 infra-gallery">
          <div class="infra-gallery-item" v-for="(photo, i) in unit.infraGallery" :key="i">
            <img :src="photo" alt="Ambiente do Colégio Totem" />
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================
         ATIVIDADES EXTRACLASSE
    =================================================== -->
    <section class="section-activities">
      <div class="container">
        <p class="eyebrow">ATIVIDADES EXTRACLASSE</p>

        <p class="activities-intro">
          No Totem, aprender vai além da sala de aula. Nossas atividades extraclasse oferecem
          diversas possibilidades para desenvolver novas habilidades, interesses e talentos ao
          longo do dia. Mais que aprendizado, mais que diversão: explore o que mais combina com
          quem você é e descubra novos horizontes.
        </p>

        <div class="grid activities-grid">
          <div class="col-4 activity-card" v-for="activity in activities" :key="activity.name">
            <template v-if="activity.icon">
              <div class="activity-card-icon">
                <img :src="activity.icon" :alt="activity.name" />
              </div>
              <div class="activity-card-body activity-card-body-light">
                <h4>{{ activity.name }}</h4>
                <a :href="activity.link" class="btn btn-primary btn-sm">SAIBA MAIS &rarr;</a>
              </div>
            </template>

            <template v-else>
              <div class="activity-card-image">
                <img :src="activity.image" :alt="activity.name" />
              </div>
              <div class="activity-card-body">
                <h4>{{ activity.name }}</h4>
                <ul class="activity-details" v-if="activity.details">
                  <li v-for="detail in activity.details" :key="detail">{{ detail }}</li>
                </ul>
                <a :href="activity.link" class="btn btn-primary btn-sm">SAIBA MAIS &rarr;</a>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================
         PLATAFORMAS PARCEIRAS
    =================================================== -->
    <section class="section-platforms">
      <div class="container">
        <p class="eyebrow">PLATAFORMAS PARCEIRAS</p>

        <div class="platform-block" v-for="(platform, i) in platforms" :key="platform.name">
          <h3>Plataforma {{ i + 1 }}</h3>

          <div class="platform-content">
            <div class="platform-logo">
              <img :src="platform.logo" :alt="platform.name" />
            </div>

            <div class="platform-text">
              <p>{{ platform.description }}</p>
              <a :href="platform.link" class="platform-link">ACESSE: {{ platform.linkLabel }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================
         RELATOS (depoimentos)
    =================================================== -->
    <section class="section-testimonials">
      <div class="container testimonials-inner">
        <div class="testimonials-header">
          <p class="eyebrow">RELATOS</p>
          <h2>DE QUEM CONHECE<br />O COLÉGIO TOTEM</h2>
        </div>

        <span class="quote-mark" aria-hidden="true">&rdquo;</span>

        <div class="testimonial-card">
          <img :src="currentTestimonial.photo" :alt="currentTestimonial.name" class="testimonial-photo" />
          <div class="testimonial-body">
            <p class="testimonial-text">{{ currentTestimonial.text }}</p>
            <p class="testimonial-author">
              <strong>{{ currentTestimonial.name }}</strong> — {{ currentTestimonial.role }}
            </p>
          </div>
        </div>

        <div class="testimonial-dots">
          <span
            v-for="(t, i) in testimonials"
            :key="i"
            class="dot"
            :class="{ active: i === activeTestimonial }"
            @click="activeTestimonial = i"
          ></span>
        </div>
      </div>
    </section>

    <!-- ===================================================
         RESULTADOS INCRÍVEIS
    =================================================== -->
    <section class="section-results">
      <div class="container">
        <p class="eyebrow">RESULTADOS INCRÍVEIS</p>
        <h2>AJUDANDO A REALIZAR SONHOS</h2>

        <div class="results-carousel">
          <button class="carousel-arrow carousel-arrow-prev" @click="prevResult" aria-label="Anterior">&larr;</button>

          <div class="results-track">
            <div
              class="result-card"
              v-for="(result, i) in visibleResults"
              :key="result.title + i"
            >
              <img :src="result.image" :alt="result.title" />
              <div class="result-card-overlay">
                <p class="result-card-title">{{ result.title }}</p>
                <p class="result-card-subtitle">{{ result.subtitle }}</p>
              </div>
            </div>
          </div>

          <button class="carousel-arrow carousel-arrow-next" @click="nextResult" aria-label="Próximo">&rarr;</button>
        </div>

        <div class="testimonial-dots results-dots">
          <span
            v-for="(r, i) in results"
            :key="i"
            class="dot"
            :class="{ active: i === activeResult }"
            @click="activeResult = i"
          ></span>
        </div>
      </div>
    </section>

    <!-- ===================================================
         NOVIDADES
    =================================================== -->
    <section class="section-news">
      <div class="container">
        <p class="eyebrow">NOVIDADES</p>

        <div class="news-carousel">
          <div class="news-card">
            <img :src="currentNews.image" :alt="currentNews.title" class="news-card-image" />
            <div class="news-card-body">
              <h3>{{ currentNews.title }}</h3>
              <p class="news-card-date">{{ currentNews.date }}</p>
              <p class="news-card-excerpt">{{ currentNews.excerpt }}</p>
              <a :href="currentNews.link" class="btn btn-outline btn-sm">LEIA MAIS &rarr;</a>
            </div>
          </div>

          <div class="news-nav">
            <button class="carousel-arrow" @click="prevNews" aria-label="Anterior">&larr;</button>
            <div class="testimonial-dots">
              <span
                v-for="(n, i) in news"
                :key="i"
                class="dot"
                :class="{ active: i === activeNews }"
                @click="activeNews = i"
              ></span>
            </div>
            <button class="carousel-arrow" @click="nextNews" aria-label="Próximo">&rarr;</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================
         TESTE VOCACIONAL
    =================================================== -->
    <section class="section-vocational">
      <div class="container grid">
        <div class="col-4 vocational-image">
          <img src="/assets/imagens/TESTE-VOCACIONAL.jpg" alt="Estudante do Colégio Totem pensativa" />
        </div>

        <div class="col-8 vocational-text">
          <p class="eyebrow">TESTE VOCACIONAL</p>
          <h2>QUAL É O SEU TALENTO?</h2>

          <p>
            Escolher uma profissão ou área de estudo é uma decisão importante — e o
            <strong>teste vocacional</strong> pode trazer mais clareza para esse momento. Em
            apenas 8 minutos, você acessa uma experiência rápida, prática e pensada para ajudar a
            identificar seus interesses, pontos fortes e possibilidades de futuro.
          </p>
          <p>
            Se você quer tomar essa decisão com mais segurança, vale dar esse passo importante.
            Clique e faça o teste vocacional do Totem.
          </p>

          <a href="#" class="btn btn-primary btn-sm">ACESSE AGORA &rarr;</a>
        </div>
      </div>
    </section>

    <!-- ===================================================
         ENTRE EM CONTATO
    =================================================== -->
    <section id="contato" class="section-contact">
      <div class="container grid">
        <div class="col-6 contact-info">
          <p class="eyebrow">ENTRE EM CONTATO</p>
          <h2>{{ unit.city }}</h2>

          <p>{{ unit.address }}</p>
          <p>Telefone: {{ unit.phone }}</p>
          <p>WhatsApp: {{ unit.whatsapp }}</p>
          <a :href="`mailto:${unit.email}`">{{ unit.email }}</a>
        </div>

        <div class="col-6 contact-map">
          <iframe
            :src="unit.mapEmbed"
            width="100%"
            height="100%"
            style="border:0"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="`Mapa - Colégio Totem ${unit.city}`"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- ===================================================
         AGENDE SUA VISITA (CTA + Formulário)
    =================================================== -->
    <section id="agende" class="section-cta">
      <img src="/assets/imagens/AGENDE-SUA-VISITA.jpg" alt="Quadra do Colégio Totem" class="cta-bg" />
      <div class="cta-overlay"></div>

      <div class="container cta-inner">
        <h2>Agende sua Visita</h2>
        <p class="cta-subtitle">Colégio Totem</p>

        <form class="cta-form" @submit.prevent="submitForm">
          <input type="text" v-model="form.name" placeholder="Nome" class="full-width" required />

          <select v-model="form.city" required>
            <option value="" disabled selected>Cidade</option>
            <option v-for="u in units" :key="u.name" :value="u.name">{{ u.name }}</option>
          </select>

          <select v-model="form.level" required>
            <option value="" disabled selected>Nível de Ensino</option>
            <option v-for="level in educationLevels" :key="level" :value="level">{{ level }}</option>
          </select>

          <input type="tel" v-model="form.whatsapp" placeholder="WhatsApp" required />
          <input type="email" v-model="form.email" placeholder="E-mail" required />

          <button type="submit" class="btn btn-primary full-width">ENVIAR</button>
        </form>
      </div>
    </section>

    <!-- ===================================================
         FOOTER
    =================================================== -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <img src="/assets/imagens/logo-totemf.png" alt="Colégio Totem" class="footer-logo" />
          <p class="footer-tagline">É MAIS QUE COLÉGIO:<br />É TOTEM!</p>
        </div>

        <div class="grid footer-units">
          <div class="col-4" v-for="u in unitsInfo" :key="u.city">
            <h5>{{ u.city }}</h5>
            <p>{{ u.address }}</p>
            <p>Telefone: {{ u.phone }}</p>
            <p>WhatsApp: {{ u.whatsapp }}</p>
            <a :href="`mailto:${u.email}`">{{ u.email }}</a>

            <div class="footer-social">
              <a :href="u.facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" class="icon-sm" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg>
              </a>
              <a :href="u.instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" class="icon-sm" fill="currentColor"><path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; Copyright 2026 Colégio Totem. Todos os direitos reservados.</p>
          <p>
            O TOTEM está de acordo com a Lei Geral de Proteção de Dados 13.709/18. Para dúvidas
            sobre questões relativas a dados pessoais, nosso canal de comunicação é
            <a href="mailto:privacidade@totem.com.br">privacidade@totem.com.br</a>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

/* -----------------------------------------------------
   NAVEGAÇÃO
----------------------------------------------------- */
const menuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Nossa Escola', href: '#sobre' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Matrículas', href: '#agende' },
  { label: 'Estude no Totem', href: '#vocacional' },
  { label: 'Fale com a Gente', href: '#contato' },
]

/* -----------------------------------------------------
   UNIDADE ATUAL DA PÁGINA
----------------------------------------------------- */
const unit = {
  city: 'Cachoeira do Sul',
  heroImage: new URL('/assets/imagens/HERO-CACHOEIRA.jpg', import.meta.url).href,
  address: 'Avenida Presidente Vargas, 1958',
  phone: '55 3722-2977',
  whatsapp: '55 9 9088-3334',
  email: 'cachoeira@colegiototem.com.br',
  whatsappNumber: '5551000000000',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCol%C3%A9gio+Totem+-+Cachoeira+do+Sul!5e0!3m2!1spt-BR!2sbr',
  infraGallery: [
    new URL('/assets/imagens/infra-01.jpg', import.meta.url).href,
    new URL('/assets/imagens/infra-02.jpg', import.meta.url).href,
    new URL('/assets/imagens/infra-03.jpg', import.meta.url).href,
    new URL('/assets/imagens/infra-04.jpg', import.meta.url).href,
    new URL('/assets/imagens/infra-05.jpg', import.meta.url).href,
    new URL('/assets/imagens/infra-06.jpg', import.meta.url).href,
  ],
}

/* -----------------------------------------------------
   HERO / CARROSSEL
----------------------------------------------------- */
const heroSlides = [0, 1, 2]
const activeSlide = ref(0)
let heroInterval = null

onMounted(() => {
  heroInterval = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % heroSlides.length
  }, 6000)
})
onBeforeUnmount(() => clearInterval(heroInterval))

const whatsappLink = computed(() => {
  return `https://wa.me/${unit.whatsappNumber}?text=${encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o Colégio Totem - ${unit.city}.`
  )}`
})

/* -----------------------------------------------------
   NÍVEIS DE ENSINO
----------------------------------------------------- */
const educationLevelsInfo = [
  {
    name: 'Berçário',
    image: new URL('/assets/imagens/NIVEL-BERCARIO.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Educação Infantil',
    image: new URL('/assets/imagens/NIVEL-INFANTIL.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Ensino Fundamental I',
    image: new URL('/assets/imagens/NIVEL-FUNDAMENTAL-1.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Ensino Fundamental II',
    image: new URL('/assets/imagens/NIVEL-FUNDAMENTAL-2.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Ensino Médio',
    image: new URL('/assets/imagens/NIVEL-MEDIO.jpg', import.meta.url).href,
    link: '#',
  },
]

/* -----------------------------------------------------
   ATIVIDADES EXTRACLASSE
----------------------------------------------------- */
const activities = [
  {
    name: 'Voleibol',
    image: new URL('/assets/imagens/ATIVIDADE-VOLEIBOL.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Taekwondo Songahm',
    image: new URL('/assets/imagens/ATIVIDADE-TAEKWONDO.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Patinação',
    image: new URL('/assets/imagens/ATIVIDADE-PATINACAO.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Dança',
    image: new URL('/assets/imagens/ATIVIDADE-DANCA.jpg', import.meta.url).href,
    details: [
      '2x por semana',
      '1h de duração por aula',
      'A partir de 4 anos',
    ],
    link: '#',
  },
  {
    name: 'Neuroeduca',
    icon: new URL('/assets/imagens/ICONE-NEUROEDUCA.png', import.meta.url).href,
    link: '#',
  },
]

/* -----------------------------------------------------
   PLATAFORMAS PARCEIRAS
----------------------------------------------------- */
const platforms = [
  {
    name: 'Somos Educação',
    logo: new URL('/assets/imagens/LOGO-SOMOS.png', import.meta.url).href,
    description:
      'Sistema de ensino parceiro do Colégio Totem que integra material didático, plataforma digital e acompanhamento pedagógico, apoiando o estudante em todas as etapas da aprendizagem.',
    link: '#',
    linkLabel: 'somos.com.br',
  },
  {
    name: 'SAS Plataforma de Educação',
    logo: new URL('/assets/imagens/LOGO-SAS.png', import.meta.url).href,
    description:
      'Plataforma que une conteúdo, tecnologia e metodologia ativa, oferecendo recursos digitais complementares às aulas e fortalecendo o vínculo entre escola, aluno e família.',
    link: '#',
    linkLabel: 'sas.com.br',
  },
  {
    name: 'Eleva Educação',
    logo: new URL('/assets/imagens/LOGO-ELEVA.png', import.meta.url).href,
    description:
      'Parceria voltada à preparação para os principais vestibulares do país, com foco em resultados, acompanhamento individualizado e conteúdo atualizado para o Ensino Médio.',
    link: '#',
    linkLabel: 'eleva.com.br',
  },
]

/* -----------------------------------------------------
   RELATOS (depoimentos)
----------------------------------------------------- */
const testimonials = [
  {
    name: 'Alberto Martins',
    role: 'Pai Totem em Cachoeira do Sul',
    photo: new URL('/assets/imagens/depoimento-alberto.jpg', import.meta.url).href,
    text: 'Escolhi o Totem porque quero que meu filho cresça em um ambiente onde ele seja visto, ouvido e respeitado como indivíduo. No Totem, ele não é apenas mais um aluno, ele é parte ativa de uma comunidade que valoriza o afeto, o pensamento crítico e o aprendizado real, para a vida.',
  },
  {
    name: 'Carla Souza',
    role: 'Mãe Totem em Cruz Alta',
    photo: new URL('/assets/imagens/depoimento-carla.jpg', import.meta.url).href,
    text: 'A troca de escola foi uma decisão difícil, mas o acolhimento do Totem fez toda diferença. Minha filha se sente segura para errar, perguntar e criar, e isso mudou a relação dela com aprender.',
  },
  {
    name: 'Rodrigo Lima',
    role: 'Pai Totem em Santa Maria',
    photo: new URL('/assets/imagens/depoimento-rodrigo.jpg', import.meta.url).href,
    text: 'O que mais me chama atenção é o cuidado com cada aluno individualmente. Os professores conhecem meus filhos pelo nome e pelo jeito de ser, não é só mais um número.',
  },
]

const activeTestimonial = ref(0)
const currentTestimonial = computed(() => testimonials[activeTestimonial.value])

/* -----------------------------------------------------
   RESULTADOS INCRÍVEIS
----------------------------------------------------- */
const results = [
  {
    title: 'TERCEIRÃO 2025',
    subtitle: '17 aprovações em Medicina',
    image: new URL('/assets/imagens/RESULTADO-MEDICINA.jpg', import.meta.url).href,
  },
  {
    title: 'TERCEIRÃO 2025',
    subtitle: '32 aprovações no ITA e IME',
    image: new URL('/assets/imagens/RESULTADO-ITA.jpg', import.meta.url).href,
  },
  {
    title: 'TERCEIRÃO 2025',
    subtitle: '48 aprovações em Engenharia',
    image: new URL('/assets/imagens/RESULTADO-ENGENHARIA.jpg', import.meta.url).href,
  },
]

const activeResult = ref(0)
const visibleResults = computed(() => {
  const total = results.length
  const next = (activeResult.value + 1) % total
  return [results[activeResult.value], results[next]]
})
function prevResult() {
  activeResult.value = (activeResult.value - 1 + results.length) % results.length
}
function nextResult() {
  activeResult.value = (activeResult.value + 1) % results.length
}

/* -----------------------------------------------------
   NOVIDADES
----------------------------------------------------- */
const news = [
  {
    title: 'Crianças e telas: como encontrar o equilíbrio',
    date: '17 de março de 2026',
    excerpt:
      'O uso de telas na infância e na adolescência é motivo de dúvida entre famílias e educadores. Conheça sinais de alerta e caminhos para um uso mais saudável e consciente da tecnologia no dia a dia.',
    image: new URL('/assets/imagens/NOVIDADE-TELAS.jpg', import.meta.url).href,
    link: '#',
  },
  {
    title: 'Como estimular a leitura em casa',
    date: '02 de março de 2026',
    excerpt:
      'Pequenas mudanças na rotina familiar podem transformar a relação das crianças com os livros. Veja dicas práticas para incentivar o hábito da leitura desde cedo.',
    image: new URL('/assets/imagens/NOVIDADE-LEITURA.jpg', import.meta.url).href,
    link: '#',
  },
]

const activeNews = ref(0)
const currentNews = computed(() => news[activeNews.value])
function prevNews() {
  activeNews.value = (activeNews.value - 1 + news.length) % news.length
}
function nextNews() {
  activeNews.value = (activeNews.value + 1) % news.length
}

/* -----------------------------------------------------
   NOSSAS UNIDADES (footer + formulário)
----------------------------------------------------- */
const units = ref([
  { name: 'Cachoeira do Sul', selected: true, whatsapp: '5551000000000' },
  { name: 'Cruz Alta', selected: true, whatsapp: '5551000000001' },
  { name: 'Santa Maria', selected: true, whatsapp: '5551000000002' },
])

const unitsInfo = [
  {
    city: 'Cachoeira do Sul',
    address: 'Avenida Presidente Vargas, 1958',
    phone: '55 3722-2977',
    whatsapp: '55 9 9088-3334',
    email: 'cachoeira@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
  },
  {
    city: 'Cruz Alta',
    address: 'General Felipe Portinho, 1216',
    phone: '55 3521-7990',
    whatsapp: '55 9 9076-7990',
    email: 'cruzalta@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
  },
  {
    city: 'Santa Maria',
    address: 'RS-287, KM 234, Trevo de Uglione',
    phone: '55 3025-8480',
    whatsapp: '55 9 9125-8480',
    email: 'santamaria@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
  },
]

const educationLevels = [
  'Berçário',
  'Educação Infantil',
  'Ensino Fundamental I',
  'Ensino Fundamental II',
  'Ensino Médio',
]

/* -----------------------------------------------------
   FORMULÁRIO — AGENDE SUA VISITA
----------------------------------------------------- */
const form = ref({
  name: '',
  city: unit.city,
  level: '',
  whatsapp: '',
  email: '',
})

function submitForm() {
  // TODO: integrar com endpoint / CRM real
  console.log('Formulário enviado:', form.value)
  alert('Recebemos seus dados! Em breve entraremos em contato.')
  form.value = { name: '', city: unit.city, level: '', whatsapp: '', email: '' }
}
</script>

<!-- =======================================================
     DESIGN SYSTEM BASE (equivalente ao style.css original)
     Não-scoped de propósito: define tokens (:root) e classes
     utilitárias usadas em todo o app (.container, .grid, .btn...).
======================================================== -->
<style>
:root{

    /* CORES */

    --primary:#FF4D00;
    --primary-dark:#E05A00;
    --primary-light:#FFA25A;

    --black:#000000;
    --gray:#332E29;

    --background:#FFFFFF;
    --surface:#F6F6F6;

    --text:#000000;
    --text-light:#555555;
    --white:#FFFFFF;

    /* TIPOGRAFIA */

    --font-family:"Inter",sans-serif;

    /* GRID */

    --container:1440px;
    --columns:12;
    --grid-gap:24px;
    --margin:96px;

    /* ESPAÇAMENTOS */

    --space-1:8px;
    --space-2:16px;
    --space-3:24px;
    --space-4:32px;
    --space-5:48px;
    --space-6:64px;
    --space-7:96px;
    --space-8:120px;
    --space-9:320px;

    /* BORDER RADIUS */

    --radius-sm:8px;
    --radius-md:16px;
    --radius-lg:20px;
    --radius-xl:24px;

    /* SOMBRAS */

    --shadow-sm:
        0 2px 8px rgba(0,0,0,.08);

    --shadow-md:
        0 8px 24px rgba(0,0,0,.12);

    --shadow-lg:
        0 16px 40px rgba(0,0,0,.16);

    /* CORES ADICIONAIS (usadas nesta página) */

    --yellow-soft:#FFF6C9;
    --whatsapp-green:#25D366;
    --overlay-light:rgba(0,0,0,.15);
    --overlay-dark:rgba(0,0,0,.55);
    --overlay-cta:rgba(0,0,0,.6);

}

/* ===================================================
   RESET
=================================================== */

*,
*::before,
*::after{

    margin:0;
    padding:0;

    box-sizing:border-box;

}

html{

    scroll-behavior:smooth;

}

body{

    font-family:var(--font-family);

    background:var(--background);

    color:var(--text);

    line-height:1.6;

    font-size:16px;

    -webkit-font-smoothing:antialiased;

}

img{

    display:block;
    width:100%;
    max-width:100%;

    border-radius:16px;

}

a{

    color:inherit;
    text-decoration:none;

}

button,
input,
textarea,
select{

    font:inherit;

}

/* ===================================================
   CONTAINER
=================================================== */

.container{

    width:100%;

    max-width:var(--container);

    margin:auto;

    padding-inline:96px;

}

/* ===================================================
   GRID
=================================================== */

.grid{

    display:grid;

    grid-template-columns:repeat(12,1fr);

    gap:24px;

}

.col-1{grid-column:span 1;}
.col-2{grid-column:span 2;}
.col-3{grid-column:span 3;}
.col-4{grid-column:span 4;}
.col-5{grid-column:span 5;}
.col-6{grid-column:span 6;}
.col-7{grid-column:span 7;}
.col-8{grid-column:span 8;}
.col-9{grid-column:span 9;}
.col-10{grid-column:span 10;}
.col-11{grid-column:span 11;}
.col-12{grid-column:span 12;}

/* ===================================================
   TIPOGRAFIA
=================================================== */

h1{

    font-size:48px;
    font-weight:700;
    line-height:56px;

    margin-bottom:24px;

}

h2{

    font-size:32px;
    font-weight:700;
    line-height:40px;

    margin-bottom:20px;

}

h3{

    font-size:24px;
    font-weight:700;
    line-height:32px;

    margin-bottom:16px;

}

h4{

    font-size:20px;
    font-weight:600;
    line-height:28px;

    margin-bottom:16px;

}

h5{

    font-size:18px;
    font-weight:600;

}

p{

    font-size:16px;
    line-height:28px;

    margin-bottom:16px;

    color:var(--text-light);

}

small{

    font-size:14px;

    line-height:20px;

}

/* ===================================================
   SEÇÕES
=================================================== */

section{

    padding:96px 0;

}

.section-lg{

    padding:120px 0;

}

.section-xl{

    padding:320px 0;

}

/* ===================================================
   BOTÕES
=================================================== */

.btn{

    display:inline-flex;

    align-items:center;

    justify-content:center;

    gap:16px;

    padding:20px 24px;

    border:none;

    border-radius:20px;

    cursor:pointer;

    transition:.25s;

    font-weight:600;

}

.btn-primary{

    background:var(--primary);

    color:white;

}

.btn-primary:hover{

    background:var(--primary-dark);

}

.btn-outline{

    border:2px solid var(--primary);

    color:var(--primary);

    background:white;

}

.btn-outline:hover{

    background:var(--primary);

    color:white;

}

/* ===================================================
   CARDS
=================================================== */

.card{

    background:white;

    border-radius:24px;

    padding:24px;

    display:flex;

    flex-direction:column;

    gap:12px;

    box-shadow:var(--shadow-sm);

    transition:.25s;

}

.card:hover{

    transform:translateY(-4px);

    box-shadow:var(--shadow-md);

}

/* ===================================================
   FORMULÁRIOS
=================================================== */

input,
textarea,
select{

    width:100%;

    padding:20px 24px;

    border:1px solid var(--gray-light);

    border-radius:20px;

    outline:none;

}

input:focus,
textarea:focus,
select:focus{

    border-color:var(--primary);

}

/* ===================================================
   HERO
=================================================== */

.hero{

    min-height:100vh;

    display:flex;

    align-items:center;

    justify-content:center;

    text-align:center;

    padding:120px 0;

}

.hero-content{

    max-width:800px;

}

/* ===================================================
   IMAGENS
=================================================== */

.image{

    border-radius:16px;

    overflow:hidden;

}

.image-caption{

    margin-top:8px;

    font-size:14px;

}

/* ===================================================
   ÍCONES
=================================================== */

.icon-sm{

    width:16px;
    height:16px;

}

.icon{

    width:24px;
    height:24px;

}

.icon-lg{

    width:32px;
    height:32px;

}

/* ===================================================
   UTILITÁRIOS
=================================================== */

.text-center{

    text-align:center;

}

.mt-1{margin-top:8px;}
.mt-2{margin-top:16px;}
.mt-3{margin-top:24px;}
.mt-4{margin-top:32px;}
.mt-5{margin-top:48px;}
.mt-6{margin-top:64px;}
.mt-7{margin-top:96px;}

.mb-1{margin-bottom:8px;}
.mb-2{margin-bottom:16px;}
.mb-3{margin-bottom:24px;}
.mb-4{margin-bottom:32px;}
.mb-5{margin-bottom:48px;}
.mb-6{margin-bottom:64px;}
.mb-7{margin-bottom:96px;}

/* ===================================================
   RESPONSIVO (base do design system)
=================================================== */

@media(max-width:1024px){

    .container{

        padding-inline:32px;

    }

    .grid{

        grid-template-columns:1fr;

    }

    [class*="col-"]{

        grid-column:span 1;

    }

    section{

        padding:64px 0;

    }

}

@media(max-width:768px){

    .container{

        padding-inline:24px;

    }

    h1{

        font-size:36px;
        line-height:44px;

    }

    h2{

        font-size:28px;
        line-height:36px;

    }

    h3{

        font-size:22px;

    }

    .btn{

        width:100%;

    }

}

@media(max-width:480px){

    .container{

        padding-inline:16px;

    }

    h1{

        font-size:30px;
        line-height:36px;

    }

    h2{

        font-size:24px;
        line-height:32px;

    }

}
</style>

<!-- =======================================================
     CSS ESPECÍFICO DESTA PÁGINA (escopado ao componente)
======================================================== -->
<style scoped>

/* ===================================================
   HEADER
=================================================== */

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background: var(--primary);
}

.header-inner {
  display: flex;
  align-items: center;
  gap: var(--space-4);

  padding-block: var(--space-2);
}

.logo-img {
  width: 120px;
  border-radius: 0;
}

.nav {
  flex: 1;
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);

  list-style: none;
}

.nav-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: .02em;

  transition: .2s;
}

.nav-link:hover {
  color: var(--black);
}

.btn-interest {
  background: var(--primary-light);
  color: var(--black);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  font-size: 13px;
  white-space: nowrap;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;

  padding: var(--space-1);
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: var(--white);
}

/* ===================================================
   HERO
=================================================== */

.hero {
  position: relative;

  min-height: 60vh;

  padding: 0;

  display: block;

  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(180deg, var(--overlay-light) 0%, var(--overlay-dark) 100%);
}

.hero-content-wrap {
  position: relative;

  height: 60vh;

  display: flex;
  align-items: flex-end;

  padding-bottom: var(--space-7);

  text-align: left;
}

.hero-eyebrow {
  color: var(--primary-light);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;

  margin-bottom: var(--space-1);
}

.hero-content h1 {
  color: var(--white);
  margin-bottom: var(--space-3);
  text-align: left;
}

.hero-dots {
  position: absolute;
  bottom: var(--space-3);
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: var(--space-1);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background: rgba(255,255,255,.5);

  cursor: pointer;

  transition: .2s;
}

.dot.active {
  background: var(--white);
  width: 20px;
  border-radius: var(--radius-sm);
}

.whatsapp-btn {
  position: absolute;
  right: 96px;
  bottom: 32px;

  display: flex;
  align-items: center;
  gap: var(--space-1);

  background: var(--whatsapp-green);
  color: var(--white);

  padding: var(--space-2);
  border-radius: 50px;

  box-shadow: var(--shadow-md);
}

.whatsapp-btn .icon {
  width: 32px;
  height: 32px;

  flex-shrink: 0;
}

.whatsapp-label {
  font-size: 13px;
  font-weight: 600;
  max-width: 70px;
  line-height: 1.2;
}

/* ===================================================
   POR QUE O TOTEM
=================================================== */

.section-about {
  background: var(--surface);
}

.about-text {
  align-self: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);

  font-size: 13px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--primary);

  margin-bottom: var(--space-3);
}

.eyebrow::after {
  content: '';
  width: 48px;
  height: 2px;
  background: var(--primary);
}

.eyebrow-center {
  justify-content: center;
  width: 100%;
}

.about-image img {
  height: 100%;
  object-fit: cover;
}

/* ===================================================
   NÍVEIS DE ENSINO
=================================================== */

.section-levels {
  text-align: center;
}

.levels-grid {
  margin-top: var(--space-5);
  justify-content: center;
}

.level-card {
  display: flex;
  flex-direction: column;

  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);

  text-align: left;
}

.level-card-image {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.level-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.level-card-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  background: var(--primary);
  color: var(--white);
  padding: var(--space-3);
}

.level-card-body h4 {
  color: var(--white);
  margin-bottom: 0;
}

/* ===================================================
   INFRAESTRUTURA QUE INSPIRA
=================================================== */

.section-infra {
  background: var(--surface);
}

.infra-text-secondary {
  align-self: end;
}

.infra-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2);

  margin-top: var(--space-4);
}

.infra-gallery-item {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-md);
}

.infra-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

/* ===================================================
   ATIVIDADES EXTRACLASSE
=================================================== */

.activities-intro {
  max-width: 720px;
}

.activities-grid {
  margin-top: var(--space-5);
}

.activity-card {
  display: flex;
  flex-direction: column;
  height: 100%;

  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.activity-card-image {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.activity-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.activity-card-icon {
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--surface);
}

.activity-card-icon img {
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: 0;
}

.activity-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-2);

  background: var(--primary);
  color: var(--white);
  padding: var(--space-3);
}

.activity-card-body h4 {
  color: var(--white);
  margin-bottom: 0;
}

.activity-card-body-light {
  background: var(--gray);
}

.activity-details {
  list-style: none;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255,255,255,.85);
}

/* ===================================================
   PLATAFORMAS PARCEIRAS
=================================================== */

.platform-block {
  padding-block: var(--space-5);
  border-bottom: 1px solid rgba(0,0,0,.08);
}

.platform-block:last-child {
  border-bottom: none;
}

.platform-content {
  display: flex;
  gap: var(--space-5);
  align-items: center;
}

.platform-logo {
  width: 160px;
  min-width: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: var(--surface);
}

.platform-logo img {
  border-radius: 0;
  object-fit: contain;
}

.platform-link {
  color: var(--primary);
  font-weight: 600;
  font-size: 14px;
}

/* ===================================================
   RELATOS
=================================================== */

.section-testimonials {
  background: var(--yellow-soft);
}

.testimonials-inner {
  position: relative;
}

.testimonials-header {
  margin-bottom: var(--space-5);
}

.quote-mark {
  position: absolute;
  top: 0;
  right: var(--space-4);

  font-size: 160px;
  line-height: 1;
  font-weight: 700;

  color: rgba(255,255,255,.6);

  pointer-events: none;
}

.testimonial-card {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;

  position: relative;
  z-index: 1;
}

.testimonial-photo {
  width: 96px;
  height: 96px;
  min-width: 96px;

  object-fit: cover;
  border-radius: var(--radius-md);
}

.testimonial-text {
  color: var(--text);
  margin-bottom: var(--space-2);
}

.testimonial-author {
  font-size: 14px;
  color: var(--text-light);
}

.testimonial-dots {
  display: flex;
  gap: var(--space-1);
  margin-top: var(--space-4);
}

.testimonial-dots .dot {
  background: rgba(0,0,0,.2);
}

.testimonial-dots .dot.active {
  background: var(--primary);
}

/* ===================================================
   RESULTADOS INCRÍVEIS
=================================================== */

.section-results {
  background: var(--gray);
  color: var(--white);
}

.section-results h2 {
  color: var(--white);
}

.results-carousel {
  display: flex;
  align-items: center;
  gap: var(--space-3);

  margin-top: var(--space-5);
}

.results-track {
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}

.result-card {
  position: relative;

  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.result-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.result-card-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: var(--space-3);

  background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,.75) 100%);
}

.result-card-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: var(--space-1);
}

.result-card-subtitle {
  font-size: 14px;
  color: var(--primary-light);
  margin-bottom: 0;
}

.carousel-arrow {
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255,255,255,.3);
  border-radius: 50%;
  background: transparent;
  color: var(--white);

  font-size: 20px;
  cursor: pointer;

  transition: .2s;
}

.carousel-arrow:hover {
  background: var(--primary);
  border-color: var(--primary);
}

.results-dots {
  justify-content: center;
  margin-top: var(--space-4);
}

.results-dots .dot {
  background: rgba(255,255,255,.3);
}

.results-dots .dot.active {
  background: var(--primary);
}

/* ===================================================
   NOVIDADES
=================================================== */

.news-carousel {
  margin-top: var(--space-5);
}

.news-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  align-items: center;

  background: var(--surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.news-card-image {
  height: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 0;
}

.news-card-body {
  padding: var(--space-4);
}

.news-card-date {
  font-size: 13px;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.news-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);

  margin-top: var(--space-4);
}

.news-nav .carousel-arrow {
  border-color: rgba(0,0,0,.2);
  color: var(--text);
}

.news-nav .carousel-arrow:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}

/* ===================================================
   TESTE VOCACIONAL
=================================================== */

.vocational-image img {
  border-radius: var(--radius-lg);
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.vocational-text {
  align-self: center;
}

/* ===================================================
   ENTRE EM CONTATO
=================================================== */

.section-contact {
  background: var(--surface);
}

.contact-info {
  align-self: center;
}

.contact-info a {
  color: var(--primary);
  font-weight: 600;
}

.contact-map {
  min-height: 360px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

/* ===================================================
   AGENDE SUA VISITA
=================================================== */

.section-cta {
  position: relative;

  padding: var(--space-8) 0;

  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 0;
}

.cta-overlay {
  position: absolute;
  inset: 0;

  background: var(--overlay-cta);
}

.cta-inner {
  position: relative;
  z-index: 1;

  max-width: 640px;
}

.cta-inner h2 {
  color: var(--white);
}

.cta-subtitle {
  color: var(--white);
  margin-bottom: var(--space-5);
}

.cta-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
}

.cta-form .full-width {
  grid-column: 1 / -1;
}

/* ===================================================
   FOOTER
=================================================== */

.footer {
  background: var(--gray);
  color: var(--white);

  padding: var(--space-7) 0 var(--space-4);
}

.footer-top {
  display: flex;
  align-items: center;
  gap: var(--space-4);

  margin-bottom: var(--space-6);
}

.footer-logo {
  width: 100px;
}

.footer-tagline {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-light);
}

.footer-units h5 {
  color: var(--white);
  margin-bottom: var(--space-2);
}

.footer-units p {
  color: rgba(255,255,255,.7);
  font-size: 14px;
  margin-bottom: var(--space-1);
}

.footer-units a {
  font-size: 14px;
  color: var(--primary-light);
}

.footer-social {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.footer-social a {
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.15);
  margin-top: var(--space-6);
  padding-top: var(--space-3);
}

.footer-bottom p {
  color: rgba(255,255,255,.5);
  font-size: 12px;
  margin-bottom: var(--space-1);
}

.footer-bottom a {
  color: rgba(255,255,255,.7);
  text-decoration: underline;
}

/* ===================================================
   RESPONSIVO — regras específicas desta página
=================================================== */

@media (max-width: 1024px) {
  .nav {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }

  .nav.nav-open {
    display: block;

    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    background: var(--primary);

    padding: var(--space-3);
  }

  .nav.nav-open .nav-list {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-form {
    grid-template-columns: 1fr;
  }

  .quote-mark {
    font-size: 120px;
  }

  .infra-gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .results-track {
    grid-template-columns: 1fr;
  }

  .news-card {
    grid-template-columns: 1fr;
  }

  .news-card-image {
    aspect-ratio: 16 / 9;
  }

  .platform-content {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    flex-direction: column;
  }

  .testimonial-photo {
    width: 72px;
    height: 72px;
    min-width: 72px;
  }

  .quote-mark {
    font-size: 88px;
    right: var(--space-2);
  }

  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .footer-tagline {
    font-size: 18px;
  }

  .infra-gallery {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {

  .whatsapp-btn {
    right: 12px;
    bottom: 20px;

    padding: 12px;
    border-radius: 50%;
  }

  .whatsapp-label {
    display: none;
  }

  .whatsapp-btn .icon {
    width: 24px;
    height: 24px;
  }

  .hero-content-wrap {
    padding-bottom: var(--space-6);
  }

  .quote-mark {
    display: none;
  }

  .testimonial-card {
    gap: var(--space-2);
  }

  .level-card-body,
  .activity-card-body {
    padding: var(--space-2);
  }

  .footer-logo {
    width: 80px;
  }
}
</style>