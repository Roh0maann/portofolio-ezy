import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              EF<span className="text-blue-600">.</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Crafting premium digital experiences through purposeful design and high-performance code. Specialized in Front-end and Game Development.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="GitHub"
              >
                <i className="ri-github-fill text-2xl"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#0077b5] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-box-fill text-2xl"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#e4405f] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Ezy Fathurohman. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Built with</span>
            <Link href="https://nextjs.org" className="hover:text-slate-900 dark:hover:text-white transition-colors">Next.js</Link>
            <span>&</span>
            <Link href="https://tailwindcss.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">Tailwind</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
