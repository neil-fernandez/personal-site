# Personal Site (neilf.org) — Project Status

Last updated: 2026-10-31

## Current status

The site is **live at https://neilf.org**, deployed on Cloudflare Pages (Git integration — auto-deploy
on push to `main`). Static Astro portfolio: 5 featured EN705 projects + 5 interactive Python
prototypes + coursework, with dark-mode-aware pipeline diagrams and several in-browser ML demos
(TextWave embedding model via onnxruntime-web, MovieMate SVD). No backend.

## New chat recovery prompt

Paste this into a fresh AI coding session:

```text
We are building Neil Fernandez's personal site (neilf.org) in C:\Users\nfern\Desktop\personal_site.
It is a static Astro + Tailwind site deployed to Cloudflare Pages from the GitHub repo
neil-fernandez/personal-site.

Project root is C:\Users\nfern\Desktop\personal_site (a git repo). Windows; use `cmd /c` for npm
(PowerShell execution policy blocks npm.ps1).

First run:
  Set-Location C:\Users\nfern\Desktop\personal_site
  git log --oneline -8
  Get-Content STATUS.md
  Get-Content AGENTS.md
  Get-Content BLUEPRINT.md

Commands:
  npm run dev       # http://localhost:4321
  npm run build     # static build -> dist/
  npm run preview

Deploy: push to main -> Cloudflare Pages auto-builds (build `npm run build`, output `dist/`).
Rules: static-only (no backend unless a feature truly needs it); personal facts (title, work
history, testimonials, contact) are user-supplied, never invented.
```

## Done (exact order)

| # | What | Commit |
|---|------|--------|
| 1 | Blueprint + coding harness (Astro chosen over Next.js by measurement) | `aef8dfe` |
| 2 | Scaffold Astro + Tailwind + content collections | `f26a350` |
| 3 | Project + coursework content | `ae201f0` |
| 4 | Design system + SEO/accessibility | `bf8bd60` |
| 5 | OG image, avatar placeholder, browser review | `8c2e046` |
| 6 | Prepare for Cloudflare Pages deploy | `a64f747` |
| 7 | Branding + remove placeholder sections | `f0eb6e2` |
| 8 | Reposition as portfolio + story pages | `70ec914` |
| 9 | Interactive project demos | `4fc615a` |
| 10 | Real in-browser models (TextWave embedding, MovieMate SVD) | `1a69c5a` |
| 11 | 5 Python prototypes + dark-mode diagrams + coursework step visuals | `8cd4478` |
| 12 | Pin markdown plugin deps explicitly | `7597d13` |
| 13 | Retry Cloudflare deploy | `1e3b6e1` |

## Next

1. Fill remaining placeholders: work experience, testimonials, headshot, GitHub URL.
2. Optional polish: "Python" nav link, LFSR canvas resolution, accent-colour choice.
3. Optional: the public content/creator track (see `BLUEPRINT.md`).

## Decisions (locked)

- **Astro** (static) over Next.js — measured 4.9 KB vs 1.2 MB, 0 KB JS shipped.
- **Cloudflare Pages** + neilf.org, Git integration, auto-deploy on push to `main`.
- **Self-hosted Tailwind CSS**; HTMX deferred until a real partial-update interaction exists.
- **Dark/light toggle** via a `dark` class on `<html>` (diagrams use CSS variables to follow it).
- **No backend**; static only.

## Known inputs

- Name: Neil Fernandez. Tagline: "Transformation | Analytics | Automation".
- Projects: 5 EN705 (TechTrack, IronClad, MovieMate, TextWave, SecureBank) + 5 Python prototypes
  (KMeans, LFSR, Collinear, Luhn, Frequency) + JHU coursework + Python fundamentals.
- Contact (current): `nfern2@gmail.com`, LinkedIn `au.linkedin.com/in/nkfernandez`.

## Latest recovery checkpoint

- **Objective**: add 5 Python prototypes, theme-aware diagrams, and coursework step visuals.
- **Files changed**: `src/components/*Demo.astro`, `src/content/projects/*.md`, `public/diagrams/*.svg`,
  `astro.config.mjs`, `src/pages/*.astro`, `src/styles/global.css`, `src/content/config.ts`.
- **Verified**: `npm run build` passes (25 pages); deployed live to neilf.org.
- **Next atomic task**: none pending for the site itself — placeholders (experience/testimonials)
  await user content.
