// data/projects.ts
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "rpg-fantasy-quest",
    title: "RPG Fantasy Quest",
    category: "Game Dev",
    description: "Game RPG 2D dengan sistem combat turn-based yang seru.",
    fullDescription: "Dikembangkan menggunakan Unity dan C#. Game ini memiliki sistem inventory, quest dinamis, dan AI musuh yang kompleks.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    tags: ["Unity", "C#", "Game Design"]
  },
  {
    id: "2",
    slug: "modern-analytics-dashboard",
    title: "Modern Analytics",
    category: "Web Dev",
    description: "Dashboard interaktif untuk visualisasi data real-time.",
    fullDescription: "Aplikasi front-end responsif yang menampilkan chart dinamis, dibangun dengan React, Next.js, dan Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    id: "3",
    slug: "custom-physics-engine",
    title: "Physics Engine 2D",
    category: "Software",
    description: "Simulasi fisika dari awal untuk mekanika tabrakan.",
    fullDescription: "Ditulis dalam C++ menggunakan OpenGL. Engine ini dapat mensimulasikan gravitasi, momentum, dan deteksi tabrakan presisi tinggi.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    tags: ["C++", "OpenGL", "Algorithms"]
  }
];