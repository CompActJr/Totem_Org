<script setup lang="ts">
import type { PostType } from '~/types/post'
import Post from './Post.vue'

withDefaults(defineProps<{
  posts: PostType[]
}>(), {
  posts: () => []
})
</script>

<template>
  <div class="grid-container">
    <div class="h-full" v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>
