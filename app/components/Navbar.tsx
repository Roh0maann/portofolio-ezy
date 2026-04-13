"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the menu overlay
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "afterChildren",
      },
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 40, filter: "blur(10px)" },
    opened: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Project", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-gray-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        <Link href="/" className="text-3xl font-extrabold tracking-tighter hover:scale-105 transition-transform text-slate-950 dark:text-white">EF<span className="text-blue-600">.</span></Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm flex items-center justify-center border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <span className="font-bold text-sm tracking-widest px-2">MENU</span>}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Full-screen Overlay Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 w-full h-screen bg-white dark:bg-[#020617] flex flex-col items-center justify-center space-y-12 z-40 overflow-hidden"
          >
            {menuItems.map((item) => (
              <motion.div key={item.name} variants={linkVariants}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white hover:text-blue-500 transition-colors uppercase tracking-tighter"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.05, scale: 1 }}
              className="absolute text-[30vw] font-black pointer-events-none select-none -z-10 text-slate-200 dark:text-slate-800"
            >
              MENU
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
