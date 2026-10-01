# Sakash Srivastava — Portfolio

A premium, interactive personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide** icons. Dark, solid color theme with an optional light mode, an interactive mouse-reactive particle background, magnetic buttons, 3D-tilt project cards, an animated experience timeline, and a working contact form, all respecting `prefers-reduced-motion`.

---

## Features

- **Hero** with animated entrance, particle network, glowing gradients, live stats, and CTAs (View Projects, Download Resume, Contact).
- **About** with story-driven copy + three "how I work" pillars.
- **Projects** — interactive tilt cards with expandable case studies, status badges, tech stacks, and GitHub/Demo links.
- **Skills** — six categories with animated proficiency bars.
- **Experience** — vertical timeline with a scroll-progress spine that fills as you scroll.
- **Research & Learning** — papers studied + domains being explored.
- **Achievements** — verifiable highlights (J.P. Morgan HireVue, Adobe top 5%, T&P shortlist, etc.).
- **Contact** — elegant form that opens the visitor's mail client (no backend needed) + direct links.
- Floating glass navbar, scroll-progress bar, custom scrollbar, light/dark toggle, fully responsive.

---

## Run locally

```bash
# 1. install dependencies (already done once)
npm install

# 2. start the dev server
npm run dev
# open http://localhost:3000

# production build / preview
npm run build
npm start
```

> Requires Node 18.18+ (you're on Node 24 — perfect).

---

## Deploy on Vercel

1. Push this folder to a GitHub repo:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Sakash-Srivastava/portfolio.git
git push -u origin main
```
2. Go to **https://vercel.com/new**, import the repo.
3. Framework preset auto-detects **Next.js** — no env vars or config needed. Click **Deploy**.
4. (Optional) Add a custom domain under **Settings → Domains**.

Alternatively, one-shot from the CLI:
```bash
npm i -g vercel
vercel        # follow prompts
vercel --prod # promote to production
```

---

## Project structure

```
Portfolio Sakash/
├─ public/
│  └─ resume.pdf            # your CV (already copied here)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx         # fonts (Inter + Sora), metadata, html theme class
│  │  ├─ page.tsx           # assembles all sections
│  │  └─ globals.css        # Tailwind layers, glass utility, scrollbar, reduced-motion
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Timeline.tsx
│  │  ├─ Research.tsx
│  │  ├─ Achievements.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Footer.tsx
│  │  └─ ui/
│  │     ├─ MagneticButton.tsx
│  │     ├─ CursorGlow.tsx
│  │     ├─ ScrollProgress.tsx
│  │     ├─ ParticleField.tsx
│  │     ├─ SectionHeading.tsx
│  │     └─ TiltCard.tsx
│  └─ lib/
│     └─ data.ts            # ← single source of truth. Edit content here.
├─ tailwind.config.ts
├─ next.config.mjs
├─ tsconfig.json
└─ package.json
```

---

## How to customize

**Almost everything lives in [`src/lib/data.ts`](src/lib/data.ts).** Edit that one file to update:
- Profile (name, headline, email, phone, location)
- Social links (GitHub / LinkedIn — **update the LinkedIn URL slug**)
- Projects, skills, timeline, research, achievements, hero stats

Colors/animation live in `tailwind.config.ts` and `globals.css`.

---

## What to add later (checklist)

- [ ] **LinkedIn URL** — in `data.ts`, `socials[1].href` currently guesses your slug. Replace with your real profile URL.
- [ ] **GitHub project links** — each project links to your GitHub root; point them at the actual repos.
- [ ] **Live demos** — add a `{ label: "Live Demo", href: "..." }` link to the Bengaluru predictor once the Flask app is hosted.
- [ ] **Resume** — `public/resume.pdf` is your current CV. Re-export and replace whenever it changes.
- [ ] **Project images** — cards use gradient placeholders. To use real screenshots, drop images in `public/` and render an `<img>` in the cover area of `Projects.tsx`.
- [ ] **Open Graph image** — add `public/og.png` (1200×630) and reference it in `layout.tsx` `openGraph.images` for rich link previews.
- [ ] **Sneaker Authenticity Checker** — marked "In progress"; flip to "Shipped" and add a repo when ready.
- [ ] **Custom domain** — e.g. `sakash.dev`, configured in Vercel.
- [ ] **Analytics** (optional) — add Vercel Analytics or Plausible.

---

Built with care. Curiosity → learning → real projects → leadership → what's next.
