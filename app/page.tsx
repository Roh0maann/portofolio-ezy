"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 -mt-20 md:-mt-32 px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[18vw] md:text-[15vw] leading-[0.8] font-black uppercase tracking-tighter text-transparent"
          style={{ WebkitTextStroke: '2px var(--text-stroke)' }}
        >
          EZY
        </motion.h1>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[11vw] md:text-[12vw] leading-[0.8] font-black uppercase tracking-tighter opacity-90 text-center"
        >
          FATHUROHMAN
        </motion.h1>
      </div>

      {/* Foreground Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl mx-auto flex justify-center pointer-events-none"
      >
        <Image
          src="/assets/ezyfoto2-hd.png"
          alt="Ezy Fathurohman"
          width={800}
          height={1000}
          priority
          className="w-full h-auto max-h-[80vh] object-contain drop-shadow-2xl"
        />
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-10 z-20"
      >
        <Link href="/projects" className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full shadow-xl hover:scale-105 transition-transform active:scale-95">
          Lihat Karya Saya
        </Link>
      </motion.div>
    </section>
  );
}
