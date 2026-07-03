<template>
  <div class="home">
    <!-- ===================================================
         HEADER
    =================================================== -->
    <header class="header">
      <div class="container header-inner">
        <a href="/" class="logo">
          <img src="./assets/images/logo-totem.jpg" alt="Colégio Totem" class="logo-img" />
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
         HERO
    =================================================== -->
    <section class="hero">
      <img
        src="/assets/imagens/BANNER.jpg"
        alt="Crianças do Colégio Totem brincando"
        class="hero-bg"
      />
      <div class="hero-overlay"></div>

      <div class="container hero-content-wrap">
        <div class="hero-content">
          <h1>Matrículas Abertas</h1>
          <p class="hero-subtitle">Colégio Totem</p>
          <a href="#agende" class="btn btn-primary">AGENDE SUA VISITA</a>
        </div>
      </div>

      <!-- carrossel dots -->
      <div class="hero-dots">
        <span
          v-for="(dot, i) in heroSlides"
          :key="i"
          class="dot"
          :class="{ active: i === activeSlide }"
          @click="activeSlide = i"
        ></span>
      </div>

      <!-- botão flutuante WhatsApp -->
      <a
        class="whatsapp-btn"
        :href="whatsappLink"
        target="_blank"
        rel="noopener"
      >
        <svg class="icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.8C13.4 27.7 14.7 28 16 28c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-1.2 0-2.4-.3-3.5-.8l-.3-.1-4.6 1.1 1.1-4.4-.2-.3C7.5 19 7 17 7 15c0-5 4-9 9-9s9 4 9 9-4 9-9 9z"/>
        </svg>
        <span class="whatsapp-label">Mande um Whats</span>
      </a>
    </section>

    <!-- ===================================================
         POR QUE O TOTEM
    =================================================== -->
    <section class="section-about">
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
         NOSSAS UNIDADES
    =================================================== -->
    <section class="section-units">
      <div class="container">
        <p class="eyebrow">NOSSAS UNIDADES</p>

        <div class="grid units-grid">
          <div class="col-4 unit-card" v-for="unit in unitsInfo" :key="unit.city">
            <div class="unit-card-image">
              <img :src="unit.image" :alt="`Unidade ${unit.city} do Colégio Totem`" />
            </div>
            <div class="unit-card-body">
              <h4>{{ unit.city }}</h4>
              <ul class="unit-levels">
                <li v-for="level in unit.levels" :key="level">{{ level }}</li>
              </ul>
              <a :href="unit.link" class="btn btn-primary btn-sm">SAIBA MAIS &rarr;</a>
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
          <img
            :src="currentTestimonial.photo"
            :alt="currentTestimonial.name"
            class="testimonial-photo"
          />
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
            <option v-for="unit in units" :key="unit.name" :value="unit.name">{{ unit.name }}</option>
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
          <img src="./assets/images/logo-totem-branco.jpg" alt="Colégio Totem" class="footer-logo" />
          <p class="footer-tagline">É MAIS QUE COLÉGIO:<br />É TOTEM!</p>
        </div>

        <div class="grid footer-units">
          <div class="col-4" v-for="unit in unitsInfo" :key="unit.city">
            <h5>{{ unit.city }}</h5>
            <p>{{ unit.address }}</p>
            <p>Telefone: {{ unit.phone }}</p>
            <p>WhatsApp: {{ unit.whatsapp }}</p>
            <a :href="`mailto:${unit.email}`">{{ unit.email }}</a>

            <div class="footer-social">
              <a :href="unit.facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" class="icon-sm" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg>
              </a>
              <a :href="unit.instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" class="icon-sm" fill="currentColor"><path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; Copyright 2026 Colégio Totem. Todos os direitos reservados.</p>
          <p>
            O TOTEM está de acordo com a Lei Geral de Proteção de Dados Sul 13.709/18. Para dúvidas
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
  { label: 'Home', href: '#' },
  { label: 'Nossa Escola', href: '#sobre' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Matrículas', href: '#agende' },
  { label: 'Estude no Totem', href: '#vocacional' },
  { label: 'Fale com a Gente', href: '#contato' },
]

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

/* -----------------------------------------------------
   UNIDADES (seletor flutuante + WhatsApp)
----------------------------------------------------- */
const units = ref([
  { name: 'Cachoeira do Sul', selected: true, whatsapp: '5551000000000' },
  { name: 'Cruz Alta', selected: true, whatsapp: '5551000000001' },
  { name: 'Santa Maria', selected: true, whatsapp: '5551000000002' },
])

