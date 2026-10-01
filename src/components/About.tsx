"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Scribble } from "./ui/Doodles";
import { education } from "@/lib/data";

const steps = [
  { n: "01", title: "Build", body: "a system that actually runs, end to end." },
  { n: "02", title: "Measure", body: "how it behaves on real, messy inputs." },
  { n: "03", title: "Harden", body: "find where it breaks and close the gaps." },
  { n: "04", title: "Ship", body: "put it in production, then do it again." },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-pad">
        <SectionHeading
          index="01"
          kicker="About"
          title={
            <>
              I turn hard problems into{" "}
              <span className="mark-flame">systems that run</span>.
            </>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-base leading-relaxed text-ink-soft"
          >
            <p>
              I&apos;m a <span className="font-semibold text-ink">Machine Learning and AI engineer</span>{" "}
              and a final year Electronics &amp; Communication Engineering student at LNMIIT,
              Jaipur.
            </p>
            <p>
              This year I designed and shipped two LLM systems on my own.{" "}
              <span className="font-semibold text-ink">SegLit</span>, an agentic research
              assistant over 276 medical imaging papers, runs live in production on Azure. And a{" "}
              <span className="font-semibold text-ink">multi agent orchestration system</span> I
              built from scratch without any framework, with a reviewer that verifies every output
              against real tool logs.
            </p>
            <p>
              Alongside that: a counterfeit sneaker verification pipeline at a startup, and deep
              learning for orbital wall segmentation as a visiting research intern at{" "}
              <span className="font-semibold text-ink">King&apos;s College London</span>, which I
              finished with a very strong letter of recommendation.
            </p>

            <div className="relative border-l-2 border-flame pl-5 text-lg font-medium text-ink">
              <Scribble className="mb-2 h-4 w-14 text-flame" />
              &ldquo;Build things reliable enough to actually use. Then measure that they are.&rdquo;
            </div>

            <div className="flex items-start gap-4 border-2 border-ink bg-paper p-5">
              <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-flame" />
              <div>
                <div className="font-semibold text-ink">{education.degree}</div>
                <div className="text-sm text-ink-muted">{education.school}</div>
                <div className="mono mt-1 text-ink-faint">
                  {education.period} · {education.cgpa}
                </div>
              </div>
            </div>
          </motion.div>

          {/* how I work */}
          <div>
            <div className="mono mb-5 text-ink">How I work</div>
            <div className="grid gap-px border-2 border-ink bg-ink">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-baseline gap-5 bg-paper px-6 py-6 transition-colors hover:bg-flame"
                >
                  <span className="font-display text-3xl font-black text-flame transition-colors group-hover:text-ink">
                    {s.n}
                  </span>
                  <div>
                    <div className="font-display text-xl font-extrabold uppercase text-ink">
                      {s.title}
                    </div>
                    <div className="text-sm text-ink-soft">{s.body}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mono mt-4 text-right text-ink-faint">...and repeat</div>
          </div>
        </div>
      </div>
    </section>
  );
}
