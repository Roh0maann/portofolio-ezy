"use client";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Pesan terkirim! (Simulasi Client-Side)");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto min-h-screen grid md:grid-cols-2 gap-16">
      <div className="space-y-8">
        <h1 className="text-5xl font-black leading-tight">Ayo Bekerja<br/>Sama!</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Terbuka untuk kolaborasi proyek perangkat lunak dan game.
        </p>
        <div className="flex items-center gap-4 font-bold text-lg">
          <Mail /> hello@ezyfathurohman.com
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input required type="text" placeholder="Nama Lengkap" className="w-full px-4 py-4 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl" />
          <input required type="email" placeholder="Email" className="w-full px-4 py-4 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl" />
          <textarea required rows={4} placeholder="Pesan" className="w-full px-4 py-4 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl resize-none"></textarea>
          
          <button type="submit" className="w-full py-5 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform">
            Kirim Pesan
          </button>
          {status && <p className="text-green-500 font-bold text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
}