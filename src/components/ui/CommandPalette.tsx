"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CornerDownLeft,
  FileText,
  Hash,
  Search,
} from "lucide-react";
import { navLinks, socials, profile } from "@/lib/data";

type Cmd = { label: string; hint: string; run: () => void; external?: boolean };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, href.startsWith("mailto") ? "_self" : "_blank");
    }
  };

  const commands: Cmd[] = useMemo(
    () => [
      ...navLinks.map((l) => ({
        label: l.label,
        hint: "Jump to section",
        run: () => go(l.href),
      })),
      {
        label: "Download Resume",
        hint: "PDF",
        run: () => go(profile.resumeUrl),
        external: true,
      },
      ...socials.map((s) => ({
        label: s.label,
        hint: s.href.replace(/^https?:\/\//, "").replace(/^mailto:/, ""),
        run: () => go(s.href),
        external: true,
      })),
    ],
    []
  );

  const filtered = commands.filter((c) =>
    (c.label + c.hint).toLowerCase().includes(q.toLowerCase())
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => setActive(0), [q]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/40 px-4 pt-[18vh] backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onListKey}
            className="w-full max-w-lg border-2 border-ink bg-paper shadow-hard"
          >
            <div className="flex items-center gap-3 border-b-2 border-ink px-4 py-3">
              <Search className="h-4 w-4 text-ink-muted" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Jump to a section, open a link..."
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint"
              />
              <span className="mono text-[10px] text-ink-faint">ESC</span>
            </div>

            <ul className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-ink-muted">
                  Nothing found.
                </li>
              )}
              {filtered.map((c, i) => {
                const isSection = c.hint === "Jump to section";
                return (
                  <li key={c.label}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={c.run}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        i === active ? "bg-ink text-paper" : "text-ink"
                      }`}
                    >
                      {isSection ? (
                        <Hash className="h-3.5 w-3.5 shrink-0 opacity-70" />
                      ) : c.label === "Download Resume" ? (
                        <FileText className="h-3.5 w-3.5 shrink-0 opacity-70" />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-70" />
                      )}
                      <span className="text-sm font-medium">{c.label}</span>
                      <span
                        className={`ml-auto truncate text-[11px] ${
                          i === active ? "text-paper/60" : "text-ink-faint"
                        }`}
                      >
                        {c.hint}
                      </span>
                      {i === active && (
                        <CornerDownLeft className="h-3.5 w-3.5 shrink-0" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
