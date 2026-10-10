# Personal Site Blueprint — neilf.org

Last updated: 2026-10-04

## Goal

A fast, mobile-first personal landing page that a recruiter opens from a CV link or QR code and, within ~10 seconds, understands who Neil is, what he can do (with proof), and how to contact him. Secondary goals: rank well for his name, load instantly, and stay cheap to host.

## Audience

Recruiters and hiring managers reviewing candidates. They scan for: positioning, concrete evidence of skills, and a clear way to respond.

## Positioning

Name: Neil Fernandez
Tagline: **Transformation | Analytics | Automation**
Narrative: engineer who connects data and models to decisions and production systems — across AI/ML, data, and cloud/delivery.

## Content inventory

### Sections (mobile-first order)

1. **Hero** — name, tagline, one-line value prop, primary CTA (contact), GitHub/LinkedIn/email links.
2. **About** — short bio + interests (robotics/autonomous systems, wildlife rescue, STEM teaching).
3. **Goals** — what he is looking for and building toward.
4. **Projects** — card grid, filterable by domain; each card shows name, one-liner, tech tags, and one concrete result/metric.
5. **Skills** — clusters (Python, ML/AI, data & databases, cloud/AWS, Docker/CI-CD, web).
6. **Experience** — placeholder until work history is supplied.
7. **Testimonials** — placeholder until quotes are supplied.
8. **Contact** — mailto or lightweight form + links.
9. **Footer** — minimal.

### Projects to feature

**EN705 (featured, primary):**

| Project | Domain | Key result to highlight |
| --- | --- | --- |
| ironclad | Face identification | vggface2 + MTCNN; Top-5 retrieval; robustness to blur/low-light |
| securebank | Fraud detection + secure data | multi-source ETL; SQLi defense |
| techtrack | Object detection | YOLO model selection; NMS tuning; hard-negative mining |
| moviemate | Recommender system | SVD; NDCG@10 = 0.775; diversity reranking; cold start |
| textwave | RAG question-answering | chunking + vector index; phi3/qwen2.5; sequential reranking; Docker/AWS |

**JHU modern software concepts (secondary "coursework" group):** 13 modules — personal website (Flask), web scraping, database queries, testing/docs, secure SQL, deploy anywhere (Docker), cloud computing (AWS), statistics, clustering, data dashboard, MLOps pipeline, neural network, LLM deployment.

**PythonAssignments:** a single "Python fundamentals" card with a one-line summary of each of the 14 modules.

## Design

- Mobile-first, single column to multi-column grid.
- Dark/light toggle (default follows system preference).
- Tailwind CSS; a neutral slate base with a single accent color (default TBD, user-changeable).
- Accessible: color never alone, alt text on images, contrast ≥ WCAG AA, keyboard navigable.
- Project cards include a metric ("NDCG@10 0.775", "mAP@0.5", "recall under blur") rather than only prose.

## Tech stack decision (spike: one of each)

Build a small identical slice in **Astro** and in **Next.js**, then compare and pick one.

| | Astro | Next.js |
| --- | --- | --- |
| Output | static HTML + minimal JS ("islands") | React; static export possible |
| SEO | excellent (pre-rendered) | good (SSG/SSR) |
| Interactivity | islands for theme/filter | full React |
| Bundle/baseline | smallest | larger |

Comparison criteria: developer experience, output size, build time, perceived interactivity, and ease of content updates (Markdown collections vs React components). Recommendation bias: **Astro** for a content-heavy, SEO-critical landing page; Next.js if the user prefers a React codebase.

## Hosting & deployment

- **Host:** Cloudflare Pages (free tier, global CDN, auto-SSL).
- **Domain:** `neilf.org` (Namecheap).
- **DNS:** point `neilf.org` and `www` to Cloudflare (nameservers or CNAME), redirect `www` to apex.
- **Repo:** a GitHub repository auto-deployed to Cloudflare Pages on push.
- **Analytics:** Cloudflare Web Analytics (free, privacy-friendly).
- **QR:** generate a QR code for the live URL for the CV.

## Roadmap

| Phase | Work | Notes |
| --- | --- | --- |
| 0 | Scaffold + harness + decisions | this blueprint; `.opencode/`; project dir |
| 1 | Spike: Astro vs Next.js | identical slice, compare, pick one |
| 2 | Content inventory + copy | subagents draft project blurbs from source; user approves about/goals/testimonials |
| 3 | Design system + layout | mobile-first, dark/light, Tailwind, accent |
| 4 | Build sections | hero → projects → skills → experience → testimonials → contact |
| 5 | SEO/accessibility/performance | meta, OG image, sitemap, robots, contrast, alt text, Lighthouse |
| 6 | Assets | headshot (placeholder now), favicon, OG image, project thumbnails |
| 7 | Deploy + domain + analytics + QR | Cloudflare Pages + neilf.org |
| 8 | Browser review + iterate | mobile/desktop, accessibility, real-user check |

## Agent roles & harness

Reuse the planner/implementer/reviewer discipline from the wealth project, adapted for a static site.

| Role | Model | Responsibility |
| --- | --- | --- |
| Planner | deepseek-v4-pro | architecture, design system, content structure, review, commit, deploy orchestration |
| Implementer | deepseek-v4.1-flash | build pages/components/styles/config/tests |
| Explore | deepseek-v4.1-flash | research hosting/DNS/SEO/accessibility and the reference site |
| Reviewer | gpt-6-luna (optional) | accessibility/SEO/design review on high-risk slices |

Delegation: read-only surveys → explore; page/component builds → implementer; project-blurb drafting → implementer with the source `CASE_ANALYSIS.md`/README paths. **Personal facts (title, work history, testimonials, goals, contact) are user-supplied or user-approved — never invented.**

## Placeholders & open items

- [ ] Contact URLs (email, LinkedIn, GitHub) — placeholder in templates until supplied.
- [ ] Accent/brand color — default chosen, user-changeable.
- [ ] Headshot — placeholder image.
- [ ] Work experience — placeholder section.
- [ ] Testimonials — placeholder section; user supplies quotes later.
- [ ] Domain/DNS credentials + GitHub repo for Cloudflare Pages (Phase 7).

## Content drafts (review/edit before use)

**About (draft):** "I'm Neil Fernandez — an engineer who connects transformation, analytics, and automation to turn data into decisions and ideas into working systems. I build across machine learning and AI, data and databases, and cloud and delivery infrastructure. Beyond engineering, I'm drawn to robotics and autonomous systems, wildlife rescue, and STEM teaching."

**Goals (draft):** "I'm looking for engineering roles where I can apply end-to-end skills — from data and models to production systems — with a focus on AI/ML, automation, and analytics. Longer term, I want to build toward robotics and autonomous systems while continuing to contribute to wildlife rescue and STEM education."
