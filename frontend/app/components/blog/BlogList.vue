<script setup lang="ts">

import type { PostType } from '~/types/blog.types.ts';
import Post from './Post.vue'

withDefaults(defineProps<{
  posts: PostType[]
}>(), {
  posts: () => []
})
</script>

<template>
  <div class="mx-auto grid min-h-250 max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-3">
    <div class="h-full" v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>
