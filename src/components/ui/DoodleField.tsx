"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Sparkle, Orbit, Asterisk, Squiggle, Scribble } from "./Doodles";

type Def = {
  C: (p: { className?: string }) => JSX.Element;
  top: string;
  left: string;
  size: number;
  depth: number; // how far it drifts with the cursor (parallax)
  cls: string;
  anim: "float" | "spin";
  delay: number;
};

// Scattered around the viewport, weighted toward the edges. Low opacity so
// they read as ambient texture behind the content, never over it.
const ITEMS: Def[] = [
  { C: Sparkle, top: "13%", left: "6%", size: 26, depth: 30, cls: "text-flame/40", anim: "float", delay: 0 },
  { C: Orbit, top: "21%", left: "89%", size: 56, depth: 46, cls: "text-ink/15", anim: "spin", delay: 0 },
  { C: Asterisk, top: "45%", left: "3%", size: 22, depth: 38, cls: "text-flame/35", anim: "float", delay: 0.6 },
  { C: Squiggle, top: "60%", left: "92%", size: 62, depth: 28, cls: "text-ink/15", anim: "float", delay: 1.1 },
  { C: Sparkle, top: "82%", left: "9%", size: 20, depth: 42, cls: "text-flame/35", anim: "float", delay: 0.3 },
  { C: Scribble, top: "88%", left: "80%", size: 72, depth: 22, cls: "text-ink/12", anim: "float", delay: 1.6 },
  { C: Asterisk, top: "72%", left: "47%", size: 18, depth: 52, cls: "text-flame/25", anim: "spin", delay: 0 },
  { C: Orbit, top: "5%", left: "53%", size: 34, depth: 34, cls: "text-ink/12", anim: "spin", delay: 0 },
  { C: Sparkle, top: "36%", left: "71%", size: 22, depth: 46, cls: "text-flame/30", anim: "float", delay: 0.9 },
  { C: Squiggle, top: "52%", left: "27%", size: 52, depth: 18, cls: "text-ink/10", anim: "float", delay: 1.3 },
];

function Item({
  def,
  sx,
  sy,
}: {
  def: Def;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
}) {
  const x = useTransform(sx, (v) => v * def.depth);
  const y = useTransform(sy, (v) => v * def.depth);
  const C = def.C;
  return (
    <motion.div
      style={{ x, y, top: def.top, left: def.left, width: def.size, height: def.size }}
      className={`absolute ${def.cls}`}
    >
      <div
        className={`h-full w-full ${def.anim === "spin" ? "animate-spinSlow" : "animate-float"}`}
        style={{ animationDelay: `${def.delay}s` }}
      >
        <C className="h-full w-full" />
      </div>
    </motion.div>
  );
}

export default function DoodleField() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 18, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 45, damping: 18, mass: 0.7 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, mx, my]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {ITEMS.map((def, i) => (
        <Item key={i} def={def} sx={sx} sy={sy} />
      ))}
    </div>
  );
}
