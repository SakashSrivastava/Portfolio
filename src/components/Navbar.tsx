"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPalette = () =>
    window.dispatchEvent(new CustomEvent("open-command"));

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled ? "border-b-2 border-ink bg-paper/90 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="group flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center border-2 border-ink bg-ink text-xs font-black text-paper transition group-hover:bg-flame group-hover:text-ink">
            S
          </span>
          <span className="font-display text-sm font-extrabold uppercase tracking-tight text-ink">
            Sakash Srivastava
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-ink transition-colors hover:text-flame"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={openPalette}
          aria-label="Open command menu"
          className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-2.5 py-1.5 text-ink transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-sm"
        >
          <Command className="h-3.5 w-3.5" />
          <span className="mono text-[10px]">Ctrl K</span>
        </button>
      </div>
    </motion.header>
  );
}
