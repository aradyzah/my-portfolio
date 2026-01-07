<script lang="ts">
	// Script area (kosong dulu tidak apa-apa)
</script>

<div class="w-full max-w-8xl mx-auto px-6 py-12 md:py-24">

    <div class="bg-white/10 backdrop-blur-lg border border-white/15 shadow-2xl rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">

        <div class="relative group flex-shrink-0">
            <div class="absolute inset-0 translate-x-5 translate-y-5 rounded-[40px] border-1 border-black bg-brand-yellow z-0"></div>
            
            <div class="relative z-10 w-[280px] h-[340px] md:w-[320px] md:h-[400px] bg-white border-1 border-black rounded-[40px] overflow-hidden shadow-sm">
                <img 
                    src="/images/profile-placeholder.webp" 
                    alt="Di. Smolskii Profile" 
                    class="w-full h-full object-cover grayscale"
                />
                
                <div class="absolute bottom-4 left-4 bg-black/90 backdrop-blur-sm text-[10px] text-white px-4 py-2 rounded-full border border-white/10 font-bold tracking-widest uppercase">
                    Available for Work
                </div>
            </div>
        </div>
    
        <div class="flex-1 text-left relative z-10">
            <span class="inline-block px-4 py-2 rounded-full border-2  border-black text-[11px] font-bold uppercase tracking-[0.2em] mb-8 bg-white/30 backdrop-blur-md">
                Mahasiswa bang
            </span>
            
            <h1 class="text-6xl md:text-6xl font-black leading-[0.9] text-black mb-8 tracking-tight">
                Zahrah Adyzah
            </h1>
            
            <p class="max-w-lg text-lg md:text-xl text-black/80 leading-relaxed mb-12 font-medium">
                Crafting digital experiences that merge <span class="bg-white/40 px-2 py-0.5 rounded italic font-semibold text-black">aesthetics</span> with <span class="bg-white/40 px-2 py-0.5 rounded italic font-semibold text-black">functionality</span>. Designing the future, one pixel at a time.
            </p>
    
            <div class="flex flex-wrap items-center gap-6">
                <button class="bg-black text-white px-10 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-3 shadow-lg">
                    View Projects <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                <button class="border-2 border-black px-10 py-4 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all shadow-sm bg-white/10 backdrop-blur-sm">
                    Contact Me
                </button>
            </div>
        </div>
        
    </div>
</div>