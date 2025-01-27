<template>
	<div>
		<span
			v-if="props.text"
			class="border-accent-foreground text-accent-background bg-accent-foreground border-2 px-4 py-2 text-base sm:px-6 sm:py-2.5 sm:text-lg">
			{{ props.text }}
		</span>
		<a
			class="border-accent-foreground hover:border-accent hover:bg-accent hover:text-accent-background border-2 px-6 py-2 text-base sm:px-8 sm:py-2.5 sm:text-lg"
			href="mailto:khateeboveskey@gmail.com">
			Let's talk
		</a>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	text?: string;
}>();
</script>
