<template>
  <div class="bercario-page">
    <AppHeader />

    <UnitHeroSection :unidade="bercario" />

    <section class="section-about">
      <div class="container grid">
        <div class="col-6 about-text">
          <p class="eyebrow">BERÇÁRIO</p>
          <h1>Por que escolher o Berçário Totem?</h1>

          <p>
            No Berçário Totem Cachoeira do Sul, cada dia é uma descoberta segura e cheia de
            carinho. Nossa proposta pedagógica combina cuidado afetivo com estímulos lúdicos,
            respeitando o tempo e o desenvolvimento de cada criança.
          </p>
          <p>
            Aqui, o ambiente é preparado para acolher os primeiros passos da aprendizagem,
            com profissionais especializados e um espaço pensado para gerar confiança,
            movimento e brincadeira com significado.
          </p>
          <p><strong>A infância começa com afeto, atenção e liberdade para crescer.</strong></p>
        </div>

        <div class="col-6 about-image">
          <img :src="aboutImage" alt="Crianças brincando no berçário do Totem" />
        </div>
      </div>
    </section>

    <section class="section-motivos">
      <div class="container">
        <p class="eyebrow">MOTIVOS PARA MATRICULAR</p>
        <h2>Diferenciais do nosso berçário</h2>

        <div class="motivo-block" v-for="(motivo, index) in motivos" :key="motivo.title">
          <h3>Diferencial {{ index + 1 }}</h3>
          <div class="motivo-content">
            <div class="motivo-logo">
              <img :src="motivo.image" :alt="motivo.title" />
            </div>
            <div class="motivo-text">
              <p>{{ motivo.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-team">
      <div class="container">
        <p class="eyebrow">EQUIPE</p>
        <h2>Profissionais que acompanham seu filho</h2>

        <div class="team-grid">
          <div class="team-card" v-for="member in equipe" :key="member.name">
            <div class="team-card-image">
              <img :src="member.photo" :alt="member.name" />
            </div>
            <div class="team-card-body">
              <h4>{{ member.name }}</h4>
              <p class="team-role">{{ member.role }}</p>
              <p>{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-infra">
      <div class="container">
        <p class="eyebrow">INFRAESTRUTURA</p>
        <h2>Espaços planejados para o aprendizado no berçário</h2>

        <div class="infra-text-grid">
          <div>
            <p>
              O Berçário Totem foi construído para oferecer um ambiente acolhedor, seguro e
              estimulante. Tudo é pensado para favorecer o conforto, o brincar e o descanso
              com qualidade.
            </p>
            <p>
              Com salas amplas, espaços sensoriais e áreas de convívio protegidas, as crianças
              têm liberdade para explorar o mundo com segurança e contar com a presença de
              educadores preparados a cada passo.
            </p>
          </div>
          <div>
            <p><strong>Um espaço que fortalece o vínculo e incentiva a autonomia.</strong></p>
            <p>
              Cada ambiente integra atenção, rotina acolhedora e estímulos pedagógicos para o
              desenvolvimento integral desde a primeira infância.
            </p>
          </div>
        </div>

        <div class="infra-gallery">
          <div class="infra-gallery-item" v-for="(photo, index) in infraGallery" :key="index">
            <img :src="photo" alt="Infraestrutura do berçário Totem" />
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSection />

    <ContactSection :unidade="bercario" />

    <ScheduleVisitSection :default-city="bercario.city" @submitted="onFormSubmitted" />

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import UnitHeroSection from '@/components/unit/UnitHeroSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import ContactSection from '@/components/unit/ContactSection.vue'
import ScheduleVisitSection from '@/components/home/ScheduleVisitSection.vue'

const bercario = {
  title: 'Berçário',
  subtitle: 'Cachoeira do Sul',
  city: 'Cachoeira do Sul',
  heroImage: new URL('../assets/imagens/BANNER-BERÇÁRIO-CS.jpg', import.meta.url).href,
  whatsapp: '55 9 9088-3334',
  address: 'Avenida Presidente Vargas, 1958',
  phone: '55 3722-2977',
  email: 'cachoeira@colegiototem.com.br',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCol%C3%A9gio+Totem+-+Cachoeira+do+Sul!5e0!3m2!1spt-BR!2sbr',
}

const aboutImage = new URL('../assets/imagens/BERÇÁRIO-4.jpg', import.meta.url).href

const motivos = [
  {
    title: 'Acolhimento',
    image: new URL('../assets/imagens/BERÇÁRIO-4.jpg', import.meta.url).href,
    text: 'Cuidado afetivo desde o primeiro dia, com rotina respeitosa e equipes que acompanham cada gesto e necessidade da criança.',
  },
  {
    title: 'Ambiente',
    image: new URL('../assets/imagens/BERÇÁRIO-5.jpg', import.meta.url).href,
    text: 'Espaços amplos, coloridos e seguros, projetados para brincar, explorar e descansar com conforto e tranquilidade.',
  },
  {
    title: 'Metodologia',
    image: new URL('../assets/imagens/BERÇÁRIO-3.jpg', import.meta.url).href,
    text: 'Atividades lúdicas e sensoriais que estimulam a autonomia, a linguagem e as primeiras descobertas em um processo suave e intencional.',
  },
]

const equipe = [
  {
    name: 'Mariana Silva',
    role: 'Coordenadora do Berçário',
    photo: new URL('../assets/imagens/BERÇÁRIO-2.jpg', import.meta.url).href,
    description: 'Responsável por garantir a rotina acolhedora e a comunicação com as famílias, sempre acompanhando o desenvolvimento individual de cada criança.',
  },
  {
    name: 'Ana Oliveira',
    role: 'Professora de Educação Infantil',
    photo: new URL('../assets/imagens/BERÇÁRIO-3.jpg', import.meta.url).href,
    description: 'Atua com atividades lúdicas, sensoriais e de vinculação, promovendo um ambiente seguro e afetivo para os primeiros aprendizados.',
  },
  {
    name: 'Patrícia Costa',
    role: 'Auxiliar de Sala',
    photo: new URL('../assets/imagens/BERÇÁRIO-4.jpg', import.meta.url).href,
    description: 'Acompanha o dia a dia das crianças com carinho, cuidando da higiene, alimentação e do bem-estar em cada momento.',
  },
]

const infraGallery = [
  new URL('../assets/imagens/BERÇÁRIO-1.jpg', import.meta.url).href,
  new URL('../assets/imagens/BERÇÁRIO-2.jpg', import.meta.url).href,
  new URL('../assets/imagens/BERÇÁRIO-3.jpg', import.meta.url).href,
  new URL('../assets/imagens/BERÇÁRIO-5.jpg', import.meta.url).href,
]

function onFormSubmitted(data) {
  console.log('Formulário enviado:', data)
}
</script>

<style scoped>
.section-about {
  background: var(--surface);
  padding: 0;
}

.about-text {
  align-self: center;
  padding-top: var(--space-9);
  padding-bottom: var(--space-8);
}

.about-image {
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-left: var(--space-8);
}

.about-image img {
  display: block;
  width: 100%;
  max-height: 700px;
  height: 90%;
  object-fit: cover;
  object-position: bottom;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.section-motivos {
  background: var(--white);
  padding-block: var(--space-8);
}

.motivo-block {
  padding-block: var(--space-5);
  border-bottom: 1px solid rgba(0,0,0,.08);
}

.motivo-block:last-child {
  border-bottom: none;
}

.motivo-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: var(--space-5);
  align-items: stretch;
  margin-top: var(--space-4);
}

.motivo-logo {
  min-height: 280px;
  display: block;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface);
}

.motivo-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.motivo-text p {
  margin: 0;
  line-height: 1.8;
}

.section-team {
  background: var(--surface);
  padding-block: var(--space-8);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-5);
}

.team-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  background: var(--white);
}

.team-card-image {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.team-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.team-card-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
}

.team-role {
  color: var(--primary);
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
}

.section-infra {
  background: var(--white);
  padding-block: var(--space-8);
}

.infra-text-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}

.infra-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
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

@media (max-width: 1024px) {
  .team-grid,
  .infra-gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .infra-text-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .team-grid,
  .infra-gallery {
    grid-template-columns: 1fr;
  }

  .motivo-content {
    flex-direction: column;
  }

  .motivo-logo {
    width: 100%;
    min-width: auto;
  }
}
</style>
