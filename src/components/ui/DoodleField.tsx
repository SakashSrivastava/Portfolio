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
import { Sparkle, Asterisk } from "./Doodles";

type Def = {
  C: (p: { className?: string }) => JSX.Element;
  top: string;
  left: string;
  size: number;
  depth: number;
  cls: string;
  delay: number;
};

// Just the left-margin stars (sparkles + an asterisk). They sit in the empty
// left gutter, out of the text, and drift gently with the cursor.
const ITEMS: Def[] = [
  { C: Sparkle, top: "11%", left: "3%", size: 22, depth: 26, cls: "text-flame/55", delay: 0 },
  { C: Asterisk, top: "55%", left: "2%", size: 20, depth: 32, cls: "text-flame/45", delay: 0.6 },
  { C: Sparkle, top: "88%", left: "4%", size: 18, depth: 34, cls: "text-flame/45", delay: 0.3 },
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
        className="h-full w-full animate-float"
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
