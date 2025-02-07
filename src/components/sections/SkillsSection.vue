<template>
	<section class="px-4 md:px-8 lg:px-16 xl:px-32">
		<SectionHeader subtitle="What I can deal with">Skills</SectionHeader>
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-8">
			<div
				v-for="(skill, index) in skills.hard"
				:key="skill.name"
				class="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent-background grid aspect-square place-items-center border-2 p-4"
				:title="skill.name"
				@mouseover="hoveredIndex = index"
				@mouseleave="hoveredIndex = null">
				<i
					:class="[
						'text-5xl md:text-6xl lg:text-7xl',
						{ colored: hoveredIndex === index },
						skill.deviconClass,
					]"></i>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionHeader from '@/components/sections/SectionHeader.vue';
import { skills } from '@/assets/mydata.json';

const hoveredIndex = ref<number | null>(null);
</script>
