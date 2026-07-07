<script lang="ts" setup>

/**
 * Blog Interativo
 * @author Jonas
 */

import Post from '~/components/blog/Post.vue';
import Postgrid from '~/components/blog/Postgrid.vue';
import Search from '~/components/blog/Search.vue';
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

  <div class="px-4 py-32">
    <h1 class="px-4 py-3 text-gray-600 text-6xl text-center font-bold">
      Totem Blog
    </h1>
    <p class="px-4 py-3 text-gray-600 text-center text-xl">
      Acompanhe as novidades de eventos, notícias e de nossas unidades de ensino em um só lugar pelo nosso
      blog e fique por dentro de tudo
    </p>
  </div>

  <Search />

  <Postgrid :posts="data" v-slot="{ post }">
    <Post :post="post" />
  </Postgrid>

</template>
