<script lang="ts">
    // 1. IMPORT GAMBAR DARI PATH BARU
    import pythonIcon from '$lib/assets/images/TechMarquee/python.svg';
    import reactIcon from '$lib/assets/images/TechMarquee/react.svg';
    import pytorchIcon from '$lib/assets/images/TechMarquee/pytorch.svg';
    import mysqlIcon from '$lib/assets/images/TechMarquee/mysql.svg';
    import svelteIcon from '$lib/assets/images/TechMarquee/svelte.svg';
    import tailwindIcon from '$lib/assets/images/TechMarquee/tailwindcss.svg';
    import figmaIcon from '$lib/assets/images/TechMarquee/figma.svg';
    import nextdotjsIcon from '$lib/assets/images/TechMarquee/nextdotjs.svg';
    import javascriptIcon from '$lib/assets/images/TechMarquee/javascript.svg';
    import typescriptIcon from '$lib/assets/images/TechMarquee/typescript.svg';
    import githubIcon from '$lib/assets/images/TechMarquee/github.svg';
    import cssIcon from '$lib/assets/images/TechMarquee/css.svg';
    import htmlIcon from '$lib/assets/images/TechMarquee/html5.svg';

    // 2. MASUKKAN KE DATA
    const tools = [
        { name: "Python", icon: pythonIcon },
        { name: "React", icon: reactIcon },
        { name: "Pytorch", icon: pytorchIcon },
        { name: "MySQL", icon: mysqlIcon },
        { name: "SvelteKit", icon: svelteIcon },
        { name: "Tailwind", icon: tailwindIcon },
        { name: "Figma", icon: figmaIcon },
        { name: "Next.js", icon: nextdotjsIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "TypeScript", icon: typescriptIcon },
        { name: "GitHub", icon: githubIcon },
        { name: "CSS3", icon: cssIcon },
        { name: "HTML5", icon: htmlIcon },
    ];
</script>

<div class="w-full overflow-hidden py-4 pointer-events-none select-none mask-gradient">

    <div class="flex whitespace-nowrap gap-12 animate-marquee items-center">

        {#each tools as tool}
            <div class="flex items-center gap-3 group grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 px-4">
                <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    class="w-6 h-6 md:w-8 md:h-8 object-contain group-hover:scale-110 transition-transform"
                />
                <span class="text-xs md:text-sm font-bold text-black/60 tracking-widest uppercase font-mono group-hover:text-black">
                    {tool.name}
                </span>
            </div>
        {/each}

        {#each tools as tool}
            <div class="flex items-center gap-3 group grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 px-4">
                <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    class="w-6 h-6 md:w-8 md:h-8 object-contain group-hover:scale-110 transition-transform"
                />
                <span class="text-xs md:text-sm font-bold text-black/60 tracking-widest uppercase font-mono group-hover:text-black">
                    {tool.name}
                </span>
            </div>
        {/each}

    </div>

</div>

<style>
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }

    .animate-marquee {
        animation: marquee 40s linear infinite;
    }

    /* Fitur Tambahan: Kalau mouse di atas marquee, gerakannya berhenti sebentar */
    .animate-marquee:hover {
        animation-play-state: paused;
    }

    /* MAGIC FIX: Mask Image */
    /* Ini yang bikin transparannya mulus tanpa warna putih */
    .mask-gradient {
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }
</style>