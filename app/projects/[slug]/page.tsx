import { projects } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GitFork, Calendar, User, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Ezy Fathurohman` : "Project Not Found",
    description: project?.description,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="min-h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-60"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />

        {/* Back button overlaid */}
        <div className="absolute top-6 left-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm text-white text-sm font-semibold hover:bg-black/60 transition-colors border border-white/20"
          >
            <ArrowLeft size={16} />
            Kembali
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24 -mt-20 relative z-10">
        {/* Category + Title */}
        <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
          {project.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-black mt-2 mb-6 leading-tight">
          {project.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-500 dark:text-gray-400">
          {project.year && (
            <span className="flex items-center gap-2">
              <Calendar size={15} />
              {project.year}
            </span>
          )}
          {project.role && (
            <span className="flex items-center gap-2">
              <User size={15} />
              {project.role}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-3 mb-12">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-bold hover:scale-105 transition-transform active:scale-95 shadow-md"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-slate-600 text-sm font-bold hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                <GitFork size={15} />
                Source Code
              </a>
            )}
          </div>
        )}

        {/* Main grid: description + tech stack */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Full description */}
          <div className="md:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              Tentang Proyek
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Tech stack sidebar */}
          {project.techStack && project.techStack.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                Tech Stack
              </h2>
              <div className="space-y-3">
                {project.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width={22}
                      height={22}
                      className={`shrink-0 ${
                        tech.name === "GitHub" || tech.name === "Next.js" || tech.name === "Unity"
                          ? "dark:invert"
                          : ""
                      }`}
                    />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
              Fitur Utama
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
                >
                  <CheckCircle2
                    size={18}
                    className="text-blue-500 shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
              Galeri
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-800"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other projects */}
        <div className="border-t border-gray-200 dark:border-slate-700 pt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
            Proyek Lainnya
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase text-blue-500 mb-0.5">
                      {p.category}
                    </p>
                    <p className="text-sm font-bold truncate">{p.title}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}