"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  download?: boolean;
  external?: boolean;
  className?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  download,
  external,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    x.set(mx * 0.3);
    y.set(my * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 border-2 border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-150 will-change-transform hover:-translate-x-0.5 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:shadow-hard-flame"
      : "bg-paper text-ink hover:shadow-hard";

  const inner = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  const content = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={`${base} ${styles} ${className}`}
        >
          {inner}
        </a>
      ) : (
        <button onClick={onClick} className={`${base} ${styles} ${className}`}>
          {inner}
        </button>
      )}
    </motion.div>
  );

  return content;
}
