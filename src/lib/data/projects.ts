// Definisi tipe data agar TypeScript senang
export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tech: string[];
    year: string;
    color: string; // Warna aksen titik kecil
}

// Data proyek kamu (diambil dari ringkasan aktivitasmu)
export const projectsData: Project[] = [
    {
        id: 1,
        title: "Jokka Web",
        category: "Web Development",
        description: "A comprehensive tourism platform designed to help travelers discover hidden gems in South Sulawesi, built with modern web technologies.",
        tech: ["SvelteKit", "Tailwind", "Supabase"],
        year: "2025",
        color: "bg-blue-400"
    },
    {
        id: 2,
        title: "ceka.ceka",
        category: "Mobile App",
        description: "A Flutter-based mobile application focused on financial management for Gen-Z students, featuring intuitive expense tracking.",
        tech: ["Flutter", "Dart", "Firebase"],
        year: "2025",
        color: "bg-green-400"
    },
    {
        id: 3,
        title: "AI Hybrid GA-FFNN",
        category: "Machine Learning",
        description: "Optimizing Feedforward Neural Networks using Genetic Algorithms (GA-2) to solve complex pattern recognition tasks.",
        tech: ["Python", "PyTorch", "Genetic Algo"],
        year: "2025",
        color: "bg-purple-400"
    },
    {
        id: 4,
        title: "SNA Community",
        category: "Data Science",
        description: "Social Network Analysis project visualizing connection patterns and community detection within large datasets.",
        tech: ["Python", "NetworkX", "Pandas"],
        year: "2024",
        color: "bg-orange-400"
    }
];