<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { spring } from 'svelte/motion';

    export let src: string;
    export let alt: string = 'pet';
    export let containerId: string;

    const PET_SIZE = 80; 

    // SETTINGAN GERAK "JALAN KAKI" (Bukan Terbang)
    // stiffness: 0.002 -> Sangat lambat
    // damping: 1 -> TIDAK ADA MEMBAL SAMA SEKALI (Linear-like stop)
    let coords = spring({ x: 50, y: 50 }, { stiffness: 0.002, damping: 1 });
    
    let isFacingRight = true;
    let containerWidth = 0;
    let containerHeight = 0;
    let mouseX = -1000; 
    let mouseY = -1000;
    let wanderTimeout: ReturnType<typeof setTimeout>;
    let isFleeing = false;
    let resizeObserver: ResizeObserver;

    // Fungsi Mencari Langkah Berikutnya (Short Distance)
    function getNextStep() {
        const padding = 20; 
        const maxStepDistance = 200; // Maksimal melangkah sejauh 200px (biar ga terbang jauh)

        // Posisi sekarang
        const currentX = $coords.x;
        const currentY = $coords.y;

        // Tentukan arah langkah random (negatif = kiri/atas, positif = kanan/bawah)
        const stepX = (Math.random() - 0.5) * 2 * maxStepDistance;
        const stepY = (Math.random() - 0.5) * 2 * maxStepDistance;

        // Target potensial
        let targetX = currentX + stepX;
        let targetY = currentY + stepY;

        // BATASI (CLAMP) SUPAYA GA KELUAR KOTAK
        // Kalau langkahnya bakal nabrak tembok, dia stop di tembok aja
        const maxX = Math.max(0, containerWidth - PET_SIZE - padding);
        const maxY = Math.max(0, containerHeight - PET_SIZE - padding);

        targetX = Math.max(padding, Math.min(maxX, targetX));
        targetY = Math.max(padding, Math.min(maxY, targetY));

        return { x: targetX, y: targetY };
    }

    function wander() {
        if (isFleeing || containerWidth === 0) return;

        const target = getNextStep();
        
        // Cek arah hadap
        if (Math.abs(target.x - $coords.x) > 5) {
            isFacingRight = target.x > $coords.x;
        }

        // Jalan pelan ke target
        coords.set(target, { soft: true });

        // Istirahat agak lama (3-6 detik) sebelum melangkah lagi
        // Biar kesannya santai, jalan... diem... jalan...
        wanderTimeout = setTimeout(wander, 3000 + Math.random() * 3000);
    }

    // Logic Kabur (Kalau kursor deketin)
    $: {
        if (containerWidth > 0) {
            const petCenterX = $coords.x + PET_SIZE / 2;
            const petCenterY = $coords.y + PET_SIZE / 2;

            const dx = petCenterX - mouseX;
            const dy = petCenterY - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const fleeThreshold = 150; 

            if (distance < fleeThreshold) {
                isFleeing = true;
                clearTimeout(wanderTimeout);

                const fleeDistance = 80; // Kabur dikit aja (langkah kaget)
                let vectorX = dx / distance;
                let vectorY = dy / distance;

                let targetX = $coords.x + vectorX * fleeDistance;
                let targetY = $coords.y + vectorY * fleeDistance;

                targetX = Math.max(0, Math.min(containerWidth - PET_SIZE, targetX));
                targetY = Math.max(0, Math.min(containerHeight - PET_SIZE, targetY));

                if (Math.abs(targetX - $coords.x) > 5) {
                    isFacingRight = targetX > $coords.x;
                }

                // Kabur agak lebih cepat dikit stiffnessnya manual di sini (opsional, tp spring default udh oke)
                coords.set({ x: targetX, y: targetY });

                setTimeout(() => {
                    isFleeing = false;
                    wander();
                }, 1000);
            }
        }
    }

    onMount(() => {
        const container = document.getElementById(containerId);
        
        if (container) {
            resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    containerWidth = entry.contentRect.width;
                    containerHeight = entry.contentRect.height;
                }
                // Pas load, langsung sebar posisi random biar ga numpuk
                if ($coords.x === 50 && $coords.y === 50) {
                     const randomStartX = Math.random() * (containerWidth - PET_SIZE);
                     const randomStartY = Math.random() * (containerHeight - PET_SIZE);
                     coords.set({ x: randomStartX, y: randomStartY }, { hard: true });
                     wander();
                }
            });
            
            resizeObserver.observe(container);

            const handleMouseMove = (e: MouseEvent) => {
                const rect = container.getBoundingClientRect();
                mouseX = e.clientX - rect.left;
                mouseY = e.clientY - rect.top;
            };
            container.addEventListener('mousemove', handleMouseMove);

            onDestroy(() => {
                resizeObserver.disconnect();
                container.removeEventListener('mousemove', handleMouseMove);
                clearTimeout(wanderTimeout);
            });
        }
    });
</script>

<div 
    class="absolute z-0 pointer-events-none select-none will-change-transform"
    style="transform: translate({$coords.x}px, {$coords.y}px);"
>
    <div 
        class="transition-transform duration-500"
        style="transform: scaleX({isFacingRight ? 1 : -1});"
    >
        <img
            {src}
            {alt}
            class="w-20 h-20 object-contain drop-shadow-sm opacity-80"
            style="image-rendering: pixelated; animation: bounce-walk 4s infinite ease-in-out;"
        />
    </div>
</div>

<style>
    /* Animasi Jalan Santai (Naik Turun Alus & Pelan) */
    @keyframes bounce-walk {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
    }
</style>