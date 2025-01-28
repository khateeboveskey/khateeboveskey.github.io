<template>
	<div
		class="border-accent-foreground my-32 grid w-full grid-cols-3 grid-rows-1 justify-between border-2">
		<div
			class="even:bg-accent-foreground even:text-accent-background grid place-items-center py-10"
			v-for="(si, index) in snapInfoGroup"
			:key="index">
			<span class="mb-4 text-6xl font-bold">{{ si.content }}</span>
			<span class="text-xl uppercase">{{ si.title }}</span>
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
