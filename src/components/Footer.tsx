"use client";

import { ArrowUp } from "lucide-react";
import { profile, socials, navLinks } from "@/lib/data";

const MARQUEE = [
  "Agentic AI",
  "RAG & Retrieval",
  "LLMs & Tool Calling",
  "Computer Vision",
  "Medical Imaging Research",
  "Multi-Agent Systems",
  "Shipped to production",
  "PyTorch · Docker · Azure",
  "Research @ King's College London",
  "Always building",
  "Open to work",
  "Let's build something",
];
// 12 unique phrases (~2855px) already exceed any mainstream screen, so no
// internal repeat is needed — keeps the loop varied, not the same few words.
const MARQUEE_COPY = MARQUEE;

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink">
      {/* marquee — two identical copies, scroll -50% for a seamless loop */}
      <div className="overflow-hidden border-b-2 border-ink bg-ink py-3">
        <div className="flex w-max animate-marquee will-change-transform">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {MARQUEE_COPY.map((t, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="mono flex items-center text-paper"
                >
                  <span className="px-6">{t}</span>
                  <span className="text-flame">✴</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="font-display text-2xl font-black uppercase text-ink">
              {profile.name}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {profile.role}. Always building, always measuring.
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border-2 border-ink text-ink transition hover:bg-flame"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="mono text-ink transition hover:text-flame"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t-2 border-ink pt-6 sm:flex-row sm:items-center">
          <p className="mono text-ink-muted">
            © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp; Tailwind
          </p>
          <a
            href="#home"
            className="mono inline-flex items-center gap-1.5 border-2 border-ink px-3 py-1.5 text-ink transition hover:bg-ink hover:text-paper"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
