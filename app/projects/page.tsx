import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-4xl font-black mb-12 uppercase tracking-widest border-b pb-4">Proyek Pilihan</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.id} className="group">
            <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-90 group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase text-blue-500">{project.category}</span>
                <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
