<script lang="ts">
    import heroImage from '$lib/assets/webcam-toy-photo242.jpg';
    
    // IMPORT STORE & FORMATTER
    import { isPlaying, currentTime, duration, formatTime } from '$lib/stores/audioStore';

    // Waveform data (Tinggi garis)
    const waveform = [40, 60, 30, 80, 50, 90, 40, 70, 30, 60, 80, 40, 50, 90, 30, 70, 40, 60, 80, 30, 50, 90, 40, 70, 30, 60, 40, 80, 50, 30];

    // LOGIKA SEEKING (INTERAKTIF)
    function handleSeek(event: MouseEvent) {
        // Ambil elemen container waveform yang diklik
        const container = event.currentTarget as HTMLDivElement;
        
        // Ambil posisi & ukuran container
        const rect = container.getBoundingClientRect();
        
        // Hitung posisi klik relatif terhadap container (0 sampai lebar container)
        const clickX = event.clientX - rect.left;
        
        // Hitung persentase (0.0 sampai 1.0)
        const percentage = Math.max(0, Math.min(1, clickX / rect.width));
        
        // Update waktu lagu (Persentase * Total Durasi)
        // Store akan otomatis memberitahu Layout untuk lompat ke detik ini
        if ($duration > 0) {
            $currentTime = percentage * $duration;
        }
    }
</script>

<section id="home" class="w-full max-w-[85rem] mx-auto px-4 md:px-4 min-h-[90vh] flex items-center justify-center py-14">

    <div class="transform-gpu will-change-transform w-full 
                bg-gradient-to-br from-white/40 to-white/5 
                border-2 border-white/30 
                shadow-glass rounded-[3rem] 
                flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-24 
                px-8 py-20 md:px-12 md:py-32 relative overflow-hidden">

        <div class="relative group flex-shrink-0 z-20">
            
            <div class="w-[300px] bg-[#1a1a1a] p-5 rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1 cursor-default">
                
                <div class="w-full aspect-[4/5] bg-gray-800 rounded-[2rem] overflow-hidden mb-5 relative shadow-inner">
                    <img 
                        src={heroImage} 
                        alt="Zahrah Adyzah" 
                        class="w-full h-full object-cover opacity-90"
                    />
                    <div class="absolute inset-0 bg-black/10"></div>
                </div>

                <div class="flex flex-col gap-3 px-1 pb-1">
                    
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
                            onclick={() => $isPlaying = !$isPlaying}
                            class="w-10 h-10 flex-shrink-0 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform bg-white/10 rounded-full border border-white/10 active:scale-95 group"
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
                            onkeydown={(e) => { if(e.key === 'ArrowRight') $currentTime += 5; if(e.key === 'ArrowLeft') $currentTime -= 5; }}
                            class="flex-1 flex items-center justify-between h-8 gap-[2px] opacity-80 cursor-pointer group/wave relative z-10"
                        >
                            <div class="absolute inset-0 z-20"></div>

                            {#each waveform as height, i}
                                {@const progressPercent = ($currentTime / $duration) * 100}
                                {@const barPercent = (i / waveform.length) * 100}
                                {@const isActive = barPercent <= progressPercent}

                                <div 
                                    class="w-1 rounded-full transition-all duration-300 ease-out group-hover/wave:opacity-100 group-hover/wave:scale-y-110"
                                    style="
                                        height: {height}%; 
                                        background-color: {isActive ? '#FADBE9' : 'rgba(255,255,255,0.1)'};
                                        animation: {$isPlaying ? `bounce 1s infinite ${i * 0.05}s` : 'none'}
                                    "
                                ></div>
                            {/each}
                        </div>

                    </div>

                </div>
            </div>

            <div class="absolute -inset-4 bg-black/20 rounded-[3rem] blur-xl -z-10 translate-y-4"></div>
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
</section>

<style>
    .shadow-glass {
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
    }

    @keyframes bounce {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(1.4); }
    }
</style>