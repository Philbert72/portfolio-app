"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Copy, CornerDownLeft, Download, Mail, Moon, Search, Sun } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { copyText } from "@/lib/toast";
import { toggleTheme, useTheme } from "@/lib/theme";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./BrandIcons";

interface Command {
  id: string;
  label: string;
  group: string;
  hint?: string;
  icon: React.ReactNode;
  run: () => void;
}

export const OPEN_COMMAND_MENU = "open-command-menu";

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

export default function CommandMenu() {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const { theme } = useTheme();

  const commands = useMemo<Command[]>(
    () => [
      { id: "about", group: "Go to", label: "About", icon: <ArrowRight size={16} />, run: () => go("about") },
      { id: "work", group: "Go to", label: "Work", icon: <ArrowRight size={16} />, run: () => go("work") },
      { id: "record", group: "Go to", label: "Experience", icon: <ArrowRight size={16} />, run: () => go("record") },
      { id: "contact", group: "Go to", label: "Contact", icon: <ArrowRight size={16} />, run: () => go("contact") },
      { id: "copy", group: "Actions", label: "Copy email address", hint: profile.email, icon: <Copy size={16} />, run: () => copyText(profile.email, "Email") },
      { id: "mail", group: "Actions", label: "Write an email", icon: <Mail size={16} />, run: () => (window.location.href = `mailto:${profile.email}`) },
      { id: "cv", group: "Actions", label: "Download CV", hint: "PDF", icon: <Download size={16} />, run: () => open(profile.resume) },
      {
        id: "theme",
        group: "Actions",
        label: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
        icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />,
        run: toggleTheme,
      },
      { id: "gh", group: "Elsewhere", label: "GitHub", hint: "Philbert72", icon: <GitHubIcon size={15} />, run: () => open(profile.links.github) },
      { id: "li", group: "Elsewhere", label: "LinkedIn", icon: <LinkedInIcon size={15} />, run: () => open(profile.links.linkedin) },
      { id: "ig", group: "Elsewhere", label: "Instagram", icon: <InstagramIcon size={15} />, run: () => open(profile.links.instagram) },
      ...projects.map((p) => ({
        id: `p-${p.num}`,
        group: "Projects",
        label: p.title,
        hint: p.tags.slice(0, 2).join(" · "),
        icon: <ArrowRight size={16} />,
        run: () => document.getElementById(`project-${p.num}`)?.scrollIntoView({ behavior: "smooth", block: "center" }),
      })),
    ],
    [theme],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.group} ${c.hint ?? ""}`.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement)?.closest("input, textarea, [contenteditable]");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_COMMAND_MENU, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_COMMAND_MENU, onOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      returnFocus.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      returnFocus.current?.focus?.();
    }
  }, [isOpen]);

  const close = () => {
    setOpen(false);
    setQuery("");
    setActive(0);
  };

  const runAt = (i: number) => {
    const cmd = results[i];
    if (!cmd) return;
    close();
    // Let the dialog unmount and scroll unlock before navigating.
    setTimeout(cmd.run, 10);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(active);
    } else if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  let lastGroup = "";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="absolute inset-0 bg-ink/40" onClick={close} aria-hidden="true" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            onKeyDown={onKeyDown}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[560px] overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-line"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={18} className="shrink-0 text-ink-3" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                placeholder="Jump to a section, project or action"
                aria-label="Search commands"
                aria-controls="command-list"
                aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
                role="combobox"
                aria-expanded="true"
                className="h-14 w-full bg-transparent text-[16px] text-ink caret-accent outline-none focus-visible:outline-none placeholder:text-ink-3"
              />
              <kbd className="hidden rounded-md border border-line-strong px-1.5 py-0.5 font-mono text-[11px] text-ink-3 sm:block">esc</kbd>
            </div>
            <ul ref={listRef} id="command-list" role="listbox" className="max-h-[min(420px,60vh)] overflow-y-auto p-2">
              {results.length === 0 && <li className="px-3 py-8 text-center text-sm text-ink-3">Nothing matches &ldquo;{query}&rdquo;.</li>}
              {results.map((c, i) => {
                const header = c.group !== lastGroup;
                lastGroup = c.group;
                return (
                  <li key={c.id} role="presentation">
                    {header && (
                      <div className="px-3 pb-1.5 pt-3 text-xs font-medium text-ink-3" aria-hidden="true">
                        {c.group}
                      </div>
                    )}
                    <div
                      id={`cmd-${c.id}`}
                      role="option"
                      aria-selected={i === active}
                      data-index={i}
                      onPointerMove={() => setActive(i)}
                      onClick={() => runAt(i)}
                      className={`flex h-11 cursor-pointer items-center gap-3 rounded-lg px-3 text-[15px] ${
                        i === active ? "bg-accent text-accent-ink" : "text-ink"
                      }`}
                    >
                      <span className={i === active ? "text-accent-ink" : "text-ink-3"} aria-hidden="true">
                        {c.icon}
                      </span>
                      <span className="flex-1 truncate">{c.label}</span>
                      {c.hint && (
                        <span className={`hidden truncate font-mono text-xs sm:block ${i === active ? "text-accent-ink/75" : "text-ink-3"}`}>
                          {c.hint}
                        </span>
                      )}
                      {i === active && <CornerDownLeft size={14} aria-hidden="true" />}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
