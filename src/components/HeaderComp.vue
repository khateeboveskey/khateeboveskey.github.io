<template>
  <header class="py-4 md:py-8 px-4 md:px-32 flex flex-row justify-between items-center">
    <a href="/">
      <h1 class="font-black text-2xl md:text-3xl">Khateeb</h1>
    </a>

    <!-- Hamburger Menu Button -->
    <button @click="toggleMenu" class="md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
      
        <path
          v-if="!isMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Navigation Menu -->
    <nav
      :class="{ hidden: !isMenuOpen }"
      class="fixed md:relative top-16 md:top-0 left-0 w-full md:w-auto md:bg-transparent p-4 pt-0 md:p-0 md:flex">
      <ul class="flex flex-col md:flex-row gap-4 md:gap-10 text-lg">
        <li><a href="#" class="block transition-colors border-b md:border-0 pb-2.5 md:pb-0">Home</a></li>
        <li><a href="#" class="block transition-colors border-b md:border-0 pb-2.5 md:pb-0">About</a></li>
        <li><a href="#" class="block transition-colors border-b md:border-0 pb-2.5 md:pb-0">Projects</a></li>
        <li><a href="#" class="block transition-colors border-b md:border-0 pb-2.5 md:pb-0">Contact</a></li>
      </ul>
    </nav>

    <!-- CTA Button -->
    <span class="hidden md:block">
      <ul class="flex gap-3 text-lg">
        <li>
          <CTAButton />
        </li>
      </ul>
    </span>
  </header>
</template>

<script setup lang="ts">
import CTAButton from '@/components/CTAButton.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
