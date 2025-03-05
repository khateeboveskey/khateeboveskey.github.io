<template>
  <section class="px-4 md:px-8 lg:px-16 xl:px-32">
    <SectionHeader subtitle="What greate people say about me">Social Proof</SectionHeader>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <div v-for="(reference, index) in socialProof" :key="index" class="bg-accent-background-muted">
        <div class="bg-accent p-5">
          <h4 class="text-2xl font-bold text-white mb-2 text-center">{{ reference.name }}</h4>
          <span class="text-sm text-white font-lighter block text-center">{{ reference.degree }}</span>
          <span class="text-sm text-white font-lighter block text-center">{{ reference.position }}</span>
        </div>
        <div class="relative overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote absolute -bottom-10 -right-10 w-50 h-50 opacity-5">
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          </svg>
          <p class="text-accent-foreground italic p-10 relative z-10">"{{ reference.quote }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { socialProof } from 'assets/mydata.json';
</script>