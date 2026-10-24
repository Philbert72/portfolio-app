"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { buildGraph, projectId, tagId, tick, type GraphLink, type GraphNode } from "@/lib/graph";

// Rendering reads a copy, so the simulation can mutate its own nodes freely between frames.
function snapshot(nodes: GraphNode[], links: GraphLink[]) {
  const copy = nodes.map((n) => ({ ...n }));
  return { nodes: copy, index: new Map(copy.map((n) => [n.id, n])), links };
}

interface WorkGraphProps {
  projects: Project[];
  visible: Set<string>;
  focus: string | null;
  activeTag: string | null;
  onHover: (id: string | null) => void;
  onSelectProject: (project: Project) => void;
  onSelectTag: (tag: string) => void;
}

export default function WorkGraph({
  projects,
  visible,
  focus,
  activeTag,
  onHover,
  onSelectProject,
  onSelectTag,
}: WorkGraphProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [layout, setLayout] = useState<{ nodes: GraphNode[]; index: Map<string, GraphNode>; links: GraphLink[] } | null>(null);
  const [dragging, setDragging] = useState(false);
  const sim = useRef<{
    nodes: GraphNode[];
    index: Map<string, GraphNode>;
    links: GraphLink[];
    alpha: number;
    raf: number;
  } | null>(null);
  const drag = useRef<{ node: GraphNode; startX: number; startY: number; moved: boolean } | null>(null);

  // Track the panel size; the simulation is laid out in real pixels so labels never scale.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize((prev) =>
        prev && Math.abs(prev.w - width) < 2 && Math.abs(prev.h - height) < 2
          ? prev
          : { w: Math.round(width), h: Math.round(height) },
      );
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!size) return;
    const { nodes, links } = buildGraph(projects, size.w, size.h);
    const index = new Map(nodes.map((n) => [n.id, n]));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const state = { nodes, index, links, alpha: 1, raf: 0 };
    sim.current = state;

    if (reduced) {
      for (let i = 0; i < 300; i++) tick(nodes, index, links, size.w, size.h, 1 - i / 300);
      state.alpha = 0;
    }

    const loop = () => {
      if (state.alpha > 0.02 || drag.current) {
        tick(nodes, index, links, size.w, size.h, Math.max(state.alpha, 0.08));
        state.alpha *= 0.985;
        setLayout(snapshot(nodes, links));
      }
      state.raf = requestAnimationFrame(loop);
    };
    state.raf = requestAnimationFrame(() => {
      setLayout(snapshot(nodes, links));
      loop();
    });
    return () => cancelAnimationFrame(state.raf);
  }, [projects, size]);

  const related = useMemo(() => {
    if (!focus) return null;
    const set = new Set<string>([focus]);
    if (focus.startsWith("p:")) {
      const p = projects.find((x) => projectId(x) === focus);
      p?.tags.forEach((t) => set.add(tagId(t)));
    } else {
      const tag = focus.slice(2);
      projects.filter((p) => p.tags.includes(tag)).forEach((p) => set.add(projectId(p)));
    }
    return set;
  }, [focus, projects]);

  const toLocal = (e: React.PointerEvent) => {
    const r = svgRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onPointerDown = (id: string) => (e: React.PointerEvent) => {
    const node = sim.current?.index.get(id);
    if (!node) return;
    e.preventDefault();
    setDragging(true);
    svgRef.current?.setPointerCapture(e.pointerId);
    node.fixed = true;
    drag.current = { node, startX: e.clientX, startY: e.clientY, moved: false };
    if (sim.current) sim.current.alpha = Math.max(sim.current.alpha, 0.4);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    if (Math.hypot(e.clientX - d.startX, e.clientY - d.startY) > 4) d.moved = true;
    const p = toLocal(e);
    d.node.x = p.x;
    d.node.y = p.y;
    if (sim.current && sim.current.alpha < 0.03) setLayout(snapshot(sim.current.nodes, sim.current.links));
  };

  const onPointerUp = () => {
    const d = drag.current;
    if (!d) return;
    d.node.fixed = false;
    drag.current = null;
    setDragging(false);
    if (sim.current) sim.current.alpha = Math.max(sim.current.alpha, 0.25);
    if (d.moved) return;
    if (d.node.kind === "project") {
      const p = projects.find((x) => projectId(x) === d.node.id);
      if (p) onSelectProject(p);
    } else {
      onSelectTag(d.node.label);
    }
  };

  const s = layout;

  const isLit = (id: string) => (related ? related.has(id) : true);
  const isVisibleNode = (n: GraphNode) => {
    if (n.kind === "project") return visible.has(n.id);
    return projects.some((p) => visible.has(projectId(p)) && p.tags.includes(n.label));
  };

  return (
    <div ref={wrapRef} className="relative h-full w-full touch-none select-none">
      {size && s && (
        <svg
          ref={svgRef}
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          className="block"
          role="img"
          aria-label="Graph linking each project to the technologies it uses. Use the filters beside it for keyboard access."
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={() => !dragging && onHover(null)}
        >
          <g>
            {s.links.map((l) => {
              const a = s.index.get(l.source)!;
              const b = s.index.get(l.target)!;
              const lit = related ? related.has(l.source) && related.has(l.target) : false;
              const shown = visible.has(l.source);
              return (
                <line
                  key={`${l.source}-${l.target}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={lit ? "var(--signal)" : "var(--field-ink)"}
                  strokeOpacity={lit ? 0.95 : related ? 0.08 : shown ? 0.28 : 0.08}
                  strokeWidth={lit ? 1.6 : 1}
                  style={{ transition: "stroke-opacity 200ms ease, stroke 200ms ease" }}
                />
              );
            })}
          </g>
          <g>
            {s.nodes.map((n) => {
              const lit = isLit(n.id);
              const shown = isVisibleNode(n);
              const isProject = n.kind === "project";
              const selected = !isProject && activeTag === n.label;
              const hot = related?.has(n.id) && focus !== null;
              const r = isProject ? 9 : 3 + Math.min(n.weight, 4) * 1.6;
              const flip = n.x > size.w - 110;
              const showLabel = isProject || n.weight > 1 || hot || selected;
              const opacity = !shown ? 0.18 : lit ? 1 : 0.22;
              return (
                <g
                  key={n.id}
                  transform={`translate(${n.x} ${n.y})`}
                  opacity={opacity}
                  style={{ transition: "opacity 200ms ease", cursor: dragging ? "grabbing" : "pointer" }}
                  onPointerDown={onPointerDown(n.id)}
                  onPointerEnter={() => !dragging && onHover(n.id)}
                >
                  <circle r={r + 10} fill="transparent" />
                  {isProject ? (
                    <rect
                      x={-r}
                      y={-r}
                      width={r * 2}
                      height={r * 2}
                      rx={3}
                      fill={hot ? "var(--signal)" : "var(--field-ink)"}
                      style={{ transition: "fill 200ms ease" }}
                    />
                  ) : (
                    <circle
                      r={r}
                      fill={selected || hot ? "var(--signal)" : "var(--field)"}
                      stroke={selected || hot ? "var(--signal)" : "var(--field-ink)"}
                      strokeWidth={1.5}
                      style={{ transition: "fill 200ms ease" }}
                    />
                  )}
                  {showLabel && (
                    <text
                      x={flip ? -(r + 7) : r + 7}
                      textAnchor={flip ? "end" : "start"}
                      y={4}
                      fill={hot || selected ? "var(--signal)" : "var(--field-ink)"}
                      fillOpacity={isProject || hot || selected ? 1 : 0.72}
                      fontSize={isProject ? 13 : 11}
                      fontWeight={isProject ? 600 : 400}
                      fontFamily={isProject ? "var(--font-sans)" : "var(--font-mono)"}
                      style={{ pointerEvents: "none", paintOrder: "stroke" }}
                      stroke="var(--field)"
                      strokeWidth={4}
                      strokeLinejoin="round"
                    >
                      {n.label}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      )}
    </div>
  );
}
