"use client";

import { useState } from "react";
import { ArrowUpRight, Send, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { profile, socials } from "@/lib/data";

// Get a free key at https://web3forms.com (enter your email, paste the key here).
// Until it's set, the form falls back to opening the visitor's mail app.
const WEB3FORMS_KEY = "8c0f4311-c994-45fc-a237-a6ec982bd3ee";
const DIRECT = Boolean(WEB3FORMS_KEY) && !WEB3FORMS_KEY.startsWith("YOUR_");

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!DIRECT) {
      mailtoFallback();
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio inquiry from ${form.name || "someone"}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:shadow-hard-sm";

  return (
    <section id="contact" className="relative">
      <div className="section-pad">
        <SectionHeading
          index="07"
          kicker="Contact"
          title={
            <>
              Let&apos;s build <span className="mark-flame">something</span>.
            </>
          }
          description="Open to ML and AI engineering roles and internships: agentic systems, LLM and RAG applications, computer vision, and research focused work."
        />

        <div className="mt-12 grid gap-px border-2 border-ink bg-ink lg:grid-cols-2">
          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-paper p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="What would you like to build together?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${field} resize-none`}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-paper transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-flame disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : status === "sent" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />{" "}
                  {DIRECT ? "Sent, thank you" : "Opening your mail app..."}
                </>
              ) : status === "error" ? (
                <>
                  <Send className="h-4 w-4" /> Try again
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
            <p className="text-xs text-ink-muted">
              {DIRECT ? "Sends straight to my inbox." : "This opens your email client."}{" "}
              Prefer direct?{" "}
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-flame underline-offset-2 hover:underline"
              >
                {profile.email}
              </a>
            </p>
            {status === "error" && (
              <p className="text-xs text-flame">
                Couldn&apos;t send just now — please email me directly.
              </p>
            )}
          </form>

          {/* direct links */}
          <div className="flex flex-col bg-paper p-6 sm:p-8">
            <p className="mono mb-4 text-ink">Or find me at</p>
            <div className="grid flex-1 grid-rows-4 gap-px bg-ink">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between bg-paper px-4 py-4 transition-colors hover:bg-flame"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-ink">
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
