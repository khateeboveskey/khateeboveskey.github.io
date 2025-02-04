<template>
	<section class="">
		<div class="container mx-auto px-4">
			<SectionHeader subtitle="What I've Made">Projects</SectionHeader>
			<p class="text-accent m-5 text-center">Tap to get to GitHub repo</p>
			<div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
				<a
					v-for="(project, index) in projects"
					:href="project.githubRepo"
					:key="index"
					class="group border-accent-foreground hover:bg-accent-foreground hover:text-accent-background flex flex-col justify-between gap-4 border-2 p-3 sm:gap-6 sm:p-4 md:gap-8 md:p-5">
					<div class="flex items-start justify-between">
						<h3 class="line-clamp-2 text-lg font-bold sm:text-xl md:text-2xl">
							{{ project.name }}
						</h3>
						<span class="text-accent ml-2 text-sm whitespace-nowrap sm:text-base">
							{{ project.year }}
						</span>
					</div>
					<div class="flex flex-wrap items-center justify-between gap-2">
						<div class="bg-accent text-accent-background w-fit px-2 py-1 text-sm sm:text-base">
							{{ project.type }}
						</div>
						<div class="flex flex-wrap gap-2">
							<i
								v-for="(skill, index) in project.stack"
								:key="index"
								:class="getDevIcon(skill)"
								class="text-accent-foreground group-hover:text-accent-background text-xl sm:text-2xl"></i>
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/sections/SectionHeader.vue';
import { projects, skills } from '@/assets/mydata.json';

function getDevIcon(name: string): string {
	return skills.hard.find((skill) => skill.name === name)?.deviconClass ?? 'devicon-csharp-plain';
}
</script>
