<script lang="ts">
    import { page } from '$app/state';
    import { locales, localizeHref } from '$lib/paraglide/runtime';
    import '../app.css'; 
    import AuroraBackground from '$lib/components/shared/AuroraBackground.svelte';
    import bgMusic from '$lib/assets/musics/bg-music.mp3';
    import Footer from '$lib/components/shared/Footer.svelte';

    // IMPORT SEMUA STORE
    import { isPlaying, currentTime, duration } from '$lib/stores/audioStore';

    let { children } = $props();
    let audioRef: HTMLAudioElement;

    // LOGIKA PEMUTAR UTAMA
    $effect(() => {
        if (!audioRef) return;

        // --- ATUR VOLUME DISINI ---
        // Range: 0.0 (Mati) sampai 1.0 (Full)
        audioRef.volume = 0.1; 

        if ($isPlaying) {
            audioRef.play().catch(() => $isPlaying = false);
        } else {
            audioRef.pause();
        }
    });
</script>

<AuroraBackground />

<audio 
    bind:this={audioRef} 
    src={bgMusic} 
    bind:currentTime={$currentTime}
    bind:duration={$duration}
    loop 
    hidden
></audio>

{@render children()}

<Footer />

<div style="display:none">
    {#each locales as locale}
        <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
    {/each}
</div>