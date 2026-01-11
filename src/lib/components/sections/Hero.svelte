<script lang="ts">
    import heroImage from '$lib/assets/images/webcam-toy-photo242.jpg';
    import { isPlaying, currentTime, duration, formatTime } from '$lib/stores/audioStore';
    import { spring } from 'svelte/motion';
    
    // IMPORT MARQUEE
    import TechMarquee from '$lib/components/shared/TechMarquee.svelte';

    let isFlipped = false;

    // --- LOGIKA TILT (Gerakan Miring) ---
    let rotateX = spring(0, { stiffness: 0.15, damping: 0.4 });
    let rotateY = spring(0, { stiffness: 0.15, damping: 0.4 });

    function handleMouseMove(event: MouseEvent) {
        const card = event.currentTarget as HTMLDivElement;
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        rotateX.set(-y / 15);
        rotateY.set(x / 15);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
    }

    // --- LOGIKA AUDIO ---
    const waveform = [40, 60, 30, 80, 50, 90, 40, 70, 30, 60, 80, 40, 50, 90, 30, 70, 40, 60, 80, 30, 50, 90, 40, 70, 30, 60, 40, 80, 50, 30];

    function handleSeek(event: MouseEvent) {
        event.stopPropagation();
        const container = event.currentTarget as HTMLDivElement;
        const rect = container.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, clickX / rect.width));
        if ($duration > 0) $currentTime = percentage * $duration;
    }

    function togglePlay(event: MouseEvent) {
        event.stopPropagation();
        $isPlaying = !$isPlaying;
    }
</script>

