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
  // Extended detail fields
  year?: string;
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  techStack?: { name: string; icon: string }[];
  gallery?: string[];
}

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const projects: Project[] = [
  {
    id: "1",
    slug: "rpg-fantasy-quest",
    title: "RPG Fantasy Quest",
    category: "Game Dev",
    description: "Game RPG 2D dengan sistem combat turn-based yang seru.",
    fullDescription:
      "RPG Fantasy Quest adalah game RPG 2D yang dikembangkan penuh menggunakan Unity dan C#. Game ini menghadirkan sistem combat turn-based yang strategis, sistem inventory dinamis, lebih dari 20 quest unik, serta AI musuh yang cerdas. Setiap level didesain dengan cermat untuk memberikan pengalaman bermain yang imersif dan menantang.",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1200",
    tags: ["Unity", "C#", "Game Design"],
    year: "2024",
    role: "Sole Developer & Game Designer",
    githubUrl: "https://github.com",
    features: [
      "Sistem combat turn-based dengan 15+ skill unik",
      "Inventory & equipment system lengkap",
      "20+ quest dengan branching dialogue",
      "AI musuh adaptif dengan state machine",
      "Save/load system menggunakan JSON serialization",
      "Procedural dungeon generation",
    ],
    techStack: [
      { name: "Unity", icon: `${DEV}/unity/unity-original.svg` },
      { name: "C#", icon: `${DEV}/csharp/csharp-original.svg` },
      { name: "Git", icon: `${DEV}/git/git-original.svg` },
      { name: "GitHub", icon: `${DEV}/github/github-original.svg` },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "2",
    slug: "modern-analytics-dashboard",
    title: "Modern Analytics",
    category: "Web Dev",
    description: "Dashboard interaktif untuk visualisasi data real-time.",
    fullDescription:
      "Modern Analytics adalah aplikasi dashboard front-end yang responsif dan interaktif untuk visualisasi data real-time. Dibangun dengan Next.js, TypeScript, dan Tailwind CSS, dashboard ini menampilkan chart dinamis, filter data multi-dimensi, dan laporan yang dapat diekspor. Dirancang dengan fokus pada performa dan UX yang intuitif.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2024",
    role: "Front-end Developer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Chart real-time dengan auto-refresh tiap 30 detik",
      "Filter data multi-dimensi (tanggal, kategori, wilayah)",
      "Export laporan ke PDF & CSV",
      "Responsive layout untuk mobile & desktop",
      "Dark mode & light mode toggle",
      "Optimistic UI updates untuk performa cepat",
    ],
    techStack: [
      { name: "Next.js", icon: `${DEV}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", icon: `${DEV}/typescript/typescript-original.svg` },
      { name: "React", icon: `${DEV}/react/react-original.svg` },
      { name: "Tailwind", icon: `${DEV}/tailwindcss/tailwindcss-original.svg` },
      { name: "Git", icon: `${DEV}/git/git-original.svg` },
      { name: "GitHub", icon: `${DEV}/github/github-original.svg` },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "3",
    slug: "custom-physics-engine",
    title: "Physics Engine 2D",
    category: "Software",
    description: "Simulasi fisika dari awal untuk mekanika tabrakan.",
    fullDescription:
      "Physics Engine 2D adalah proyek deep-tech yang ditulis murni menggunakan C++ dan OpenGL. Engine ini membangun sistem simulasi fisika dari nol tanpa library fisika eksternal. Mampu mensimulasikan gravitasi newtonian, momentum linear & angular, deteksi tabrakan presisi tinggi menggunakan SAT (Separating Axis Theorem), dan resolusi tabrakan rigidbody.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    tags: ["C++", "OpenGL", "Algorithms"],
    year: "2023",
    role: "Software Engineer",
    githubUrl: "https://github.com",
    features: [
      "Gravitasi newtonian & gaya kustom",
      "Deteksi tabrakan SAT untuk polygon arbitrer",
      "Resolusi tabrakan rigidbody dengan restitusi",
      "Broad-phase AABB tree untuk optimasi performa",
      "Visualisasi debug real-time dengan OpenGL",
      "Simulasi 1000+ bodi fisika pada 60 FPS",
    ],
    techStack: [
      { name: "C++", icon: `${DEV}/cplusplus/cplusplus-original.svg` },
      { name: "OpenGL", icon: `${DEV}/opengl/opengl-original.svg` },
      { name: "Git", icon: `${DEV}/git/git-original.svg` },
      { name: "VS Code", icon: `${DEV}/vscode/vscode-original.svg` },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    ],
  },
];