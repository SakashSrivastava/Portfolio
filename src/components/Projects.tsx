"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { projects, type Project } from "@/lib/data";

const statusStyle: Record<Project["status"], string> = {
  Live: "bg-flame text-paper",
  Shipped: "bg-ink text-paper",
  Research: "border-2 border-ink text-ink",
  "In progress": "border-2 border-ink text-ink",
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={`group border-2 border-ink bg-paper transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-sm font-black text-flame">{num}</span>
            <div>
              <h3 className="font-display text-2xl font-extrabold uppercase leading-none text-ink">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-muted">{project.tagline}</p>
            </div>
          </div>
          <span
            className={`mono shrink-0 px-2.5 py-1 text-[10px] ${statusStyle[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-[auto_1fr] md:gap-8">
          <div className="mono self-start text-ink-faint">The problem</div>
          <p className="text-sm leading-relaxed text-ink-soft">{project.problem}</p>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-5 space-y-5 border-t border-ink/15 pt-5">
                <div className="grid gap-2 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="mono self-start text-flame">What I built</div>
                  <p className="text-sm leading-relaxed text-ink-soft">{project.built}</p>
                </div>
                <div className="grid gap-2 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="mono self-start text-flame">Outcome</div>
                  <p className="text-sm leading-relaxed text-ink-soft">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="mono border border-ink/25 px-2 py-1 text-[10px] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t-2 border-ink pt-4">
          <button
            onClick={() => setOpen((v) => !v)}
            className="mono inline-flex items-center gap-1.5 text-ink transition-colors hover:text-flame"
          >
            {open ? "Collapse" : "Case study"}
            <motion.span animate={{ rotate: open ? 180 : 0 }}>
              <ChevronDown className="h-3.5 w-3.5" />
            </motion.span>
          </button>
          <div className="flex items-center gap-2">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("#") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border-2 border-ink px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-paper"
              >
                {l.label.toLowerCase().includes("git") ? (
                  <Github className="h-3.5 w-3.5" />
                ) : (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                )}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-pad">
        <SectionHeading
          index="02"
          kicker="Selected Work"
          title={
            <>
              Six systems, <span className="mark-flame">built end to end</span>.
            </>
          }
          description="From LLM systems live in production to medical imaging research. Open any card for the full case study: the problem, what I built, and what came out of it."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
