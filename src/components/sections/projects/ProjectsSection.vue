<template>
	<section id="projects">
		<div class="container mx-auto px-4">
			<SectionHeader subtitle="What I've Made">Projects</SectionHeader>
			<p class="text-accent mb-5 text-center selection:text-white">Tap to get to GitHub repo</p>
			<div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
				<ProjectCard v-for="(project, index) in projects" :project="project" :key="index" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/sections/SectionHeader.vue';
import ProjectCard from '@/components/sections/projects/ProjectCard.vue';
import { projects } from '@/assets/mydata.json';
</script>
