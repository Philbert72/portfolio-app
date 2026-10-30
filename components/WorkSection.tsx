"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { projectId, tagId } from "@/lib/graph";
import PanelHeading from "./PanelHeading";
import WorkGraph from "./WorkGraph";

const categories = [
  { id: "all", label: "All" },
  { id: "ml", label: "Machine learning" },
  { id: "research", label: "Research" },
  { id: "web", label: "Web" },
] as const;

type Category = (typeof categories)[number]["id"];

const figureLabel = (p: Project) => `Fig. 2${String.fromCharCode(97 + projects.indexOf(p))}`;

/** Panel 2 and its figures. `intro` sits beside Figure 1 so the work shows in the first viewport. */
export default function WorkSection({ intro }: { intro: React.ReactNode }) {
  const [category, setCategory] = useState<Category>("all");
  const [tag, setTag] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  const flashTimer = useRef<number>(0);

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => (category === "all" || p.category === category) && (!tag || p.tags.includes(tag)),
      ),
    [category, tag],
  );
  const visible = useMemo(() => new Set(filtered.map(projectId)), [filtered]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: 0 };
    for (const p of projects) {
      if (tag && !p.tags.includes(tag)) continue;
      c.all++;
      c[p.category] = (c[p.category] ?? 0) + 1;
    }
    return c;
  }, [tag]);

  const selectTag = (t: string) => setTag((cur) => (cur === t ? null : t));

  const revealProject = (p: Project) => {
    if (!visible.has(projectId(p))) {
      setCategory("all");
      setTag(null);
    }
    requestAnimationFrame(() => {
      document.getElementById(`project-${p.num}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    setFlash(projectId(p));
    window.clearTimeout(flashTimer.current);
    flashTimer.current = window.setTimeout(() => setFlash(null), 1600);
  };

  const focus = hovered ?? (tag ? tagId(tag) : null);

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {intro}

        <section id="work" aria-labelledby="work-title" className="lg:col-span-8">
          <PanelHeading n={2} id="work-title">
            Selected work
          </PanelHeading>

          <div role="group" aria-label="Filter by category" className="mt-5 flex flex-wrap gap-1.5">
            {categories.map((c) => {
              const active = category === c.id;
              const n = counts[c.id] ?? 0;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={active}
                  disabled={n === 0 && !active}
                  onClick={() => setCategory(c.id)}
                  className={`inline-flex h-9 items-center gap-2 rounded-[3px] border px-3 text-[14px] font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40 ${
                    active ? "border-ink bg-ink text-paper" : "border-line-strong text-ink-2 hover:border-ink hover:text-ink"
                  }`}
                >
                  {c.label}
                  <span className={`tabular font-mono text-[11px] ${active ? "text-paper/70" : "text-ink-3"}`}>{n}</span>
                </button>
              );
            })}
            <AnimatePresence>
              {tag && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  onClick={() => setTag(null)}
                  aria-label={`Clear ${tag} filter`}
                  className="inline-flex h-9 items-center gap-1.5 rounded-[3px] bg-hi pl-3 pr-2 font-mono text-[12px] font-medium text-hi-ink"
                >
                  uses {tag}
                  <X size={14} aria-hidden="true" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <figure className="mt-4">
            <div className="laser relative h-[480px] overflow-hidden rounded-[3px] border border-line bg-paper-2 sm:h-[460px] lg:h-[560px]">
              <WorkGraph
                projects={projects}
                visible={visible}
                focus={focus}
                activeTag={tag}
                onHover={setHovered}
                onSelectProject={revealProject}
                onSelectTag={selectTag}
              />
              <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-3 rounded-[3px] bg-paper/90 px-2.5 py-1.5 font-mono text-[11px] text-ink-2">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2.5 rounded-[2px] bg-ink" /> project
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2.5 rounded-full border border-ink" /> technology
                </span>
              </div>
            </div>
            <figcaption className="mt-3 text-[14px] leading-relaxed text-ink-2">
              <span className="font-mono text-[12px] font-medium text-ink">Fig. 1.</span> Nine projects and the
              technologies they share. Hover to trace a connection, click a technology to filter, drag nodes to
              rearrange, click a project to jump to its figure.
            </figcaption>
          </figure>
        </section>
      </div>

      <ul id="work-figures" className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4" aria-label="Projects">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((p) => (
            <ProjectFigure
              key={p.num}
              project={p}
              activeTag={tag}
              highlighted={
                hovered === projectId(p) ||
                flash === projectId(p) ||
                (!!hovered && hovered.startsWith("t:") && p.tags.includes(hovered.slice(2)))
              }
              onHover={setHovered}
              onTag={selectTag}
            />
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <li className="col-span-full border border-dashed border-line-strong p-10 text-center text-ink-2">
            No projects match that combination.{" "}
            <button
              type="button"
              className="font-medium text-accent-text underline"
              onClick={() => {
                setCategory("all");
                setTag(null);
              }}
            >
              Clear filters
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

function ProjectFigure({
  project,
  activeTag,
  highlighted,
  onHover,
  onTag,
}: {
  project: Project;
  activeTag: string | null;
  highlighted: boolean;
  onHover: (id: string | null) => void;
  onTag: (tag: string) => void;
}) {
  const id = projectId(project);
  return (
    <motion.li
      layout
      id={`project-${project.num}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onPointerEnter={() => onHover(id)}
      onPointerLeave={() => onHover(null)}
      onFocusCapture={() => onHover(id)}
      onBlurCapture={() => onHover(null)}
      className="group relative flex flex-col"
    >
      <figure className="laser contents">
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-[3px] border bg-paper-2 transition-[transform,box-shadow,border-color] duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:shadow-lift ${
            highlighted ? "border-cobalt shadow-lift ring-2 ring-cobalt" : "border-line"
          }`}
        >
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1280px) 280px, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
          />
        </div>
        <figcaption className="mt-3 flex flex-1 flex-col">
          <h3 className="text-[15px] leading-snug">
            <span className="mr-1.5 font-mono text-[12px] font-medium text-ink-3">{figureLabel(project)}.</span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[18px] font-bold tracking-[-0.01em] text-ink outline-none [font-stretch:105%] after:absolute after:inset-0 group-hover:text-accent-text focus-visible:after:rounded-[3px] focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-cobalt"
            >
              {project.title}
              <ArrowUpRight size={16} className="ml-1 inline align-[-2px] opacity-60 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              <span className="sr-only"> (GitHub repository, opens in a new tab)</span>
            </a>
          </h3>
          <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-2">{project.desc}</p>
          <p className="relative z-10 mt-auto flex flex-wrap items-center gap-1 pt-3 text-[12px]">
            <span className="mr-1 font-medium text-ink-3">Keywords</span>
            {project.tags.map((t) => {
              const active = activeTag === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => onTag(t)}
                  aria-pressed={active}
                  title={active ? `Clear ${t} filter` : `Show projects using ${t}`}
                  className={`rounded-[2px] px-1.5 py-0.5 font-mono text-[11.5px] transition-colors duration-150 ${
                    active ? "bg-hi text-hi-ink" : "text-ink-2 underline decoration-line-strong underline-offset-2 hover:bg-hi hover:text-hi-ink hover:no-underline"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </p>
        </figcaption>
      </figure>
    </motion.li>
  );
}