<section id="home" class="w-full flex flex-col items-center justify-center pt-24 pb-10 px-4 mt-8">

    <div class="transform-gpu will-change-transform w-[95%] max-w-[93rem] 
                bg-gradient-to-br from-white/40 to-white/5 
                border-[5px] border-white/30 
                shadow-glass rounded-[3rem] 
                flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-24 
                px-8 py-20 md:px-12 md:py-20 relative overflow-hidden">

        <div 
            class="relative group flex-shrink-0 z-20 w-[300px] cursor-pointer [perspective:1000px]"
            onmousemove={handleMouseMove}
            onmouseleave={handleMouseLeave}
            onclick={() => isFlipped = !isFlipped}
            role="button"
            tabindex="0"
            onkeydown={() => {}}
        >
            
            <div 
                class="absolute top-[-15px] right-[-15px] z-30 animate-float pointer-events-none transition-opacity duration-300"
                class:opacity-0={isFlipped}
            >
                <span class="bg-[#FADBE9] text-black text-[10px] font-black px-3 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] rotate-12 tracking-wider">
                    FLIP !
                </span>
            </div>

            <div 
                class="w-full h-full will-change-transform"
                style="transform: rotateX({$rotateX}deg) rotateY({$rotateY}deg);"
            >
                
                <div 
                    class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
                    class:rotate-y-180={isFlipped}
                >
                    
                    <div class="relative w-full h-full [backface-visibility:hidden]">
                        <div class="w-full bg-[#1a1a1a] p-5 rounded-[2.5rem] shadow-2xl border border-white/5 h-full flex flex-col">
                            
                            <div class="w-full aspect-[4/5] bg-gray-800 rounded-[2rem] overflow-hidden mb-5 relative shadow-inner shrink-0">
                                <img 
                                    src={heroImage} 
                                    alt="Zahrah Adyzah" 
                                    class="w-full h-full object-cover opacity-90 pointer-events-none"
                                />
                                <div class="absolute inset-0 bg-black/10"></div>
                            </div>

                            <div class="flex flex-col gap-3 px-1 pb-1 flex-1 justify-end">
                                <div class="flex justify-between items-end">
                                    <div class="flex flex-col">
                                        <h3 class="text-white font-bold text-lg leading-tight tracking-tight">Understand</h3>
                                        <p class="text-white/50 text-xs font-medium uppercase tracking-wider mt-0.5">Keshi</p>
                                    </div>
                                    <div class="text-[10px] font-mono font-medium text-white/40 tracking-widest mb-1">
                                        {formatTime($currentTime)}
                                    </div>
                                </div>

                                <div class="flex items-center gap-3 mt-1">
                                    <button 
                                        onclick={togglePlay}
                                        class="w-10 h-10 flex-shrink-0 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform bg-white/10 rounded-full border border-white/10 active:scale-95 group/btn hover:bg-white/20"
                                    >
                                        {#if $isPlaying}
                                            <div class="flex gap-1 h-3.5 items-center">
                                                <span class="w-1 h-full bg-[#FADBE9] rounded-full animate-pulse"></span>
                                                <span class="w-1 h-full bg-[#FADBE9] rounded-full animate-pulse delay-75"></span>
                                            </div>
                                        {:else}
                                            <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-[#FADBE9] ml-0.5">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        {/if}
                                    </button>

                                    <div 
                                        role="slider" 
                                        tabindex="0"
                                        aria-valuenow={$currentTime}
                                        aria-valuemax={$duration}
                                        aria-valuemin={0}
                                        onclick={handleSeek}
                                        onkeydown={() => {}}
                                        class="flex-1 flex items-center justify-between h-8 gap-[2px] opacity-80 cursor-pointer group/wave relative z-10"
                                    >
                                        <div class="absolute inset-0 z-20"></div>
                                        {#each waveform as height, i}
                                            {@const progressPercent = ($currentTime / $duration) * 100}
                                            {@const barPercent = (i / waveform.length) * 100}
                                            {@const isActive = barPercent <= progressPercent}
                                            <div 
                                                class="w-1 rounded-full transition-all duration-300 ease-out group-hover/wave:opacity-100 group-hover/wave:scale-y-110"
                                                style="height: {height}%; background-color: {isActive ? '#FADBE9' : 'rgba(255,255,255,0.1)'}; animation: {$isPlaying ? `bounce 1s infinite ${i * 0.05}s` : 'none'}"
                                            ></div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div class="w-full h-full bg-[#1a1a1a] p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-center border border-white/5 relative overflow-hidden">
                            
                            <div class="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[#FADBE9]/10 rounded-full blur-3xl"></div>
                            <div class="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

                            <div class="relative z-10 flex flex-col items-center h-full justify-center">
                                <span class="text-[#FADBE9] text-3xl mb-4 block animate-bounce">🎵</span>
                                <h3 class="text-white font-bold text-xl mb-3 tracking-tight">Why this track?</h3>
                                <p class="text-white/70 text-sm leading-relaxed font-medium">
                                    "I chose 'Understand' because its melancholic yet driving beat puts me in a flow state. It’s the perfect background noise—calm enough to focus, but energetic enough to keep the momentum going when debugging tricky code."
                                </p>
                                <div class="mt-8">
                                    <span class="text-xs text-white/30 uppercase tracking-[0.2em] animate-pulse">Tap to flip back</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="absolute -inset-4 bg-black/20 rounded-[3rem] blur-xl -z-10 translate-y-4 transition-all duration-500 group-hover:translate-y-6 group-hover:blur-2xl group-hover:bg-black/30"></div>
        </div>
    
        <div class="flex-1 max-w-xl text-center lg:text-left relative z-10">
            <span class="inline-block px-5 py-2 rounded-full border border-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white/20 text-black/80">
                Data Science Enthusiast
            </span>
            <h1 class="text-5xl md:text-7xl font-black leading-tight text-black mb-6 tracking-tight drop-shadow-sm">
                Zahrah Adyzah
            </h1>
            <p class="text-lg md:text-xl text-black/70 leading-relaxed mb-10 font-medium">
                Fuelled by high curiosity and a passion for growth, I see data as a playground for discovery. I combine <span class="bg-white/40 border border-white/30 px-2 py-0.5 rounded italic font-semibold text-black">technical rigor</span> with an <span class="bg-white/40 border border-white/30 px-2 py-0.5 rounded italic font-semibold text-black">open mind</span> to uncover meaningful patterns.
            </p>
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-5">
                <button class="bg-black text-white px-10 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-3 shadow-lg cursor-pointer border border-transparent">
                    View Projects <span class="text-xl">→</span>
                </button>
                <button class="px-10 py-4 rounded-full font-bold text-sm hover:bg-white/40 transition-all shadow-sm bg-white/10 border border-white/30 cursor-pointer text-black">
                    Contact Me
                </button>
            </div>
        </div>
        
    </div>

    <div class="mt-8 w-full max-w-[93rem]">
        <TechMarquee />
    </div>

</section>

<style>
    .shadow-glass {
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
    }
    
    @keyframes bounce {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(1.4); }
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(12deg); }
        50% { transform: translateY(-5px) rotate(12deg); }
    }

    .animate-float {
        animation: float 2s ease-in-out infinite;
    }

    .rotate-y-180 {
        transform: rotateY(180deg);
    }
</style>