"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { OPEN_COMMAND_MENU } from "./CommandMenu";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "record", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function SiteNav() {
  const [current, setCurrent] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lockedTo = useRef<string | null>(null);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // About and Work share the poster's first row, so position alone can't tell them apart:
    // the row reads as About, and Work takes over once the project figures reach the header.
    const markers: [string, string][] = [
      ["top", "#top"],
      ["about", "#about"],
      ["work", "#work-figures"],
      ["record", "#record"],
      ["contact", "#contact"],
    ];
    let frame = 0;
    const spy = () => {
      frame = 0;
      if (lockedTo.current) return;
      const line = 120;
      let id: string | null = null;
      for (const [key, selector] of markers) {
        const el = document.querySelector(selector);
        if (el && el.getBoundingClientRect().top <= line) id = key;
      }
      // The last section may never reach the line on a tall screen.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) id = "contact";
      setCurrent(id);
    };
    const onSpyScroll = () => {
      if (!frame) frame = requestAnimationFrame(spy);
    };
    // A user-initiated scroll releases the lock a nav click put on the highlight.
    const release = () => {
      lockedTo.current = null;
    };
    spy();
    window.addEventListener("scroll", onSpyScroll, { passive: true });
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchmove", release, { passive: true });
    window.addEventListener("keydown", release);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onSpyScroll);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchmove", release);
      window.removeEventListener("keydown", release);
      cancelAnimationFrame(frame);
    };
  }, []);

  // The clicked link stays highlighted even when its target shares a row with another section.
  const jumpTo = (id: string) => {
    lockedTo.current = id;
    setCurrent(id);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const openCommands = () => window.dispatchEvent(new Event(OPEN_COMMAND_MENU));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || menuOpen ? "bg-board/95 shadow-[0_1px_0_rgb(0_0_0/0.25)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-[3px] focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#top" className="font-display text-[18px] font-extrabold tracking-[-0.02em] text-board-ink [font-stretch:115%]">
          Philbert
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => {
            const active = current === s.id;
            return (
              <li key={s.id} className="relative">
                <a
                  href={`#${s.id}`}
                  onClick={() => jumpTo(s.id)}
                  aria-current={active ? "location" : undefined}
                  className={`relative z-10 block rounded-[3px] px-4 py-2 text-[14.5px] font-medium transition-colors duration-200 ${
                    active ? "text-ink" : "text-board-dim hover:text-board-ink"
                  }`}
                >
                  {s.label}
                </a>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-[3px] bg-paper"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCommands}
            className="hidden h-10 items-center gap-2 rounded-[3px] border border-board-dim/40 pl-3 pr-2 text-sm text-board-dim transition-colors hover:border-board-ink hover:text-board-ink sm:inline-flex"
          >
            <Search size={15} aria-hidden="true" />
            Search
            <kbd className="rounded-[2px] bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-board-dim">⌘K</kbd>
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="grid size-10 place-items-center rounded-[3px] border border-board-dim/40 text-board-dim transition-colors hover:border-board-ink hover:text-board-ink"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-[3px] bg-paper text-ink md:hidden"
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col px-4 pb-6 pt-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => {
                      jumpTo(s.id);
                      setMenuOpen(false);
                    }}
                    className={`flex h-14 items-center justify-between border-b border-white/10 font-display text-2xl font-bold tracking-[-0.02em] [font-stretch:110%] ${
                      current === s.id ? "text-hi" : "text-board-ink"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openCommands();
                  }}
                  className="mt-4 inline-flex h-11 items-center gap-2 rounded-[3px] border border-board-dim/40 px-4 text-sm text-board-dim"
                >
                  <Search size={15} aria-hidden="true" /> Search everything
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
