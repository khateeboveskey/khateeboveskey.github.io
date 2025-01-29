<template>
	<section class="px-4 md:px-32">
		<SectionHeader subtitle="What I've done">Professional Experience</SectionHeader>
		<ul class="space-y-11">
			<li v-for="(exp, index) in experience.professional" :key="index">
				<ExperienceCard
					:job-title="exp.position"
					:company="exp.company"
					:company-url="exp.website"
					:order="index + 1"
					:year="parseInt(exp.startDate.slice(-4))"
					:category="'test'" />
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/sections/SectionHeader.vue';
import ExperienceCard from './ExperienceCard.vue';
import { experience } from '@/assets/mydata.json';
</script>
