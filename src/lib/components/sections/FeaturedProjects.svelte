<script lang="ts">
    import type { Project } from '$lib/data/projects';
    let { projects }: { projects: Project[] } = $props();
</script>

<section id="projects" class="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 flex items-center justify-center min-h-[90vh]">
    
    <div class="transform-gpu will-change-transform w-full h-[80vh] bg-white/50 border border-white/60 shadow-xl rounded-[3rem] overflow-hidden flex flex-col relative">

        <div class="p-8 md:p-10 border-b border-white/30 flex justify-between items-end bg-white/40 z-20 shrink-0">
            <div>
                <span class="block text-xs font-bold uppercase tracking-[0.3em] mb-2 opacity-60">Selected Works</span>
                <h2 class="text-4xl md:text-5xl font-black tracking-tight">Featured Projects</h2>
            </div>
            <div class="hidden md:block text-right opacity-60">
                <p class="text-sm font-medium">Scroll to explore</p>
                <div class="animate-bounce mt-2 text-xl">↓</div>
            </div>
        </div>

        <div 
            data-lenis-prevent 
            class="flex-1 overflow-y-auto p-6 md:p-10 space-y-6 custom-scrollbar scroll-smooth overscroll-contain"
        >
            
            {#each projects as project (project.id)}
                <div class="group relative bg-white/60 border border-white/50 rounded-[2.5rem] p-8 hover:bg-white/90 transition-colors duration-200 cursor-pointer shadow-sm">
                    <div class="flex flex-col md:flex-row gap-6 justify-between items-start">
                        <div class="flex-1 space-y-3">
                            <div class="flex items-center gap-3">
                                <span class="{project.color} w-3 h-3 rounded-full animate-pulse"></span>
                                <span class="text-xs font-bold uppercase tracking-widest opacity-60">{project.category}</span>
                            </div>
                            <h3 class="text-2xl md:text-3xl font-bold leading-none">{project.title}</h3>
                            <p class="text-base opacity-80 leading-relaxed max-w-xl">{project.description}</p>
                            
                            <div class="flex flex-wrap gap-2 pt-2">
                                {#each project.tech as tech}
                                    <span class="px-3 py-1 rounded-full border border-black/10 bg-white/30 text-[10px] font-bold uppercase tracking-wider">{tech}</span>
                                {/each}
                            </div>
                        </div>
                        <div class="flex flex-col items-end gap-2">
                            <span class="font-mono text-4xl font-black opacity-10">{project.year}</span>
                            <button class="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">↗</button>
                        </div>
                    </div>
                </div>
            {/each}

            <div class="py-12 text-center opacity-50 text-sm font-medium tracking-widest uppercase">
                More projects coming soon...
            </div>

        </div>

    </div>
</section>

<style>
    .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(0, 0, 0, 0.2) transparent; }
    .custom-scrollbar::-webkit-scrollbar { width: 8px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; margin-block: 20px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(0, 0, 0, 0.1); border-radius: 20px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(0, 0, 0, 0.3); }
</style>