<script lang="ts">
    // Kita pakai SVG icon langsung biar ringan dan tajam
</script>

<section id="philosophy" class="w-full max-w-[93rem] mx-auto px-4 py-24">
    
    <div class="mb-16 text-center">
        <span class="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-white/30 text-xs font-bold uppercase tracking-[0.2em] mb-4 text-black/70 backdrop-blur-md">
            The Way I Work
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-black tracking-tight">
            More Than Just Code.
        </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white/40 border border-white/40 shadow-glass p-8 md:p-12 hover:bg-white/60 transition-colors duration-500">
            <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-48 h-48 rotate-12"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>
            <div class="relative z-10 h-full flex flex-col justify-between">
                <div class="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    📊
                </div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-bold mb-3 text-black">Data-Driven Logic</h3>
                    <p class="text-black/70 text-base md:text-lg leading-relaxed font-medium">
                        I don’t just build based on intuition. I dig into the data, analyze patterns, and let the numbers guide the solution. Whether it's cleaning messy datasets or optimizing code, <strong>accuracy is my priority.</strong>
                    </p>
                </div>
            </div>
        </div>

        <div class="md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white/40 border border-white/40 shadow-glass p-8 md:p-12 hover:bg-white/60 transition-colors duration-500 flex flex-col justify-between">
             <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
            
            <div>
                <div class="w-14 h-14 bg-white text-black border border-black/10 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm group-hover:rotate-12 transition-transform duration-300">
                    🚀
                </div>
                <h3 class="text-2xl font-bold mb-3 text-black">Forever Curious</h3>
                <p class="text-black/70 text-base leading-relaxed font-medium">
                    Technology moves fast, but I move faster. I have an insatiable hunger to learn—be it a new JS framework, a complex ML algorithm, or pixel art techniques. <br><br>
                    <span class="bg-white/50 px-2 py-1 rounded-md border border-white/40 text-sm font-bold text-black">"I don't know"</span> is just the start of my favorite journey.
                </p>
            </div>
        </div>

        <div class="group relative overflow-hidden rounded-[2.5rem] bg-black text-white shadow-glass p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="relative z-10">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm text-xl">
                    🔧
                </div>
                <h3 class="text-xl font-bold mb-2">Problem Solver</h3>
                <p class="text-white/60 text-sm font-medium leading-relaxed">
                    Errors and bugs aren't roadblocks; they are puzzles waiting to be solved. I have the grit to debug until it works.
                </p>
            </div>
        </div>

        <div class="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FADBE9] to-white border border-white/50 shadow-glass p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="relative z-10">
                <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm text-xl">
                    ✨
                </div>
                <h3 class="text-xl font-bold mb-2 text-black">Visual Storyteller</h3>
                <p class="text-black/60 text-sm font-medium leading-relaxed">
                    Code needs to be functional, but also beautiful. I care deeply about UI/UX and the small interactions that delight users.
                </p>
            </div>
        </div>

    </div>
</section>

<style>
    .shadow-glass {
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
    }
</style>