<template>
	<div class="border-accent-foreground mt-10 grid w-full grid-cols-3 grid-rows-1 justify-between border-2 md:mt-16">
		<div class="even:bg-accent-foreground even:text-accent-background grid place-items-center p-3 sm:p-4 md:p-5" v-for="(si, index) in snapInfoGroup" :key="index">
			<span class="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
				{{ si.content }}+
			</span>
			<span class="text-center text-sm tracking-wider uppercase sm:text-base md:text-lg lg:text-xl">
				{{ si.title }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { projects } from '@/assets/mydata.json';

const experienceYears: number = new Date().getFullYear() - projects[projects.length - 1].year;

const snapInfoGroup = [
	{
		title: 'Projects',
		content: projects.length,
	},
	{
		title: 'Years Experience',
		content: `${experienceYears}`,
	},
	{
		title: 'Student Trained',
		content: '100',
	},
];
</script>
