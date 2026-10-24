"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { projectId, tagId } from "@/lib/graph";
import WorkGraph from "./WorkGraph";

const categories = [
  { id: "all", label: "All" },
  { id: "ml", label: "Machine learning" },
  { id: "research", label: "Research" },
  { id: "web", label: "Web" },
] as const;

type Category = (typeof categories)[number]["id"];

export default function WorkSection() {
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
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-8 md:py-32">
      <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 id="work-title" className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
            Eight projects, from published research to full-stack apps. The map shows how they connect: hover a
            node to trace it, click a technology to filter, drag anything to rearrange.
          </p>
        </div>

        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
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
                className={`inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${
                  active
                    ? "border-ink bg-ink text-bg"
                    : "border-line-strong text-ink-2 hover:border-ink hover:text-ink"
                }`}
              >
                {c.label}
                <span className={`tabular font-mono text-xs ${active ? "text-bg/70" : "text-ink-3"}`}>{n}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative h-[360px] overflow-hidden rounded-2xl bg-field text-field-ink sm:h-[440px] lg:h-[calc(100vh-8rem)] lg:max-h-[680px]">
            <WorkGraph
              projects={projects}
              visible={visible}
              focus={focus}
              activeTag={tag}
              onHover={setHovered}
              onSelectProject={revealProject}
              onSelectTag={selectTag}
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 font-mono text-[11px] text-field-dim">
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2.5 rounded-[2px] bg-field-ink" /> project
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2.5 rounded-full border border-field-ink" /> technology
                </span>
              </span>
              <span className="hidden sm:inline">drag · hover · click</span>
            </div>
          </div>

          <AnimatePresence>
            {tag && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mt-4 flex items-center gap-3 text-sm text-ink-2"
              >
                Showing projects using
                <button
                  type="button"
                  onClick={() => setTag(null)}
                  className="inline-flex h-8 items-center gap-1.5 rounded-full bg-signal pl-3 pr-2 font-mono text-xs font-medium text-signal-ink"
                  aria-label={`Clear ${tag} filter`}
                >
                  {tag}
                  <X size={14} aria-hidden="true" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ul className="flex flex-col gap-4" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((p) => (
              <ProjectCard
                key={p.num}
                project={p}
                activeTag={tag}
                highlighted={hovered === projectId(p) || flash === projectId(p) || (!!hovered && hovered.startsWith("t:") && p.tags.includes(hovered.slice(2)))}
                onHover={setHovered}
                onTag={selectTag}
              />
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <li className="rounded-2xl border border-dashed border-line-strong p-10 text-center text-ink-2">
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
      </div>
    </section>
  );
}

function ProjectCard({
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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onPointerEnter={() => onHover(id)}
      onPointerLeave={() => onHover(null)}
      onFocusCapture={() => onHover(id)}
      onBlurCapture={() => onHover(null)}
      className={`group relative grid gap-5 rounded-2xl bg-surface p-4 transition-shadow duration-300 sm:grid-cols-[200px_minmax(0,1fr)] sm:p-5 ${
        highlighted ? "shadow-card ring-2 ring-accent" : "ring-1 ring-line"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-2 sm:aspect-auto sm:h-full sm:min-h-[140px]">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 640px) 200px, 100vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex min-w-0 flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.02em]">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
            >
              {project.title}
              <span className="sr-only"> (GitHub repository, opens in a new tab)</span>
            </a>
          </h3>
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-line-strong text-ink-2 transition-all duration-300 ease-out-expo group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink"
          >
            <ArrowUpRight size={17} className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-px group-hover:translate-x-px" />
          </span>
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{project.desc}</p>
        <ul className="relative z-10 mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((t) => {
            const active = activeTag === t;
            return (
              <li key={t}>
                <button
                  type="button"
                  onClick={() => onTag(t)}
                  aria-pressed={active}
                  title={active ? `Clear ${t} filter` : `Show projects using ${t}`}
                  className={`h-7 rounded-md px-2 font-mono text-[11.5px] transition-colors duration-150 ${
                    active ? "bg-signal text-signal-ink" : "bg-surface-2 text-ink-2 hover:bg-accent-soft hover:text-accent-text"
                  }`}
                >
                  {t}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.li>
  );
}
