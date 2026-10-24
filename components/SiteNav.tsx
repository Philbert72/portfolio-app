"use client";

import { useEffect, useState } from "react";
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
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // A section counts as current while it crosses the band just under the header.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(e.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    const hero = document.getElementById("top");
    if (hero) observer.observe(hero);
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

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
        scrolled || menuOpen ? "bg-bg/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#top" className="font-display text-[19px] font-bold tracking-[-0.03em]">
          Philbert Tan
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => {
            const active = current === s.id;
            return (
              <li key={s.id} className="relative">
                <a
                  href={`#${s.id}`}
                  aria-current={active ? "location" : undefined}
                  className={`relative z-10 block rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors duration-200 ${
                    active ? "text-bg" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {s.label}
                </a>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ink"
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
            className="hidden h-10 items-center gap-2 rounded-full border border-line-strong pl-3 pr-2 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink sm:inline-flex"
          >
            <Search size={15} aria-hidden="true" />
            Search
            <kbd className="rounded-md bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] text-ink-3">⌘K</kbd>
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="grid size-10 place-items-center rounded-full border border-line-strong text-ink-2 transition-colors hover:border-ink hover:text-ink"
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
            className="grid size-10 place-items-center rounded-full bg-ink text-bg md:hidden"
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
                    onClick={() => setMenuOpen(false)}
                    className={`flex h-14 items-center justify-between border-b border-line font-display text-2xl font-semibold tracking-[-0.02em] ${
                      current === s.id ? "text-accent-text" : "text-ink"
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
                  className="mt-4 inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-sm text-ink-2"
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
