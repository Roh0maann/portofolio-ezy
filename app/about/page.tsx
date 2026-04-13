import { Layout, Gamepad2, Terminal } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-4xl font-black mb-12 uppercase tracking-widest border-b pb-4">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Halo, aku Ezy! Aku suka ngerjain dua hal: nulis kode yang rapi di balik layar dan bikin desain UI yang enak dilihat.
          </p>
          <p>
            Dari bikin game di Unity sampai ngembangin web pakai React, tujuanku simpel: bikin aplikasi yang lancar dipakai dan ngasih pengalaman yang asik buat penggunanya.
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 space-y-8 shadow-sm">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl"><Layout /></div>
            <div>
              <h4 className="font-bold text-lg">Front-end Development</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Bikin UI web yang responsif & cakep</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl"><Gamepad2 /></div>
            <div>
              <h4 className="font-bold text-lg">Game Development</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Ngedesain mekanik & logika game</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl"><Terminal /></div>
            <div>
              <h4 className="font-bold text-lg">Core Programming</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Algoritma, struktur data & optimasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
