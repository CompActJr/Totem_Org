<script lang="ts" setup>
import type { Post } from '~/types/post'
const props = defineProps<{ post: Post }>()
</script>

<template>
    <div class=" rounded-xl border border-gray-200 p-6 shadow">

      <h2 class="text-2xl font-bold">
        {{ props.post.title }}
      </h2>

      <p class="mt-3">
        {{ props.post.description }}
      </p>

    </div>
</template>