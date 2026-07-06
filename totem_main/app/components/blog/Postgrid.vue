<script setup lang="ts">
    import type { Post } from "~/types/post";
    defineProps<{posts: Post[]}>()
</script>

<template>
  <section class="mx-auto max-w-7xl h-screen px-6 py-10">

    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div  class="h-full" v-for="post in posts" :key="post.id">
        <slot :post="post" />
      </div>
    </div>

  </section>
</template>