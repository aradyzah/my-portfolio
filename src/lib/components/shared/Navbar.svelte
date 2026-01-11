<script lang="ts">
    import { page } from '$app/stores';

    // State untuk mobile menu (Buka/Tutup)
    let isMobileMenuOpen = false;

    // List Link Navigasi
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#about' },
        { name: 'Projects', href: '#projects' }
    ];

    // Function scroll halus (Optional, biar enak pas klik)
    function scrollToSection(id: string) {
        isMobileMenuOpen = false; // Tutup menu mobile kalau diklik
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<nav class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
    
    <div class="w-full max-w-4xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-glass rounded-full px-2 py-2 flex items-center justify-between transition-all duration-300">
        
        <a href="/" class="pl-6 font-black text-xl tracking-tight hover:opacity-70 transition-opacity">
            Z
        </a>

        <div class="hidden md:flex items-center gap-1 bg-white/40 rounded-full px-2 py-1 border border-white/20">
            {#each links as link}
                <a 
                    href={link.href}
                    onclick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    class="px-5 py-2 rounded-full text-sm font-medium text-black/70 hover:text-black hover:bg-white/60 transition-all duration-300"
                >
                    {link.name}
                </a>
            {/each}
        </div>

        <div class="flex items-center gap-2 pr-1">
            
            <button 
                class="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white transition-colors"
                onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
            >
                <span class="text-xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
            </button>

            <a 
                href="/contact" 
                class="bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2 group"
            >
                Get in touch
                <span class="group-hover:translate-x-1 transition-transform">→</span>
            </a>
        </div>
    </div>

    {#if isMobileMenuOpen}
        <div class="absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/50 rounded-[2rem] p-6 shadow-2xl flex flex-col gap-4 md:hidden animate-pop-in origin-top">
            {#each links as link}
                <a 
                    href={link.href}
                    onclick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    class="text-lg font-bold text-center py-3 border-b border-black/5 hover:bg-white/50 rounded-xl transition-colors"
                >
                    {link.name}
                </a>
            {/each}
        </div>
    {/if}

</nav>

<style>
    .shadow-glass {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
    }

    /* Animasi Pop-in untuk Mobile Menu */
    @keyframes pop-in {
        0% { opacity: 0; transform: scale(0.95) translateY(-10px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-pop-in {
        animation: pop-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
</style>