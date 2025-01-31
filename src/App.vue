<template>
	<HeaderComp />
	<HeroSection />
	<TitlesBar />
	<AboutSection />
	<ProfessionalExpSection />
	<ArticlesSection />
	<SkillsSection />
	<ResumeSection />
	<FooterComp />
</template>

<script setup lang="ts">
import HeaderComp from '@/components/HeaderComp.vue';
import HeroSection from '@/components/HeroSection.vue';
import TitlesBar from '@/components/TitlesBar.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import ProfessionalExpSection from '@/components/sections/experience/ProfessionalExpSection.vue';
import ArticlesSection from '@/components/sections/articles/ArticlesSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ResumeSection from '@/components/sections/ResumeSection.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>
