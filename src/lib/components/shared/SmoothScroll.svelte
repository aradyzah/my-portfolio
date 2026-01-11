<script lang="ts">
    import Lenis from 'lenis';
    import { onMount } from 'svelte';

    onMount(() => {
        // Inisialisasi Lenis
        const lenis = new Lenis({
            duration: 1.2, 
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Loop animasi
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Bersihkan memori saat pindah halaman
        return () => {
            lenis.destroy();
        };
    });
</script>