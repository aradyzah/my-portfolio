<div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none bg-brand-pink">
    <div class="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] blob-purple animate-aurora-1 will-change-transform"></div>
    <div class="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] blob-pink animate-aurora-2 will-change-transform"></div>
</div>

<style>
    /* PERBAIKAN WARNA AGAR LEBIH MENONJOL */
    
    .blob-purple {
        /* Sebelumnya opacity 0.4, sekarang 0.8 (Jauh lebih pekat).
           Kita pakai warna ungu yang lebih tua (purple-700) di tengah.
        */
        background: radial-gradient(circle, rgba(126, 34, 206, 0.8) 0%, rgba(250, 219, 233, 0) 70%);
    }

    .blob-pink {
        /* Sebelumnya opacity 0.3, sekarang 0.7.
           Warnanya lebih ke magenta tua (pink-700).
        */
        background: radial-gradient(circle, rgba(190, 24, 93, 0.7) 0%, rgba(250, 219, 233, 0) 70%);
    }

    /* Animasi tetap sama */
    @keyframes aurora-1 {
        0% { transform: translate3d(0, 0, 0) scale(1); }
        50% { transform: translate3d(10%, 10%, 0) scale(1.1); }
        100% { transform: translate3d(-5%, 5%, 0) scale(0.9); }
    }
    @keyframes aurora-2 {
        0% { transform: translate3d(0, 0, 0) scale(1); }
        50% { transform: translate3d(-10%, -10%, 0) scale(1.1); }
        100% { transform: translate3d(5%, 5%, 0) scale(1); }
    }
    .animate-aurora-1 { animation: aurora-1 15s infinite ease-in-out alternate; }
    .animate-aurora-2 { animation: aurora-2 20s infinite ease-in-out alternate; }
</style>