const whatsappLink = computed(() => {
  const chosen = units.value.find((u) => u.selected) || units.value[0]
  return `https://wa.me/${chosen.whatsapp}?text=${encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o Colégio Totem - ${chosen.name}.`
  )}`
})

/* -----------------------------------------------------
   NOSSAS UNIDADES (cards)
----------------------------------------------------- */
const unitsInfo = [
  {
    city: 'Cachoeira do Sul',
    image: new URL('/assets/imagens/FACHADA-CACHOEIRA.jpg', import.meta.url).href,
    levels: ['Berçário', 'Educação Infantil', 'Ensino Fundamental I e II', 'Ensino Médio'],
    link: '#unidade-cachoeira',
    address: 'Avenida Presidente Vargas, 1958',
    phone: '55 3722-2977',
    whatsapp: '55 9 9088-3334',
    email: 'cachoeira@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
  },
  {
    city: 'Cruz Alta',
    image: new URL('/assets/imagens/FACHADA-CRUZ-ALTA.jpg', import.meta.url).href,
    levels: ['Ensino Fundamental I e II', 'Ensino Médio'],
    link: '#unidade-cruzalta',
    address: 'General Felipe Portinho, 1216',
    phone: '55 3521-7990',
    whatsapp: '55 9 9076-7990',
    email: 'cruzalta@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
  },
  {
    city: 'Santa Maria',
    image: new URL('/assets/imagens/FACHADA-SANTA-MARIA.jpg', import.meta.url).href,
    levels: ['Ensino Fundamental I e II', 'Ensino Médio'],
    link: '#unidade-santamaria',
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
   RELATOS (depoimentos)
----------------------------------------------------- */
const testimonials = [
  {
    name: 'Alberto Martins',
    role: 'Pai Totem em Cachoeira do Sul',
    photo: new URL('./assets/images/depoimento-alberto.jpg', import.meta.url).href,
    text: 'Escolhi o Totem porque quero que meu filho cresça em um ambiente onde ele seja visto, ouvido e respeitado como indivíduo. No Totem, ele não é apenas mais um aluno, ele é parte ativa de uma comunidade que valoriza o afeto, o pensamento crítico e o aprendizado real, para a vida. Desde que começou lá, vejo diariamente o brilho nos olhos dele, a curiosidade florescendo e a autonomia se fortalecendo.',
  },
  {
    name: 'Carla Souza',
    role: 'Mãe Totem em Cruz Alta',
    photo: new URL('./assets/images/depoimento-carla.jpg', import.meta.url).href,
    text: 'A troca de escola foi uma decisão difícil, mas o acolhimento do Totem fez toda diferença. Minha filha se sente segura para errar, perguntar e criar, e isso mudou a relação dela com aprender.',
  },
  {
    name: 'Rodrigo Lima',
    role: 'Pai Totem em Santa Maria',
    photo: new URL('./assets/images/depoimento-rodrigo.jpg', import.meta.url).href,
    text: 'O que mais me chama atenção é o cuidado com cada aluno individualmente. Os professores conhecem meus filhos pelo nome e pelo jeito de ser, não é só mais um número.',
  },
]

const activeTestimonial = ref(0)
const currentTestimonial = computed(() => testimonials[activeTestimonial.value])

/* -----------------------------------------------------
   FORMULÁRIO — AGENDE SUA VISITA
----------------------------------------------------- */
const form = ref({
  name: '',
  city: '',
  level: '',
  whatsapp: '',
  email: '',
})

function submitForm() {
  // TODO: integrar com endpoint / CRM real
  console.log('Formulário enviado:', form.value)
  alert('Recebemos seus dados! Em breve entraremos em contato.')
  form.value = { name: '', city: '', level: '', whatsapp: '', email: '' }
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

/* Breakpoint adicional para telemóveis pequenos (não existia no
   style.css original — necessário para os ajustes desta página) */
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

  min-height: 100vh;

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

  height: 100vh;

  display: flex;
  align-items: flex-end;

  padding-bottom: var(--space-8);
}

.hero-content h1 {
  color: var(--white);
  margin-bottom: var(--space-1);
}

.hero-subtitle {
  color: var(--white);
  font-size: 20px;
  margin-bottom: var(--space-4);
}

.hero-dots {
  position: absolute;
  bottom: var(--space-4);
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
  bottom: 48px;

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

.about-image img {
  height: 100%;
  object-fit: cover;
}

/* ===================================================
   NOSSAS UNIDADES
=================================================== */

.units-grid {
  margin-top: var(--space-5);
}

.unit-card {
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.unit-card-image {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.unit-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.unit-card-body {
  background: var(--primary);
  color: var(--white);

  padding: var(--space-3);
}

.unit-card-body h4 {
  color: var(--white);
}

.unit-levels {
  list-style: none;
  margin-bottom: var(--space-3);
}

.unit-levels li {
  font-size: 14px;
  line-height: 1.6;
}

.btn-sm {
  padding: var(--space-1) var(--space-2);
  font-size: 13px;
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

  /* footer: logo e tagline empilham */
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .footer-tagline {
    font-size: 18px;
  }
}

/* ---------------------------------------------------
   Mobile pequeno (≤480px): correção dos elementos
   flutuantes do hero, das aspas decorativas e do
   cabeçalho do rodapé — pontos que estouravam a tela.
--------------------------------------------------- */
@media (max-width: 480px) {

  /* WhatsApp: vira botão circular só com ícone, sem o texto,
     evitando sobreposição com o card de unidades acima */
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
    padding-bottom: var(--space-7);
  }

  /* aspas decorativas: removidas em telas muito pequenas
     para não sobrepor o texto do depoimento */
  .quote-mark {
    display: none;
  }

  .testimonial-card {
    gap: var(--space-2);
  }

  .unit-card-body {
    padding: var(--space-2);
  }

  .footer-logo {
    width: 80px;
  }
}
</style>
