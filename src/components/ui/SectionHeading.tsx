"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const TOTAL = "07";

type Props = {
  index: string; // e.g. "02"
  kicker: string; // e.g. "SELECTED WORK"
  title: ReactNode;
  description?: string;
};

export default function SectionHeading({
  index,
  kicker,
  title,
  description,
}: Props) {
  return (
    <div className="border-t-2 border-ink pt-4">
      <div className="mono flex items-center justify-between text-ink">
        <span>{kicker}</span>
        <span className="text-ink-faint">
          <span className="font-bold text-flame">{index}</span> / {TOTAL}
        </span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mt-5 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
