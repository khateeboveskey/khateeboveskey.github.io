<template>
	<div class="mx-auto mb-16 space-y-2 text-center">
		<MyLogo class="mx-auto mb-3 w-10" />
		<h2 class="text-4xl font-black"><slot /></h2>
		<span v-if="props.subtitle" class="font-medium tracking-widest uppercase">
			{{ props.subtitle }}
		</span>
	</div>
</template>

<script setup lang="ts">
import MyLogo from '@/components/MyLogo.vue';

const props = defineProps({
	subtitle: String,
});
</script>
