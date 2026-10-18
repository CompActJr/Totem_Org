<script lang="ts" setup>
import Grid from '~/components/ui/cards/Grid.vue';
import { useBlogPosts } from '~/composables/api/useBlog';


definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Blog do Totem | Notícias, eventos e novidades',
  description: 'Acompanhe notícias, eventos e novidades das unidades do Totem em um só lugar. Descubra conteúdos relevantes para pais, alunos e comunidade.',
  ogTitle: 'Blog do Totem | Notícias, eventos e novidades',
  ogDescription: 'Acompanhe notícias, eventos e novidades das unidades do Totem em um só lugar. Descubra conteúdos relevantes para pais, alunos e comunidade.'
})

const { posts, pending, error, refresh,  status, filters } = useBlogPosts();


</script>

<template>
  <main v-if="posts">

    <div class="px-4 py-16">
      <h1 class="px-4 py-3 text-gray-600 text-6xl text-center font-bold">
        Totem Blog
      </h1>
      <p class="px-4 py-3 text-gray-600 text-center text-xl">
        Acompanhe as novidades de eventos, notícias e de nossas unidades de ensino em um só lugar pelo nosso
        blog e fique por dentro de tudo
      </p>
    </div>

    <div class="mx-auto max-w-7xl p-4 flex flex-col md:flex-row lg:flex-row items-center gap-16">
      <div class="flex items-center gap-4">
        <label for="categoria" class="text-gray-600">Categoria: </label>
        <input id="categoria" v-model="filters.categoria" class="input" />
      </div>

      <div class="flex items-center gap-4">
        <input type="checkbox" v-model="filters.destaque" class="h-6 w-6" />
        <label class="text-gray-600">Destaques</label>
      </div>
    </div>

    <Grid>
      <Post v-for="post in posts" :key="post._id" :post="post" />
    </Grid>
  </main>

</template>
