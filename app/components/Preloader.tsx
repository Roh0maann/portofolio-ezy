"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulasi loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500); // Tunggu sebentar setelah 100%
          return 100;
        }
        return prev + 2; // Kecepatan loading
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-slate-950"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white">
                EF<span className="text-blue-600">.</span>
              </h1>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-48 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-slate-900 dark:bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.span 
              className="mt-4 text-xs font-mono tracking-widest text-slate-400 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Loading {progress}%
            </motion.span>
          </div>

          {/* Watermark Decoration */}
          <div className="absolute bottom-10 left-10 overflow-hidden">
             <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-bold tracking-[0.3em] uppercase opacity-20"
             >
                Creative Developer
             </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
