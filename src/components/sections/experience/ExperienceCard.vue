<template>
	<a
		:href="props.companyUrl"
		target="_blank"
		class="border-accent-foreground hover:bg-accent-foreground hover:text-accent-background group flex flex-row items-center justify-between border-2 px-10 py-12">
		<span class="flex flex-row gap-5">
			<!-- Number -->
			<span
				class="bg-accent-foreground text-accent-background group-hover:bg-accent aspect-square px-5 py-3.5 text-xl font-semibold">
				{{ props.order }}
			</span>
			<!-- Job Titles -->
			<span>
				<h3 class="text-2xl font-bold">{{ props.jobTitle }}</h3>
				<p class="underline">{{ props.company }}</p>
			</span>
		</span>
		<!-- Year -->
		<span class="space-x-4 text-lg font-medium">
			<span class="text-lg tracking-wider uppercase">{{ props.category }}</span>
			<span class="text-accent">{{ props.year }}</span>
		</span>
	</a>
</template>

<script setup lang="ts">
const props = defineProps({
	jobTitle: String,
	company: String,
	category: String,
	companyUrl: String,
	year: Number,
	order: Number,
});
</script>
