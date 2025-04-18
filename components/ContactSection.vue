<template>
  <section id="contact" class="bg-accent mx-4 md:mx-8 lg:mx-32 -mb-48 mt-24 md:mt-48 relative flex flex-col md:flex-row gap-6 md:gap-10">
    <div class="flex flex-col justify-between w-full md:flex-1/2 p-6 md:p-12">
      <div>
        <h2 class="text-white text-3xl md:text-4xl font-bold">Contact Me</h2>
        <p class="text-white/75 text-base md:text-lg mt-4">I am always open to new opportunities and collaborations. Feel free to reach out to me.</p>
      </div>
      <div class="space-y-4 mt-8 md:mt-10">
        <h2 class="text-lg text-white font-semibold">Or find me at:</h2>
        <ul class="flex flex-wrap gap-3 md:gap-4">
          <li v-for="(value, key, index) in accounts" :key="index">
            <a :href="value" :aria-label="`Follow on ${key}`" target="_blank" rel="noopener noreferrer" class="border-accent-background/20 hover:border-accent-background hover:bg-accent-background/10 flex h-10 w-10 items-center justify-center rounded-full border transition-all">
              <i :class="`fa-brands fa-${key} text-accent-background text-lg`"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full md:flex-1/2 bg-accent-foreground p-6 md:p-12">
      <form action="https://formspree.io/f/xovevjzq" method="POST" class="flex flex-col gap-4" @submit="validateForm">
        <label class="flex flex-col text-white">
          Your email:
          <input type="email" name="email" v-model="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" class="mt-2 p-2 bg-accent-background/10 border border-accent-background/20 text-white focus:outline-none focus:border-accent-background w-full">
          <span class="text-accent text-sm mt-1" v-if="!isEmailValid && email">Please enter a valid email address</span>
        </label>
        <label class="flex flex-col text-white">
          Your message:
          <textarea name="message" v-model="message" required minlength="10" @input="checkDirection" :dir="messageDirection" :class="['mt-2 p-2 bg-accent-background/10 border border-accent-background/20 text-white focus:outline-none focus:border-accent-background h-32 w-full', { 'font-ibm-arabic': messageDirection === 'rtl' }]"></textarea>
          <span class="text-accent text-sm mt-1" v-if="!isMessageValid && message">Message must be at least 10 characters long</span>
        </label>
        <button type="submit" :disabled="!isFormValid" :class="[
          'mt-4 py-2 px-6 transition-colors w-full md:w-auto',
          isFormValid
            ? 'bg-accent-background hover:cursor-pointer hover:bg-accent-background/90'
            : 'bg-accent-background/50 cursor-not-allowed'
        ]">Send</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { accounts } from 'assets/mydata.json';
import { ref, computed } from 'vue';

const messageDirection = ref('ltr');
const email = ref('');
const message = ref('');

const isEmailValid = computed(() => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.value);
});

const isMessageValid = computed(() => {
  return message.value.length >= 10;
});

const isFormValid = computed(() => {
  return isEmailValid.value && isMessageValid.value && email.value && message.value;
});

const checkDirection = (event: Event) => {
  const text = (event.target as HTMLTextAreaElement).value;
  const firstChar = text.trim().charAt(0);
  messageDirection.value = /[\u0600-\u06FF]/.test(firstChar) ? 'rtl' : 'ltr';
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap');

.font-ibm-arabic {
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}
</style>