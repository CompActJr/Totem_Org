<script lang="ts" setup>

/**
 * Blog Interativo
 * @author Jonas
 */

import Post from '~/components/blog/Post.vue';
import data from '~/data/posts.json';
import type { PostType } from '~/types/post';

useSeoMeta({
  title: 'Blog do Totem | Notícias, eventos e novidades',
  description: 'Acompanhe notícias, eventos e novidades das unidades do Totem em um só lugar. Descubra conteúdos relevantes para pais, alunos e comunidade.',
  ogTitle: 'Blog do Totem | Notícias, eventos e novidades',
  ogDescription: 'Acompanhe notícias, eventos e novidades das unidades do Totem em um só lugar. Descubra conteúdos relevantes para pais, alunos e comunidade.'
})

const filters = reactive({
  categoria: '',
  order: 'recentes' as 'recentes' | 'antigos',
  destaque: true
})

const applyFiterDate = (posts: PostType[]) => {
  switch (filters.order) {

    case 'antigos':
      return posts.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      )

    case 'recentes':
    default:
      return posts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
  }
}

const applyFilterDestaques = (posts: PostType[]) => {
  if (!filters.destaque) return posts

  return posts.sort(
    (a, b) => Number(b.destaque) - Number(a.destaque)
  )
}

const filteredPosts = computed(() => {
  let posts = [...data]

  posts = applyFiterDate(posts)
  posts = applyFilterDestaques(posts)

  return posts
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

  <div class="mx-auto max-w-7xl p-4 flex flex-col iten md:flex-row lg:flex-row items-center gap-16">
    <div class="flex items-center gap-4">
      <label for="tags" class="text-gray-600">Categoria: </label>
      <input id="tags" class="input" />
    </div>

    <div class="flex items-center gap-2">
      <img src="/icons/i--calendar.svg" alt="calendar" />
      <input type="radio" class="h-6 w-6" id="recentes" value="recentes" v-model="filters.order" />
      <label for="recentes">Mais recentes</label>
    </div>

    <div class="flex items-center gap-2">
      <img src="/icons/i--calendar.svg" alt="calendar" />
      <input type="radio" class="h-6 w-6" id="antigos" value="antigos" v-model="filters.order" />
      <label for="antigos">Mais antigos</label>
    </div>

    <div class="flex items-center gap-4">
      <input type="checkbox" v-model="filters.destaque"  class="h-6 w-6" />
      <label for="tags" class="text-gray-600">Destaques</label>
    </div>
  </div>

  <div class="grid-container">
    <div class="h-full" v-for="post in filteredPosts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>

</template>
