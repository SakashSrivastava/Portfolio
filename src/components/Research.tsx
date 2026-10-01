"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { research, type ResearchItem } from "@/lib/data";

const typeLabel: Record<ResearchItem["type"], string> = {
  Current: "Most recent",
  Focus: "Focus area",
  Interest: "Curious about",
  Next: "Learning next",
};

export default function Research() {
  const current = research.find((r) => r.type === "Current");
  const rest = research.filter((r) => r.type !== "Current");

  return (
    <section id="research" className="relative">
      <div className="section-pad">
        <SectionHeading
          index="05"
          kicker="Research & Focus"
          title={
            <>
              Going <span className="mark-flame">deep</span>, not just wide.
            </>
          }
          description="What I have worked on, keep coming back to, and want to learn next."
        />

        {current && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="mt-12 border-2 border-ink bg-ink p-7 text-paper md:p-9"
          >
            <div className="mono text-flame">{typeLabel[current.type]}</div>
            <h3 className="mt-3 max-w-3xl font-display text-2xl font-extrabold leading-tight text-paper md:text-3xl">
              {current.title}
            </h3>
            {current.org && (
              <div className="mt-2 text-sm font-medium text-flame">{current.org}</div>
            )}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/85">
              {current.summary}
            </p>
          </motion.div>
        )}

        <div className="mt-6 grid gap-px border-2 border-ink bg-ink md:grid-cols-2 lg:grid-cols-3">
          {rest.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="group bg-paper p-6 transition-colors hover:bg-paper-soft"
            >
              <div className="mono text-flame">{typeLabel[r.type]}</div>
              <h3 className="mt-3 font-display text-lg font-extrabold uppercase leading-tight text-ink">
                {r.title}
              </h3>
              {r.org && <div className="mono mt-1 text-ink-faint">{r.org}</div>}
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{r.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
