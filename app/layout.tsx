// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import 'remixicon/fonts/remixicon.css';

// Menggunakan Google Font sesuai permintaan
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ezy Fathurohman | Portfolio",
  description: "Portofolio programmer, front-end, dan game developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning penting agar dark mode tidak error saat dirender Next.js
    <html lang="id" className="scroll-smooth" suppressHydrationWarning> 
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                if (!theme && supportDarkMode) theme = 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `,
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Preloader />
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
