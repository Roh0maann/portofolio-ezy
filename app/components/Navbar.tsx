"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link href="/" className="hover:text-blue-500 font-bold transition-colors">Beranda</Link>
      <Link href="/about" className="hover:text-blue-500 font-bold transition-colors">Tentang</Link>
      <Link href="/projects" className="hover:text-blue-500 font-bold transition-colors">Proyek</Link>
      <Link href="/contact" className="hover:text-blue-500 font-bold transition-colors">Kontak</Link>
    </>
  );

  return (
    <nav className="fixed w-full z-50 bg-[#F9F9F6]/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold tracking-tighter">EF.</Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 w-full bg-[#F9F9F6] dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 flex flex-col p-6 space-y-6">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}