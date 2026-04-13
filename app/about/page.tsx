import { Layout, Gamepad2, Terminal } from "lucide-react";

// devicons CDN → full-color SVGs
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
// simple-icons CDN → monochrome SVGs (colored via CSS filter where needed)
const SI  = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

type Item = {
  name: string;
  icon: string;
  darkInvert?: boolean;
  filter?: string; // CSS filter string to apply brand color to monochrome SVGs
};

const languages: Item[] = [
  { name: "HTML5",      icon: `${DEV}/html5/html5-original.svg` },
  { name: "CSS3",       icon: `${DEV}/css3/css3-original.svg` },
  { name: "JavaScript", icon: `${DEV}/javascript/javascript-original.svg` },
  { name: "TypeScript", icon: `${DEV}/typescript/typescript-original.svg` },
  { name: "C#",         icon: `${DEV}/csharp/csharp-original.svg` },
  { name: "Lua",        icon: `${DEV}/lua/lua-original.svg` },
];

const frameworks: Item[] = [
  { name: "React",        icon: `${DEV}/react/react-original.svg` },
  { name: "Next.js",      icon: `${DEV}/nextjs/nextjs-original.svg`,          darkInvert: true },
  { name: "Tailwind CSS", icon: `${DEV}/tailwindcss/tailwindcss-original.svg` },
  { name: "Node.js",      icon: `${DEV}/nodejs/nodejs-original.svg` },
  { name: "Unity",        icon: `${DEV}/unity/unity-original.svg`,             darkInvert: true },
  { name: "Vite",         icon: `${DEV}/vitejs/vitejs-original.svg` },
];

const devtools: Item[] = [
  { name: "Git",           icon: `${DEV}/git/git-original.svg` },
  { name: "GitHub",        icon: `${DEV}/github/github-original.svg`,          darkInvert: true },
  { name: "VS Code",       icon: `${DEV}/vscode/vscode-original.svg` },
  { name: "Figma",         icon: `${DEV}/figma/figma-original.svg` },
  {
    name: "Postman",
    icon: `${SI}/postman.svg`,
    // Postman orange (#FF6C37)
    filter: "invert(47%) sepia(98%) saturate(600%) hue-rotate(345deg) brightness(105%)",
  },
  {
    name: "Notion",
    icon: `${SI}/notion.svg`,
    darkInvert: true, // near-black → white in dark mode
  },
  {
    name: "Roblox Studio",
    icon: `${SI}/roblox.svg`,
    // Roblox red (#E2231A)
    filter: "invert(18%) sepia(100%) saturate(700%) hue-rotate(340deg) brightness(90%)",
  },
  { name: "npm",           icon: `${DEV}/npm/npm-original-wordmark.svg` },
];

function BadgeGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {items.map((item) => (
        <div
          key={item.name}
          className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-default"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.icon}
            alt={item.name}
            width={24}
            height={24}
            className={`shrink-0 transition-transform duration-200 group-hover:scale-110 ${item.darkInvert ? "dark:invert" : ""}`}
            style={item.filter ? { filter: item.filter } : undefined}
          />
          <span className="text-sm font-medium truncate">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
      {children}
    </p>
  );
}

export default function About() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-4xl font-black mb-12 uppercase tracking-widest border-b pb-4">
        About Me
      </h1>

      {/* Bio + Specializations */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Halo, aku Ezy! Aku suka ngerjain dua hal: nulis kode yang rapi di
            balik layar dan bikin desain UI yang enak dilihat.
          </p>
          <p>
            Dari bikin game di Unity sampai ngembangin web pakai React, tujuanku
            simpel: bikin aplikasi yang lancar dipakai dan ngasih pengalaman
            yang asik buat penggunanya.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 space-y-8 shadow-sm">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
              <Layout />
            </div>
            <div>
              <h4 className="font-bold text-lg">Front-end Development</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Bikin UI web yang responsif &amp; cakep
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
              <Gamepad2 />
            </div>
            <div>
              <h4 className="font-bold text-lg">Game Development</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ngedesain mekanik &amp; logika game
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
              <Terminal />
            </div>
            <div>
              <h4 className="font-bold text-lg">Core Programming</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Algoritma, struktur data &amp; optimasi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Tools */}
      <div>
        <h2 className="text-3xl font-black uppercase tracking-widest border-b pb-4 mb-12">
          Skills &amp; Tools
        </h2>

        <div className="space-y-10">
          <div>
            <SectionLabel>Languages</SectionLabel>
            <BadgeGrid items={languages} />
          </div>

          <div>
            <SectionLabel>Frameworks &amp; Libraries</SectionLabel>
            <BadgeGrid items={frameworks} />
          </div>

          <div>
            <SectionLabel>Dev Tools</SectionLabel>
            <BadgeGrid items={devtools} />
          </div>
        </div>
      </div>
    </section>
  );
}
