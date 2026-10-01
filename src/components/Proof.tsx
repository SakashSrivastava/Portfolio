"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { proofs } from "@/lib/data";

function Card({
  number,
  label,
  meaning,
  index,
}: {
  number: string;
  label: string;
  meaning: string;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      onClick={() => setFlipped((v) => !v)}
      className="group relative h-56 w-full text-left [perspective:1200px]"
      aria-label={`${number}: ${label}`}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* front */}
        <div className="absolute inset-0 flex flex-col justify-between border-2 border-ink bg-paper p-5 [backface-visibility:hidden] group-hover:bg-flame">
          <div className="mono flex items-center justify-between text-ink">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Plus className="h-4 w-4" />
          </div>
          <div>
            <div className="font-display text-5xl font-black leading-none text-ink">
              {number}
            </div>
            <div className="mt-2 text-sm font-medium text-ink-soft">{label}</div>
          </div>
        </div>

        {/* back */}
        <div
          className="absolute inset-0 flex flex-col justify-between border-2 border-ink bg-ink p-5 text-paper [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="mono text-flame">What this means</div>
          <p className="text-sm leading-relaxed text-paper/90">{meaning}</p>
        </div>
      </div>
    </motion.button>
  );
}

export default function Proof() {
  return (
    <section id="achievements" className="relative">
      <div className="section-pad">
        <SectionHeading
          index="06"
          kicker="Proof"
          title={
            <>
              The numbers, <span className="mark-flame">explained</span>.
            </>
          }
          description="Tap any card to see what the number actually means. No vanity metrics, just the ones that mattered."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proofs.map((p, i) => (
            <Card
              key={p.number + p.label}
              number={p.number}
              label={p.label}
              meaning={p.meaning}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
