import { projects } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mengenerate halaman statis berdasarkan data TS
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound(); // Redirect ke halaman 404 jika project tidak ada
  }

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto min-h-screen">
      <Link href="/projects" className="text-blue-500 font-bold mb-8 inline-block hover:underline">
        &larr; Kembali ke Proyek
      </Link>
      
      <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-10 shadow-lg">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex gap-2 mb-6">
        {project.tags.map(tag => (
           <span key={tag} className="px-4 py-1.5 bg-gray-200 dark:bg-slate-800 rounded-full text-xs font-bold">
             {tag}
           </span>
        ))}
      </div>

      <h1 className="text-5xl font-black mb-6">{project.title}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.fullDescription}
      </p>
    </section>
  );
}