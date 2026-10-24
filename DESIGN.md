---
name: Philbert Tan
description: A research poster pinned to a felt board in a conference poster hall.
colors:
  cobalt: "#1d3fd6"
  cobalt-ink: "#ffffff"
  cobalt-dim: "rgb(255 255 255 / 0.78)"
  accent-text: "#1d3fd6"
  hi: "#ffe14a"
  hi-ink: "#121418"
  pin: "#e2402f"
  laser: "#f2342b"
  board: "#3a3f47"
  board-ink: "#eceef1"
  board-dim: "#b9bec7"
  paper: "#fbfbf9"
  paper-2: "#f0f0eb"
  ink: "#121418"
  ink-2: "#41454d"
  ink-3: "#5d626c"
  line: "rgb(18 20 24 / 0.14)"
  line-strong: "rgb(18 20 24 / 0.28)"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 10vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 115"
  subtitle:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 105"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 110"
  title-figure:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 105"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
  label-sm:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: "0px"
  sm: "2px"
  md: "3px"
  lg: "4px"
  full: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "40px"
  xl: "48px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "48px"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "48px"
  chip-filter:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "36px"
  chip-filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "36px"
  keyword-tag:
    textColor: "{colors.ink-2}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  keyword-tag-active:
    backgroundColor: "{colors.hi}"
    textColor: "{colors.hi-ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  panel-heading:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  handout-pocket:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px 16px 16px"
  nav-link:
    textColor: "{colors.board-dim}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  nav-link-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  method-chip:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
---

# Design System: Philbert Tan

## Overview

**Creative North Star: "The Pinned Research Poster"**

The whole site is one printed research poster, pinned to a dark felt board in a conference poster hall. A single matte paper sheet carries everything: a full-width cobalt title banner with the name in heavy expanded type and an author line with superscript affiliations, then numbered panels read in order (Introduction, Selected work, Experience, Methods and tools, Conclusion), figures with "Fig. n." captions in mono, and a References list for outbound links. The felt board and a slim nav are the only things outside the sheet.

The register is academic print, not developer template: dense but ordered, flat paper with hairline rules, one saturated institutional blue for structure, and a yellow highlighter that a reader has run over the key phrases. Motion behaves like physical handling of the poster: the sheet settles onto the board, the pins press in, highlighter strokes sweep as phrases scroll into view, and over a figure the cursor becomes a presenter's laser dot. Everything else is still.

The dark theme is the hall with its lights dimmed: dark stock on a darker board, the same structure and the same roles. The previous dark neon look is explicitly rejected, as is the name-hero plus card-grid portfolio template.

**Key Characteristics:**
- One paper sheet on a felt board; the sheet is the only lifted plane at rest.
- Numbered cobalt panel headings read in poster order.
- Figures carry mono "Fig. n." captions; links live in a numbered References list.
- Yellow highlighter strokes on a few key phrases, never on blocks.
- Near-square corners (2-4px) everywhere; round only for physical round objects.
- Archivo expanded for poster titles, Hanken Grotesk for reading, JetBrains Mono for labels.

## Colors

A print palette: off-white stock and near-black ink, one institutional cobalt for structure, a highlighter yellow for emphasis, and pin red for the physical hardware.

### Primary
- **Poster Cobalt** (cobalt): the title banner, every numbered panel heading, the primary email button, the handout's download disc, the active row in the command menu, focus outlines, and lit edges and project nodes in Figure 1. It is the poster's structural color; it frames, it does not decorate. On dark stock it deepens to `#2a3fa8`.
- **Cobalt Link Ink** (accent-text): the text-safe cobalt for hovered links, figure titles on hover and lit graph labels. Same as cobalt on paper; lifts to `#a3b3ff` on dark stock so it passes AA.
- **Banner White** (cobalt-ink) and **Banner White, Dimmed** (cobalt-dim): type on cobalt; the dimmed tone carries the affiliation line.

