<script lang="ts" setup>

/**
 * Blog Interativo
 * @author Jonas
 */

import Post from '~/components/blog/Post.vue';
import data from '~/data/posts.json';

useSeoMeta({
  title: 'Blog do Totem | Notícias, eventos e novidades',
  description: 'Acompanhe notícias, eventos e novidades das unidades do Totem em um só lugar. Descubra conteúdos relevantes para pais, alunos e comunidade.',
  ogTitle: 'Blog do Totem | Notícias, eventos e novidades',
  ogDescription: 'Acompanhe notícias, eventos e novidades das unidades do Totem em um só lugar. Descubra conteúdos relevantes para pais, alunos e comunidade.'
})

const filters = reactive({
  tags: [],
  start: null,
  end: null
})

/*
const { data: posts } = await useFetch('/api/posts', {
  query: filters
})
*/

</script>

<template>

  <div class="px-4 py-16">
    <h1 class="px-4 py-3 text-gray-600 text-6xl text-center font-bold">
      Totem Blog
    </h1>
    <p class="px-4 py-3 text-gray-600 text-center text-xl">
      Acompanhe as novidades de eventos, notícias e de nossas unidades de ensino em um só lugar pelo nosso
      blog e fique por dentro de tudo
    </p>
  </div>

  <div class="mx-auto max-w-7xl p-4 flex items-center gap-16">
    <div class="flex items-center gap-4">
      <label for="tags" class="text-gray-600">Categoria: </label>
      <input id="tags" class="input" />
    </div>

    <div class="flex items-center gap-4">
      <label for="tags" class="text-gray-600">Início: </label>
      <input type="date" class="input" />
    </div>

    <div class="flex items-center gap-4">
      <label for="tags" class="text-gray-600">Fim: </label>
      <input type="date" class="input"/>
    </div>

    <div class="flex items-center gap-4">
      <input type="checkbox" class="h-6 w-6"/>
      <label for="tags" class="text-gray-600">Destaques</label>
    </div>
  </div>

  <div class="grid-container">
    <div class="h-full" v-for="post in data" :key="post.id">
      <Post :post="post" />
    </div>
  </div>

</template>
