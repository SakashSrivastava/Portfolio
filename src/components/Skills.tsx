"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { skillGroups } from "@/lib/data";

const statusStrip = [
  { k: "Building", v: "Reliable agent systems" },
  { k: "Researching", v: "Medical imaging & CV" },
  { k: "Exploring", v: "Post-training & retrieval" },
  { k: "Looking for", v: "ML / AI engineering roles" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-pad">
        <SectionHeading
          index="03"
          kicker="Toolkit"
          title={
            <>
              What I build <span className="mark-flame">with</span>.
            </>
          }
          description="Not a buzzword dump. These are the tools I have actually shipped or researched with."
        />

        <div className="mt-12 grid gap-px border-2 border-ink bg-ink md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (gi % 2) * 0.08 }}
              className="bg-paper p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-extrabold uppercase text-ink">
                  {group.category}
                </h3>
                <span className="mono flex h-6 w-6 items-center justify-center bg-ink text-paper">
                  {group.skills.length}
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-muted">{group.blurb}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s.name}
                    className={`mono px-2.5 py-1 text-[11px] normal-case tracking-normal ${
                      s.learning
                        ? "border border-dashed border-flame text-flame"
                        : "border border-ink/25 text-ink-soft"
                    }`}
                  >
                    {s.name}
                    {s.learning && <span className="ml-1 opacity-70">· learning</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* status strip */}
        <div className="mt-6 grid gap-px border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
          {statusStrip.map((s) => (
            <div key={s.k} className="bg-paper px-5 py-4">
              <div className="mono text-flame">{s.k}</div>
              <div className="mt-1 text-sm font-medium text-ink">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
