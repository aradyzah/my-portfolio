<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import FeaturedProjects from '$lib/components/sections/FeaturedProjects.svelte';
</script>

<section id="home" class="bg-brand-pink min-h-screen flex items-center">
	<Hero />
</section>

<section id="projects" class="bg-brand-dark min-h-screen">
	<div class="max-w-6xl mx-auto px-6">
		<FeaturedProjects />
	</div>
</section>