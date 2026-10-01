"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { timeline, leadership } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="experience" className="relative">
      <div className="section-pad">
        <SectionHeading
          index="04"
          kicker="Experience"
          title={
            <>
              Learning in <span className="mark-flame">the field</span>.
            </>
          }
          description="Research changes how I ask questions. Shipping changes how I answer them."
        />

        <div className="mt-12 border-t-2 border-ink">
          {timeline.map((item, i) => (
            <motion.div
              key={item.role + item.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group grid gap-4 border-b-2 border-ink py-7 md:grid-cols-[auto_1fr_auto] md:gap-8"
            >
              <div className="font-display text-3xl font-black text-flame md:w-14">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                <div className="mono text-ink-muted">
                  {item.period} · {item.location}
                </div>
                <h3 className="mt-1 font-display text-xl font-extrabold uppercase text-ink">
                  {item.org}
                </h3>
                <div className="text-sm font-medium text-flame">{item.role}</div>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-ink" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="self-start">
                <span className="mono border border-ink/25 px-2 py-1 text-[10px] text-ink">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & community — lower priority */}
        <div className="mt-14">
          <div className="mono mb-5 flex items-center gap-3 text-ink-muted">
            <span className="h-px w-8 bg-ink/30" />
            Also · Leadership &amp; Community
          </div>
          <div className="grid gap-px border-2 border-ink bg-ink sm:grid-cols-2">
            {leadership.map((item, i) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-paper p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="mono text-ink-faint">{item.period}</div>
                  <span className="mono text-[10px] text-flame">{item.tag}</span>
                </div>
                <h4 className="mt-2 font-display text-base font-extrabold uppercase text-ink">
                  {item.org}
                </h4>
                <div className="text-sm font-medium text-ink-soft">{item.role}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.points[0]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
