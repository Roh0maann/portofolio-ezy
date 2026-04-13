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
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: heading + contact info */}
        <div className="space-y-5">
          <h1 className="text-4xl font-black leading-tight">
            Ayo Bekerja<br />Sama!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Terbuka untuk kolaborasi proyek perangkat lunak dan game.
          </p>
          <div className="flex items-center gap-3 font-semibold text-sm">
            <Mail size={16} />
            hello@ezyfathurohman.com
          </div>
        </div>

        {/* Right: form card */}
        <div className="bg-white dark:bg-slate-800 p-7 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              type="text"
              placeholder="Nama Lengkap"
              className="w-full px-4 py-3 text-sm bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-sm bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <textarea
              required
              rows={4}
              placeholder="Pesan"
              className="w-full px-4 py-3 text-sm bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl resize-none outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <button
              type="submit"
              className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform active:scale-[0.98]"
            >
              Kirim Pesan
            </button>
            {status && (
              <p className="text-green-500 font-bold text-center text-sm">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}