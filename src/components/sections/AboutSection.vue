<template>
	<section id="about" class="flex flex-col px-4 pt-4 sm:pt-12 md:px-32 md:pt-24">
		<div class="flex flex-col justify-start gap-10 md:flex-row md:gap-32">
			<div class="flex flex-col gap-8">
				<span
					class="text-accent-foreground text-center text-xl font-semibold text-nowrap md:text-left md:text-3xl">
					Abdulrahman
					<MyLogo class="mx-2 inline-block h-5 -translate-y-0.5 sm:mx-4 sm:h-5 md:mx-2 md:h-5" />
					Al-Khateeb
				</span>
				<h2 class="text-accent-foreground text-left text-4xl font-bold md:text-left md:text-5xl">
					Crafting digital experiences with passion and precision.
				</h2>
			</div>
			<div class="flex flex-col justify-between gap-8">
				<p class="text-xl md:text-2xl">
					{{ objective }}
				</p>
				<div class="flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0">
					<SnapInfo v-for="si in snapInfoGroup" :key="si.title" :title="si.title">
						{{ si.content }}
					</SnapInfo>
				</div>
			</div>
		</div>
		<StatesBar />
	</section>
</template>

<script setup lang="ts">
import MyLogo from '@/components/MyLogo.vue';
import SnapInfo from '@/components/sections/about/SnapInfo.vue';
import StatesBar from '@/components/sections/about/StatesBar.vue';
import { personalInfo, objective } from '@/assets/mydata.json';

const BD = new Date(personalInfo.dateOfBirth);
const formattedBD = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}).format(BD);

const snapInfoGroup = [
	{
		title: 'Born In',
		content: personalInfo.address,
	},
	{
		title: 'Date of Birth',
		content: formattedBD,
	},
];
</script>
