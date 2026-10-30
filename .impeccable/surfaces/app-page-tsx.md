---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["components/WorkSection.tsx"]
---

# Home page

Scope: the single-page portfolio at `/`. Visitor mode: Experience (the work leads from the first viewport).

Audience and job: admissions committees, recruiters and research peers, weighted equally, deciding in about a minute whether to contact Philbert or take his CV. Proof on hand: IEEE AiDAS 2025 paper, 8 repositories with screenshots, CV facts. No project metrics (user choice).

## Direction contract

THESIS: The site is Philbert's research poster, pinned in a conference poster hall. It refuses the developer-portfolio template (name hero, card grid) and the dark neon look the site had before.

OWN-WORLD: A matte paper sheet pinned to a dark felt poster board. Full-width cobalt title banner, numbered panels with cobalt header rules, "Fig. n" captions in mono, yellow highlighter strokes on key phrases, push pins at the sheet corners, a "take a copy" handout pocket for the CV, and a references list for links. Archivo (expanded) for poster titles, Hanken Grotesk for body, JetBrains Mono for figure labels.

STORY: The visitor reads the poster the way they would at a session: title and authors, then the introduction and Figure 1 (the live project/technology graph), then the figures, then experience and contact. They leave knowing who he is, what he builds, and how to reach him.

FIRST VIEWPORT: Felt board with a slim nav. The poster sheet starts at the top: a cobalt banner with the title "Philbert Tan" in heavy expanded type, then an author line with affiliations (superscripts 1 BINUS, 2 NSYSU). Below the banner, two columns: left is Panel 1 Introduction (portrait, two sentences with highlighter marks, the handout pocket "Take a copy: CV, PDF" and an email button); right, wider, is Figure 1, the interactive graph, visible without scrolling.

FORM: Conference research poster (candidate 1 of 7 on the grounded list; chosen by the user as the pick over the dealt photo-booth direction). Seed key f40f773a. Signature interaction: the poster pins up on load (the sheet settles, then the pins press in), highlighter strokes sweep across key phrases as they scroll into view, and over a figure the cursor becomes a presenter's laser dot.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Dark theme reads as the hall lights dimmed: dark paper on a darker board.
