# Personal Site — Project Memory

Personal landing page for Neil Fernandez, hosted at neilf.org. The plan lives in `BLUEPRINT.md`; the
**live state (done → next order + recovery prompt) lives in `STATUS.md`** — read it first. Treat
`BLUEPRINT.md` as the source of truth for scope and order.

## Operating rules

- Work on the next task in `BLUEPRINT.md`, not ad hoc features.
- Reusable code/config in `src/` and `public/`; durable docs in `docs/`; the plan in `BLUEPRINT.md`.
- Keep the site static and mobile-first; do not add a backend unless a feature genuinely needs it.
- Do not invent personal facts: title, work history, testimonials, goals, and contact details are user-supplied or user-approved.
- Placeholder content (headshot, testimonials, experience, contact URLs) must be clearly marked and easy to replace.
- Run the build and a mobile/desktop check before finishing a slice.

## Harness

Planner (deepseek-v4-pro) writes specs and reviews; implementer (deepseek-v4.1-flash) writes site code; explore (deepseek-v4.1-flash) does read-only research; reviewer (gpt-6-luna) gives optional read-only second opinions on accessibility/SEO/design. One implementer at a time.

## File ownership

**Planner-owned** (implementers never edit): `BLUEPRINT.md`, `README.md`, `AGENTS.md`, `docs/*`, `.opencode/*`, and git commits.

**Implementer-owned:** `src/pages/*`, `src/components/*`, `src/layouts/*`, `src/content/*`, `src/styles/*`, `public/*`, `tests/*`, and `package.json` (dependencies only when the spec allows).

## Verification

```powershell
npm run build
# browser check on mobile (390px) and desktop (1280px+): nav, projects, theme toggle, contact links
git status --short
```

## Cost control

Delegate read-only research to `explore`; implement page/component slices with `general`; reserve `reviewer` for accessibility/SEO/design decisions. Do not re-read source files an explore subagent already summarized.