### Secondary
- **Highlighter Yellow** (hi) with **Highlighter Ink** (hi-ink): the highlighter stroke on key phrases, text selection, the active keyword tag, the "uses X" clear-filter chip, the banner's availability dot, selected technology nodes in Figure 1, and the current item in the mobile menu. On dark stock it mellows to `#e9c933` and text under a landed stroke flips to hi-ink, like a real highlighter on dark paper.

### Tertiary
- **Push-pin Red** (pin): the four corner pins only, shaded as a physical dome.
- **Laser Red** (laser): the presenter's laser-dot cursor over figures only.

### Neutral
- **Felt Board** (board), **Board Chalk** (board-ink), **Board Dim** (board-dim): the felt behind the sheet (tiled `felt.png` texture over the board color), the nav wordmark and nav links. Dark: `#15171c`, `#dadde3`, `#9196a1`.
- **Poster Stock** (paper): the sheet itself and anything cut from it (the active nav pill, the command menu). Dark: `#17191e`.
- **Pocket Stock** (paper-2): one shade down for inset surfaces: the Figure 1 plate, project figure plates, the handout pocket, the portrait frame. Dark: `#1f2228`.
- **Print Ink** (ink), **Secondary Ink** (ink-2), **Caption Ink** (ink-3): headings and key values; running text; captions, dates, labels and counts. Dark: `#eceef2`, `#b4b8c1`, `#8f949e`.
- **Hairline** (line) and **Strong Rule** (line-strong): row dividers in lists, figure borders; outline-button and pocket borders. On dark stock they become white at 10% and 22%.

### Named Rules
**The Structural Blue Rule.** Cobalt marks structure and the single primary action: the banner, the panel numbers, the primary email button. It never fills a card or tints a background region.

**The Highlighter Rule.** Yellow is a mark a reader makes on text or a selection state, never a surface. At most a handful of phrases per screen carry a stroke.

**The Hardware Red Rule.** Red belongs to physical objects in the hall (pins, laser dot). It is never used for text, status or emphasis.

## Typography

**Display Font:** Archivo, expanded via its width axis (with ui-sans-serif, system-ui)
**Body Font:** Hanken Grotesk (with ui-sans-serif, system-ui)
**Label/Mono Font:** JetBrains Mono, weights 400 and 500 (with ui-monospace)

**Character:** Archivo stretched wide and set heavy reads as the poster title printed for across-the-room legibility; Hanken Grotesk keeps the panels readable at arm's length; JetBrains Mono is the figure-label and reference-number voice of a printed paper.

### Hierarchy
- **Display** (800, clamp(3.25rem, 10vw, 6rem), 0.88, width 118%): the name in the title banner only.
- **Headline** (800, clamp(2.25rem, 5.5vw, 4rem), 0.95, width 115%): the Conclusion statement; one per page.
- **Subtitle** (500, clamp(1.15rem, 2.2vw, 1.5rem), 1.375, width 105%): the poster's subtitle under the name, max 40ch.
- **Title** (700, 19px, 1, width 110%): numbered panel headings and the References heading.
- **Title, Figure** (700, 18px, width 105%): project figure titles and the handout's "Take a copy".
- **Body** (400, 15.5px, 1.625): Introduction prose. Long passages cap near 48-62ch.
- **Body, Small** (400, 14.5px, 1.625): figure descriptions, experience details, list rows. Experience rows use 17px semibold for the entry title.
- **Label** (500 mono, 12px): "Fig. n." markers, dates, reference numbers, method chips.
- **Label, Small** (400 mono, 11px): graph legend, filter counts, keyword tags (11.5px), kbd hints, the portrait caption.

### Named Rules
**The Width Axis Rule.** Archivo titles always carry their expanded width (105-118%) and negative tracking; unexpanded Archivo looks like a different face.

**The Mono Means Apparatus Rule.** Mono is for the paper's apparatus: figure labels, dates, counts, reference numbers, technology names. Never for prose or headings.

