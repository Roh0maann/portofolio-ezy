import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden bg-[#F9F9F6] dark:bg-slate-900">
      {/* Background Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 mt-10">
        <h1
          className="text-[20vw] md:text-[15vw] leading-[0.8] font-black uppercase tracking-tighter text-transparent"
          style={{ WebkitTextStroke: '3px var(--text-stroke, #9CA3AF)' }}
        >
          EZY
        </h1>
        <h1 className="text-[16vw] md:text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-gray-900 dark:text-gray-100">
          FATHUROHMAN
        </h1>
      </div>

      {/* Foreground Image menggunakan next/image */}
      <div className="relative z-10 w-full max-w-2xl mx-auto flex justify-center pointer-events-none">
        <Image
          src="/assets/ezyfoto2-removebg-preview.png"
          alt="Ezy Fathurohman"
          width={800}
          height={1000}
          priority
          className="w-full h-auto max-h-[80vh] object-contain drop-shadow-2xl"
        />
      </div>

      <div className="absolute bottom-10 z-20">
        <Link href="/projects" className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full shadow-xl hover:scale-105 transition-transform">
          Lihat Karya Saya
        </Link>
      </div>
    </section>
  );
}
