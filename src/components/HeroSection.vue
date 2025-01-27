<template>
	<section
		class="flex flex-col items-center justify-between px-4 py-4 sm:py-12 md:flex-row md:px-32 md:py-8">
		<div class="mb-8 text-center md:mb-0 md:w-1/3 md:text-left">
			<h1
				class="m-4 mb-4 text-3xl font-bold uppercase sm:m-0 sm:mb-6 sm:text-4xl md:text-4xl lg:text-5xl">
				Hi, I'm Khateeb.
				<br />
				A Full-stack Developer
				<MyLogo class="inline-block h-5 -translate-y-1 sm:h-6 md:h-8 lg:h-10" />
				based in Yemen
			</h1>
			<p class="mb-6 text-base opacity-90 sm:mb-8 sm:text-lg md:text-2xl">
				I code, design, and do good stuff.
			</p>
			<CTAButton text="Got an idea?" class="w-full sm:w-auto" />
		</div>
		<div class="relative w-full md:me-14 md:w-1/2">
			<MyLogo
				class="stroke-accent absolute inset-0 z-0 h-full w-full overflow-visible fill-transparent stroke-20" />
			<img
				src="@/assets/me.png"
				alt="Me"
				class="relative z-10 mx-auto w-full max-w-[300px] saturate-0 sm:max-w-[300px] md:max-w-sm" />
		</div>
	</section>
</template>

<script setup lang="ts">
import CTAButton from '@/components/CTAButton.vue';
import MyLogo from '@/components/MyLogo.vue';
</script>