## Layout

The felt board fills the viewport; a single sheet (max 1280px, centered) sits on it with 8px side margins on phones and 24px from `sm`, and clears a fixed 64px nav (top padding 72px, 80px from `md`). The sheet has no internal max width beyond its own; inner padding steps 16 / 32 / 40px across `sm` and `md`.

Inside, the poster runs on a 12-column grid from `lg` (1024px) with 48px gutters. The first row pairs Panel 1 Introduction (4 columns) with Panel 2 and Figure 1 (8 columns) so the work is visible on arrival. Project figures follow as a grid of 1, 2 (`sm`) and 4 (`xl`) columns with 32px column and 40px row gaps. Experience and Methods split 7/5, as do Conclusion and References. Panel groups are separated by 64px; inside a panel the rhythm is 20px from heading to content, 12-16px between items, with lists ruled by hairlines rather than spaced boxes. Below `lg` everything stacks in reading order. Figure 1 is 360 / 460 / 560px tall across breakpoints.

## Elevation & Depth

Depth is physical and sparse: the paper sheet casts one soft shadow onto the felt, and everything printed on it is flat, separated by hairline rules and the one-step-darker pocket stock. Lift appears only on interaction (a project figure rising on hover) or for things held above the sheet (the command menu, the toast). The pins carry their own small cast shadow as objects. The nav is transparent over the felt until scroll, then becomes a frosted band of board color with a one-pixel dark hairline.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 2px 3px rgb(0 0 0 / 0.18), 0 24px 48px -20px rgb(0 0 0 / 0.55)`): the poster sheet on the board. One per page.
- **Lift** (`box-shadow: 0 2px 4px rgb(18 20 24 / 0.08), 0 18px 36px -16px rgb(18 20 24 / 0.32)`): hovered or highlighted project figures, the command menu, the toast.
- **Pin** (`box-shadow: 3px 5px 4px -1px rgb(0 0 0 / 0.4)`): push-pin heads only.

### Named Rules
**The One Sheet Rule.** Only the sheet is lifted at rest. Panels, headings and lists are printed on it and stay flat.

**The Lift Is Response Rule.** Lift appears in response to hover, focus or a linked highlight, or for an overlay held above the sheet; never as a static card treatment.

## Shapes

Corners are near-square, like trimmed print: 3px on every control, figure plate, panel heading and the handout; 2px on the smallest marks (keyword tags, method chips, kbd keys, the handout's paper tabs); 4px on the command menu. The sheet itself is square-cornered. Fully round shapes are reserved for round physical things: push pins, the handout's download disc, the availability dot, technology nodes in Figure 1, and the transient toast. Project nodes in Figure 1 are 3px-rounded squares, echoing the figure plates. Borders are 1px hairlines; the References heading uses a 2px ink underline as a printed rule.

## Components

### Buttons
Printed and plain: flat rectangles with a firm edge.
- **Shape:** near-square (3px), 44-48px tall.
- **Primary:** Poster Cobalt fill with Banner White text, 15px semibold, 20px side padding, leading mail icon. Used once: the Conclusion email button.
- **Hover / Focus:** primary rises 2px on the expo ease (200ms); focus is a 2px cobalt outline offset 3px.
- **Outline:** transparent with a Strong Rule border and Print Ink text; on hover the border darkens to ink (Copy email, Email me).

### Chips
- **Filter chips:** 36px, 3px corners, Strong Rule border, Secondary Ink text with a mono count. Active fills with Print Ink and Poster Stock text. Disabled at 40% opacity when the count is zero.
- **Keyword tags:** 11.5px mono, underlined with a Strong Rule decoration; hover and active fill with Highlighter Yellow. The "uses X" clear chip is a yellow mono pill with a close icon.
- **Method chips:** 12px mono in a 2px hairline box, static.

### Cards / Containers
There are no cards. Containers are poster panels and figure plates.
- **Figure plate:** Pocket Stock, 3px corners, hairline border, image top-aligned and cropped 4:3; on hover it lifts 4px with the Lift shadow and the image eases to 105% scale over 700ms. Highlight from the graph adds a cobalt border and 2px cobalt ring.
- **Captions:** "Fig. 2a." in mono Caption Ink, then the Archivo title linked to its repository, a Body Small description and a "Keywords" row.

### Navigation
- **Style:** fixed 64px band over the felt; Archivo wordmark at left in Board Chalk; section links at 14.5px medium in Board Dim.
- **Active:** a Poster Stock pill (3px) slides between links on a spring (stiffness 420, damping 36), with Print Ink text; it reads as a scrap of paper on the board.
- **Utility:** Search (with ⌘K hint) and theme toggle as 40px outline buttons in Board Dim at 40% border.
- **Mobile:** a menu button opens a full-width drop-down of 24px Archivo links ruled by white hairlines; the current section turns Highlighter Yellow.

### Panel Heading (signature)
A cobalt band, 3px corners, 19px Archivo bold expanded. The panel number sits in a 44px square darkened by 20% black at the left, the panel name follows. Numbers run 1 to 5 in reading order.

### Title Banner (signature)
Full-width Poster Cobalt across the top of the sheet: the name in Display, the Subtitle, then an author line (name with superscripts, numbered affiliations) in Banner White, Dimmed.

### Handout Pocket (signature)
The "take a copy" pocket for the CV: a Pocket Stock box with a Strong Rule border, two paper-stock tabs peeking above its top edge, "Take a copy" in Archivo and "Curriculum vitae, PDF" beneath, and a cobalt download disc at the right. On hover the tabs slide up (4-6px, 500ms expo) like copies being drawn and the disc nudges down.

### Highlighter Stroke (signature)
A yellow stroke with ragged ends, 0.82em tall at 72% of the line, sweeping from 0 to full width over 900ms (cubic-bezier(0.65, 0, 0.35, 1)) the first time the phrase enters view; it wraps cleanly across lines.

### Figure 1 Graph (signature)
A force graph on a Pocket Stock plate under the laser cursor: projects are 18px ink squares labelled in Hanken semibold, technologies are stock circles with ink strokes labelled in mono and sized by usage. Hover lights a project's connections in cobalt and dims the rest to about 20%; a selected technology fills yellow. A paper legend sits top-left in mono.

### References List
Numbered `[n]` mono rows ruled by hairlines: icon, bold label, mono handle that turns Cobalt Link Ink and underlines on hover, and an arrow that nudges up-right. The publication sits as the final reference in citation form.

## Do's and Don'ts

### Do:
- **Do** put every new section on the sheet as a numbered panel with a cobalt Panel Heading, continuing the reading order.
- **Do** caption any image, chart or diagram as a figure with a mono "Fig. n." label.
- **Do** list outbound links as numbered References rows, not as icon rows or social buttons.
- **Do** keep corners at 2-4px; reserve full rounding for physical round objects (pins, discs, dots, graph technology nodes).
- **Do** set Archivo titles with the width axis expanded (105-118%) and negative tracking.
- **Do** honor `prefers-reduced-motion`: pin-up, pin-press, highlighter sweeps and hover lifts collapse to instant.
- **Do** keep both themes on the same roles: dark stock (`#17191e`) on a darker board (`#15171c`), cobalt `#2a3fa8`, link ink `#a3b3ff`.

### Don't:
- **Don't** return to the dark neon look or the name-hero plus card-grid developer template.
- **Don't** introduce cards, tinted section backgrounds or shadows on panels; only the sheet is lifted at rest.
- **Don't** fill surfaces or buttons with Highlighter Yellow; it marks phrases and selection states only.
- **Don't** use pin or laser red for text, alerts or emphasis.
- **Don't** set prose or headings in JetBrains Mono.
