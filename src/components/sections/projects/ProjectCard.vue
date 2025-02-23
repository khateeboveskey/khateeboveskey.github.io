<template>
  <a :href="props.project?.githubRepo ?? '/'" class="group border-accent-foreground hover:bg-accent-foreground hover:text-accent-background flex flex-col justify-between gap-4 border-2 p-3 sm:gap-6 sm:p-4 md:gap-8 md:p-5">
    <div class="flex items-start justify-between">
      <h3 class="line-clamp-2 text-lg font-bold sm:text-xl md:text-2xl">
        {{ props.project?.name }}
      </h3>
      <span class="text-accent ml-2 text-sm whitespace-nowrap sm:text-base">
        {{ props.project?.year }}
      </span>
    </div>
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div class="bg-accent text-accent-background w-fit px-2 py-1 text-sm sm:text-base">
        {{ props.project?.type }}
      </div>
      <div class="flex flex-wrap gap-2">
        <i v-for="(skill, index) in props.project?.stack" :key="index" :class="getDevIcon(skill)" class="text-accent-foreground group-hover:text-accent-background text-xl sm:text-2xl"></i>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
});

import { skills } from '@/assets/mydata.json';

function getDevIcon(name: string): string {
  return skills.hard.find((skill) => skill.name === name)?.deviconClass ?? 'devicon-csharp-plain';
}
</script>