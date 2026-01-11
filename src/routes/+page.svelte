<script lang="ts">
    // 1. IMPORT NAVBAR DI SINI (Wajib!)
    import Navbar from '$lib/components/shared/Navbar.svelte'; 
    import Hero from '$lib/components/sections/Hero.svelte';
    import FeaturedProjects from '$lib/components/sections/FeaturedProjects.svelte';
    import { projectsData } from '$lib/data/projects';
</script>

<Navbar />

<main class="w-full">
    <Hero />
    <FeaturedProjects projects={projectsData} />
</main>