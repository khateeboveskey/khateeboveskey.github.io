<script setup lang="ts">
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
})
</script>

<template>
  <article class="max-w-3xl mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8 text-gray-800 hover:text-gray-900">{{ post?.title }}</h1>
    <ContentRenderer class="text-lg prose" v-if="post" :value="post" />
    <div v-else class="text-red-600 text-center py-8">Sorry, an error occured!</div>
  </article>
</template>

<style>
@reference 'assets/css/main.css';

.prose {
  a:not(h1, h2, h3, h4) {
    @apply text-accent underline hover:opacity-80;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold text-xl mt-8;
  }

  h2 {
    @apply text-2xl;
  }

  h3,
  h4,
  h5,
  h6 {
    @apply text-xl;
  }

  code {
    @apply text-accent;
  }

  pre {
    @apply bg-accent-foreground text-accent-background p-4 my-4 block rounded-lg overflow-x-scroll;
  }

  ul {
    @apply list-disc ms-6
  }
}
</style>