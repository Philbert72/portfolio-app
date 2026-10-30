# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A general audience, weighted equally: master's admissions committees and prospective supervisors, internship recruiters and hiring managers, and research labs or peers looking for a collaborator. They arrive from a CV, application or LinkedIn link, usually on a laptop, and decide within a minute whether Philbert is worth contacting.

## Product Purpose

Personal portfolio of Philbert, a Computer Science student at BINUS University (Jakarta), on exchange at NSYSU (Taiwan). Success means a visitor understands who he is and what he builds, finds the work, and contacts him or downloads the CV.

## Positioning

Undergraduate with published IEEE research (graph neural networks for real-time cloud breach detection, AiDAS 2025), applied machine learning projects (reinforcement learning, classification, NLP), thesis research on federated graph learning for multi-cloud security, full-stack web work, and operations experience as COO of a small business (MiniMemo).

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind v4, framer-motion, lucide-react; deployed on Vercel.
- Single page: hero, about, work (9 projects in `data/projects.ts`), experience, contact. CV at `public/Philbert CV.pdf` (exported from the Google Doc; `/Phil_resume.pdf` redirects to it).
- Existing interactions to keep working: project filtering, project/technology graph, command menu (Cmd/Ctrl+K), light/dark theme.

## Brand Commitments

- Name: "Philbert" (the owner's choice; no surname on the site). Portrait at `public/profile.png`.
- The site should carry his personality, not read as a generic developer template.

## Evidence on Hand

- Project screenshots in `public/projects/`, GitHub repos linked from `data/projects.ts`.
- CV facts in `data/profile.ts`, synced to the Google Doc "Philbert CV 2026" (no MiniMemo figures) (education, MiniMemo, publication, volunteering, certifications).
- The user chose not to show project metrics: no accuracy, F1 or result numbers on project entries. Never invent results, testimonials or affiliations.

## Product Principles

1. Personality first: the first viewport should say who Philbert is, not just state a name.
2. Show the work being explored, not only listed.
3. Motion with purpose: alive and delightful, never at the cost of reading speed.
4. Every claim traceable to the CV or a repository.

## Accessibility & Inclusion

Keyboard operable, WCAG AA contrast in both themes, honors `prefers-reduced-motion`.
