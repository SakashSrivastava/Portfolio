# Sakash Srivastava — Portfolio

Personal portfolio of **Sakash Srivastava**, a Machine Learning & AI engineer. A fast, editorial / brutalist single-page site built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Live site: _add your Vercel URL here_

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom cream / ink / molten-orange theme
- **Framer Motion** — entrance, scroll, and hover animations
- **Lucide** icons · **Archivo** (display) + **Inter** (body) + **JetBrains Mono** (labels)

## Features

- Giant layered editorial hero with an annotated photo
- `⌘K` / `Ctrl+K` command palette for navigation
- Interactive flip-card **Proof** section (tap a number to see what it means)
- Seamless, GPU-composited footer marquee
- Ambient music that starts on first interaction, with a mute toggle and an animated equalizer (falls back to a generated pad if the audio file is missing)
- Working contact form that sends straight to the inbox via **Web3Forms** (no backend)
- Fully responsive, honors `prefers-reduced-motion`

---

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve the production build
```

> Requires Node 18.18+.

---

## Deploy (Vercel)

1. Push to GitHub.
2. Go to **vercel.com/new**, import the repo.
3. Vercel auto-detects Next.js — **no env vars or custom settings needed**. Click **Deploy**.

Every push to `main` auto-redeploys. Add a custom domain under **Settings → Domains**.

---

## Customize

Almost all content lives in one file: [`src/lib/data.ts`](src/lib/data.ts) (profile, projects, skills, experience, research, proof numbers, achievements, socials).

| What | Where |
| --- | --- |
| Text content | `src/lib/data.ts` |
| Contact form key | `WEB3FORMS_KEY` in `src/components/Contact.tsx` |
| Background music | `public/music.mp3` + `START` in `src/components/ui/SoundToggle.tsx` |
| Resume (PDF) | `public/resume.pdf` |
| Profile photo | `public/profile.jpg` |
| Colors / fonts | `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx` |

### Structure

```
src/
├─ app/           layout.tsx · page.tsx · globals.css
├─ components/     Navbar, Hero, About, Projects, Skills, Timeline,
│  │               Research, Proof, Contact, Footer
│  └─ ui/          CommandPalette, SoundToggle, MagneticButton,
│                  SectionHeading, ScrollProgress, Doodles
└─ lib/
   └─ data.ts     ← single source of truth
```

---

## Notes

- **Contact form:** powered by Web3Forms. The access key is public by design (safe to commit). If submissions fail on a live domain, add that domain under Domain Restriction in the Web3Forms dashboard.
- **Music:** `public/music.mp3` is a personal audio clip. If you deploy publicly, use a track you have the rights to (or a royalty-free one) to avoid copyright issues.
