import type { Project } from "@/data/projects";

export interface GraphNode {
  id: string;
  kind: "project" | "tag";
  label: string;
  /** Number of projects a tag links to (1 for projects) */
  weight: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  fixed?: boolean;
}

export interface GraphLink {
  source: string;
  target: string;
}

export const projectId = (p: Project) => `p:${p.num}`;
export const tagId = (tag: string) => `t:${tag}`;

export function buildGraph(projects: Project[], width: number, height: number) {
  const nodes = new Map<string, GraphNode>();
  const links: GraphLink[] = [];
  const cx = width / 2;
  const cy = height / 2;

  projects.forEach((p, i) => {
    // Projects start on an inner ring, tags on an outer one, so the layout opens out rather than exploding.
    const a = (i / projects.length) * Math.PI * 2;
    nodes.set(projectId(p), {
      id: projectId(p),
      kind: "project",
      label: p.short,
      weight: 1,
      x: cx + Math.cos(a) * width * 0.2,
      y: cy + Math.sin(a) * height * 0.2,
      vx: 0,
      vy: 0,
    });
  });

  let t = 0;
  projects.forEach((p) => {
    p.tags.forEach((tag) => {
      const id = tagId(tag);
      const existing = nodes.get(id);
      if (existing) {
        existing.weight += 1;
      } else {
        const a = t++ * 2.399963; // golden angle
        nodes.set(id, {
          id,
          kind: "tag",
          label: tag,
          weight: 1,
          x: cx + Math.cos(a) * width * 0.38,
          y: cy + Math.sin(a) * height * 0.38,
          vx: 0,
          vy: 0,
        });
      }
      links.push({ source: projectId(p), target: id });
    });
  });

  return { nodes: [...nodes.values()], links };
}

/** One step of a small force simulation: repulsion, springs along links, and a pull to the centre. */
export function tick(
  nodes: GraphNode[],
  index: Map<string, GraphNode>,
  links: GraphLink[],
  width: number,
  height: number,
  alpha: number,
) {
  const cx = width / 2;
  const cy = height / 2;
  const scale = Math.min(width, height);
  const repulse = scale * scale * 0.009;

  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      let d2 = dx * dx + dy * dy;
      if (d2 < 1) {
        dx = Math.random() - 0.5;
        dy = Math.random() - 0.5;
        d2 = 1;
      }
      // Projects push each other harder so their labels don't collide.
      const f = (repulse / d2) * alpha * (a.kind === "project" && b.kind === "project" ? 2.5 : 1);
      const d = Math.sqrt(d2);
      const fx = (dx / d) * f;
      const fy = (dy / d) * f;
      a.vx -= fx;
      a.vy -= fy;
      b.vx += fx;
      b.vy += fy;
    }
  }

  const rest = scale * 0.2;
  for (const l of links) {
    const a = index.get(l.source)!;
    const b = index.get(l.target)!;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const d = Math.sqrt(dx * dx + dy * dy) || 1;
    // Shared tags sit between their projects; leaf tags hug their one project.
    const target = b.weight > 1 ? rest * 1.25 : rest * 0.7;
    const k = ((d - target) / d) * 0.05 * alpha;
    a.vx += dx * k;
    a.vy += dy * k;
    b.vx -= dx * k;
    b.vy -= dy * k;
  }

  const pad = 28;
  for (const n of nodes) {
    const pull = n.kind === "project" ? 0.006 : 0.003;
    n.vx += (cx - n.x) * pull * alpha;
    n.vy += (cy - n.y) * pull * alpha;
    if (n.fixed) {
      n.vx = 0;
      n.vy = 0;
      continue;
    }
    n.vx *= 0.82;
    n.vy *= 0.82;
    n.x = Math.max(pad, Math.min(width - pad, n.x + n.vx));
    n.y = Math.max(pad, Math.min(height - pad - 24, n.y + n.vy)); // keep clear of the legend
  }
}
