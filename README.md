# Neil Fernandez — Personal Site (neilf.org)

Static portfolio site, live at **https://neilf.org**.

Built with **Astro + Tailwind + content collections**, deployed to **Cloudflare Pages**
(auto-deploy on push to `main`). No backend — fully static.

## Getting started

```powershell
npm install
npm run dev      # http://localhost:4321
npm run build    # static build -> dist/
npm run preview  # serve the build
```

## Project memory

| File | Role |
|------|------|
| `STATUS.md` | live state: done → next order + recovery prompt |
| `BLUEPRINT.md` | the plan / source of truth |
| `AGENTS.md` | operating brief for AI coding assistants |
| `.opencode/` | harness (agent profiles + task delegation) |

## Layout

```
src/pages/        routes (index, projects/[slug])
src/components/   Nav, ProjectCard, interactive demo components
src/content/      content collections (projects) + config
src/styles/       global.css (Tailwind + diagram theming)
public/           static assets (diagrams/, model weights, onnxruntime wasm)
```

## Deploy

Push to `main` → Cloudflare Pages auto-builds (`npm run build`, output `dist/`).

## Rules

- Static-only — do not add a backend unless a feature genuinely needs it.
- Personal facts (title, work history, testimonials, contact) are user-supplied, never invented.
