<script lang="ts">
	import { projects } from '$lib/data/projects';
</script>

<div class="py-20">
	<div class="flex justify-between items-end mb-12">
		<div>
			<span class="text-accent-pink uppercase tracking-widest text-xs font-bold">Selected Works</span>
			<h2 class="text-5xl font-bold text-white mt-2">Featured Projects</h2>
		</div>
		<a href="/all-projects" class="text-white hover:text-accent-pink transition-colors text-sm">
			See All Projects →
		</a>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
		{#each projects as project}
			<div class="group cursor-pointer">
				<div class="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1A1A1A] border border-white/10">
					<img 
						src={project.image} 
						alt={project.title} 
						class="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
					/>
					<span class="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/20">
						{project.category}
					</span>
				</div>
				
				<div class="mt-6">
					<h3 class="text-2xl font-bold text-white">{project.title}</h3>
					<p class="text-gray-400 mt-2 line-clamp-2">{project.description}</p>
					<div class="flex gap-3 mt-4">
						{#each project.tags as tag}
							<span class="text-[10px] text-gray-500 uppercase tracking-wider">• {tag}</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>