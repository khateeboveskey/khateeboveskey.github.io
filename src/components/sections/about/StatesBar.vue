<template>
	<div
		class="border-accent-foreground mt-10 grid w-full grid-cols-3 grid-rows-1 justify-between border-2 md:mt-16">
		<div
			class="even:bg-accent-foreground even:text-accent-background grid place-items-center p-3 sm:p-4 md:p-5"
			v-for="(si, index) in snapInfoGroup"
			:key="index">
			<span class="mb-1 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
				{{ si.content }}
			</span>
			<span class="text-sm uppercase sm:text-base md:text-lg lg:text-xl">{{ si.title }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
const snapInfoGroup = [
	{
		title: 'Born In',
		content: '8+',
	},
	{
		title: 'Experience',
		content: '3+',
	},
	{
		title: 'Date of Birth',
		content: '18+',
	},
];
</script>
