<template>
  <section class="news">
    <!-- <img :src="decoBgImage" alt="" class="news-bg-deco" aria-hidden="true" /> -->

    <div class="container news-inner">
      <NewsHeader
        title-main="Calendário"
        title-accent="de Eventos"
        subtitle="Fique por dentro de tudo que acontece no Colégio Totem."
        align="left"
      />

      <EventList
        :events="upcomingEvents"
        variant="upcoming"
        @toggle="toggleUpcoming"
      />

      <NewsHeader
        title-main="Eventos"
        title-accent="Passados"
        size="sm"
        align="left"
      />

      <EventList
        :events="pastEvents"
        variant="past"
        @toggle="togglePast"
      />

      <NewsBanner />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import NewsHeader from '@/components/news/NewsHeader.vue'
import EventList from '@/components/news/EventList.vue'
import NewsBanner from '@/components/news/NewsBanner.vue'



const upcomingEvents = ref([
  {
    day: '31',
    month: 'DEZ',
    title: 'Mostra Cultural',
    category: 'Ensino Infantil',
    image: '/images/img1.jpg',
    expanded: false,
    description: '',
    time: '',
    location: '',
  },
  {
    day: '31',
    month: 'DEZ',
    title: 'Feira de Profissões',
    category: 'Ensino Fundamental e Médio',
    image: '/images/img2.jpg',
    expanded: false,
    description:
      'Um dia para explorar possibilidades, conhecer histórias inspiradoras e construir o futuro com ainda mais propósito.',
    time: '14h às 18h',
    location: 'Unidade Cachoeira do Sul',
  },
])

/* -----------------------------------------------------
   EVENTOS PASSADOS
----------------------------------------------------- */
const pastEvents = ref([
  {
    day: '10',
    month: 'NOV',
    title: 'Dia da Criança',
    category: 'Ensino Infantil',
    image: '/images/img3.jpg',
    expanded: false,
    description: '',
    time: '',
    location: '',
  },
  {
    day: '20',
    month: 'OUT',
    title: 'Semana do Aluno',
    category: 'Ensino Fundamental e Médio',
    image: '/images/img4.jpg',
    expanded: false,
    description:
      'Atividades especiais, desafios e momentos inesquecíveis para celebrar quem faz a diferença todos os dias.',
    time: '8h às 12h',
    location: 'Unidade Berçário Cachoeira do Sul',
  },
])

function toggleUpcoming(index) {
  upcomingEvents.value[index].expanded = !upcomingEvents.value[index].expanded
}

function togglePast(index) {
  pastEvents.value[index].expanded = !pastEvents.value[index].expanded
}
</script>

<style scoped>
.news {
  position: relative;

  background: var(--surface);

  overflow: hidden;
}

.news-bg-deco {
  position: absolute;
  top: -40px;
  left: -60px;

  width: 420px;
  height: 420px;

  opacity: .35;

  pointer-events: none;
}

.news-inner {
  position: relative;
  z-index: 1;
}
</style>