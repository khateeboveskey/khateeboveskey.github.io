<template>
	<div
		class="bg-accent-foreground text-accent-background z-20 w-screen -translate-x-4 -translate-y-12 scale-x-125 -rotate-[3deg] overflow-hidden py-4 text-base uppercase sm:py-6 sm:text-lg md:py-8 md:text-xl">
		<div
			class="scale-x-80 whitespace-nowrap"
			:style="{ transform: `translateX(${scrollPosition}px)` }"
			style="transition-duration: 0ms">
			<template v-for="(title, index) in duplicatedTitles" :key="index">
				{{ title }}
				<MyLogo class="mx-4 inline-block h-4 -translate-y-0.5 sm:mx-6 sm:h-5 md:mx-10 md:h-6" />
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import MyLogo from '@/components/MyLogo.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const titles = ['Web Developer', 'UI/UX Designer', 'Content Creator', 'Author'];
const scrollPosition = ref(0);
const duplicatedTitles = computed(() => [...titles, ...titles, ...titles]);

const handleScroll = () => {
	scrollPosition.value = -window.scrollY * 0.5;
	if (scrollPosition.value <= -1000) {
		scrollPosition.value = 0;
	}
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>
