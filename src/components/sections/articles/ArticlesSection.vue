<template>
	<section class="px-4 md:px-8 lg:px-16 xl:px-32">
		<SectionHeader subtitle="What I've Written">
			Articles
		</SectionHeader>
		<ul class="space-y-4 md:space-y-6 lg:space-y-10">
			<li v-for="(article, index) in experience.personal.creativeWriting" :key="index">
				<a
					:href="article.url"
					target="_blank"
					class="border-accent-foreground hover:bg-accent-foreground hover:text-accent-background group flex min-h-[12rem] flex-col items-start justify-between border-2 p-4 transition-all duration-300 md:h-48 md:flex-row md:items-center md:px-6 md:py-6 lg:px-10 lg:py-9">
					<div class="mb-4 flex-1 space-y-2 md:mb-0 md:space-y-3">
						<div class="text-accent text-sm font-medium tracking-wider uppercase md:text-base">
							{{ article.category }}
							<span
								class="text-accent-foreground group-hover:text-accent-background ml-2 opacity-50">
								{{ article.datePublished }}
							</span>
						</div>
						<h3 class="line-clamp-2 text-xl font-bold md:text-2xl">{{ article.title }}</h3>
					</div>
					<div
						id="details"
						class="flex w-full flex-1 flex-col items-start justify-between gap-3 md:min-h-full md:w-auto md:items-end md:gap-3">
						<div class="line-clamp-3 text-left text-sm opacity-75 md:text-justify md:text-base">
							{{ article.description }}
						</div>
						<div class="text-accent text-sm md:text-base">Show on {{ article.urlTo }}</div>
					</div>
				</a>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/sections/SectionHeader.vue';
import { experience } from '@/assets/mydata.json';
</script>
