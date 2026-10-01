"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { Sparkle, Orbit, Asterisk } from "./ui/Doodles";

const loop = [
  { n: "01", label: "BUILD", pos: "left-[-14px] top-6" },
  { n: "02", label: "MEASURE", pos: "right-[-20px] top-1/3" },
  { n: "03", label: "HARDEN", pos: "left-[-18px] bottom-1/3" },
  { n: "04", label: "SHIP", pos: "right-[-14px] bottom-8" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto min-h-screen w-full max-w-7xl px-5 pb-16 pt-24 sm:px-8"
    >
      {/* top mono rail */}
      <div className="flex items-center justify-between border-b-2 border-ink pb-3 text-[10px] sm:text-xs">
        <span className="mono text-ink">ML / AI Engineer</span>
        <span className="mono hidden text-ink sm:block">
          LNMIIT · B.Tech ECE · Final Year 2027
        </span>
      </div>

      <div className="relative mt-10 grid items-center gap-10 lg:mt-6 lg:grid-cols-[minmax(0,1.5fr)_300px]">
        {/* doodles */}
        <Sparkle className="pointer-events-none absolute right-[42%] top-[-6px] z-20 h-7 w-7 animate-float text-flame" />
        <Orbit className="pointer-events-none absolute bottom-24 left-[36%] z-20 hidden h-12 w-12 animate-spinSlow text-ink/60 sm:block" />
        <Asterisk className="pointer-events-none absolute left-[-6px] top-28 z-20 hidden h-6 w-6 text-flame sm:block" />

        {/* left: name + copy */}
        <div className="relative min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <h1 className="relative select-none font-display font-black uppercase leading-[0.82] tracking-tighter text-ink">
              <span className="block text-[clamp(2.6rem,9vw,118px)]">
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="text-outline absolute left-[5px] top-[5px] -z-10 hidden md:block"
                  >
                    Sakash
                  </span>
                  Sakash
                </span>
              </span>
              <span className="block text-[clamp(2.6rem,9vw,118px)] text-flame">
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="text-outline absolute left-[5px] top-[5px] -z-10 hidden md:block"
                    style={{ WebkitTextStrokeColor: "#17150f" }}
                  >
                    Srivastava
                  </span>
                  Srivastava
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mono mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-ink"
          >
            <span className="text-flame">BUILD</span>
            <span className="text-ink-faint">/</span>
            <span>MEASURE</span>
            <span className="text-ink-faint">/</span>
            <span>HARDEN</span>
            <span className="text-ink-faint">/</span>
            <span className="text-flame">SHIP</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            I build <span className="font-semibold text-ink">agentic AI systems</span> that
            actually ship. This year I shipped two LLM systems solo, one live in production,
            and I do computer vision and medical imaging research on the side.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-flame"
            >
              See the work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* right: annotated photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative z-10 mx-auto w-full max-w-[300px]"
        >
          <div className="relative border-2 border-ink bg-paper shadow-hard">
            <Image
              src="/profile.jpg"
              alt="Sakash Srivastava"
              width={827}
              height={1063}
              priority
              className="h-auto w-full"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t-2 border-ink bg-paper px-3 py-1.5">
              <span className="mono text-[10px] text-ink">New Delhi, IN</span>
              <span className="mono text-[10px] text-flame">OPEN TO WORK</span>
            </div>
          </div>

          {/* numbered annotations */}
          {loop.map((l) => (
            <div
              key={l.n}
              className={`mono absolute ${l.pos} flex items-center gap-1 bg-paper text-[10px] text-ink`}
            >
              <span className="text-flame">{l.n}</span>
              <span>{l.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* bottom callouts */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-12 grid gap-px border-2 border-ink bg-ink sm:grid-cols-3"
      >
        {[
          { k: "LIVE IN PRODUCTION", v: "SegLit, deployed on Azure" },
          { k: "TOP 5%", v: "Adobe India Hackathon 2025" },
          { k: "RESEARCH INTERN", v: "King's College London, 2026" },
        ].map((c) => (
          <div key={c.k} className="bg-paper px-5 py-4">
            <div className="mono text-flame">{c.k}</div>
            <div className="mt-1 text-sm font-medium text-ink">{c.v}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
