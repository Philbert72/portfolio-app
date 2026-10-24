import Image from "next/image";
import { ArrowDown, ArrowUp, ArrowUpRight, Award, BookOpen, Briefcase, Download, GraduationCap, HeartHandshake, Mail } from "lucide-react";
import { certifications, profile, skills, timeline, type TimelineEntry } from "@/data/profile";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/BrandIcons";
import CommandMenu from "@/components/CommandMenu";
import CopyEmailButton from "@/components/CopyEmailButton";
import SiteNav from "@/components/SiteNav";
import Toaster from "@/components/Toaster";
import WorkSection from "@/components/WorkSection";

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: profile.links.instagram, Icon: InstagramIcon },
];

const kindIcon: Record<TimelineEntry["kind"], React.ReactNode> = {
  education: <GraduationCap size={18} aria-hidden="true" />,
  work: <Briefcase size={18} aria-hidden="true" />,
  publication: <BookOpen size={18} aria-hidden="true" />,
  volunteer: <HeartHandshake size={18} aria-hidden="true" />,
};

const kindLabel: Record<TimelineEntry["kind"], string> = {
  education: "Education",
  work: "Work",
  publication: "Publication",
  volunteer: "Volunteering",
};

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <WorkSection />
        <Record />
        <Contact />
      </main>
      <Footer />
      <CommandMenu />
      <Toaster />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1280px] px-4 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36">
      <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7 lg:col-span-8">
          <h1 className="hero-rise font-display text-[clamp(3.5rem,11vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em] [font-stretch:88%]">
            Philbert
            <br />
            Tan<span className="text-accent-text">.</span>
          </h1>
          <p className="hero-rise mt-8 max-w-[34ch] text-[clamp(1.25rem,2.2vw,1.6rem)] leading-snug text-ink [animation-delay:80ms]">
            I research and build machine learning systems, from graph neural networks that flag cloud data breaches
            to an agent that learns to land a lunar module.
          </p>
          <p className="hero-rise mt-5 max-w-[56ch] text-[17px] leading-relaxed text-ink-2 [animation-delay:140ms]">
            Computer Science at BINUS University, currently on exchange at National Sun Yat-sen University in Taiwan.
          </p>

          <div className="hero-rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:200ms]">
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-semibold text-accent-ink transition-transform duration-200 ease-out-expo hover:-translate-y-0.5 active:translate-y-0"
            >
              See my work
              <ArrowDown size={17} className="transition-transform duration-300 ease-out-expo group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-6 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              <Download size={17} aria-hidden="true" />
              Download CV
            </a>
            <ul className="ml-1 flex items-center gap-1">
              {socials.slice(0, 2).map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="grid size-12 place-items-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                  >
                    <Icon size={19} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="hero-rise relative mx-auto w-full max-w-[340px] [animation-delay:120ms] md:col-span-5 md:max-w-none lg:col-span-4">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-field" />
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-2">
              <Image
                src="/profile.png"
                alt="Portrait of Philbert Tan"
                fill
                preload
                sizes="(min-width: 768px) 400px, 340px"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption className="mt-8 flex items-center gap-2.5 text-sm text-ink-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
            </span>
            Open to internships and research collaborations
          </figcaption>
        </figure>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden border-y border-line bg-line md:mt-24 md:grid-cols-4">
        {[
          ["Published", "IEEE AiDAS, 2025"],
          ["GPA", "3.81 / 4.00"],
          ["Exchange", "NSYSU, Taiwan"],
          ["Focus", "ML · GNNs · Security"],
        ].map(([k, v]) => (
          <div key={k} className="bg-bg py-5 pr-4 [&:nth-child(even)]:pl-4 md:[&:not(:first-child)]:pl-6">
            <dt className="text-sm text-ink-3">{k}</dt>
            <dd className="tabular mt-1 text-[17px] font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-24 sm:px-8 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <h2 id="about-title" className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            Built on curiosity, driven by research.
          </h2>
        </div>
        <div className="space-y-5 text-[18px] leading-relaxed text-ink-2 md:col-span-6 md:col-start-7">
          <p>
            I&apos;m a Computer Science student at <strong className="font-semibold text-ink">BINUS University</strong> in
            Jakarta, spending this term at <strong className="font-semibold text-ink">NSYSU</strong> in Taiwan, where
            I&apos;m focusing on reinforcement learning and information security.
          </p>
          <p>
            My IEEE paper uses graph neural networks to detect data breaches in cloud environments in real time. I
            like that kind of problem best: messy, high-dimensional data and a model that has to be useful, not just
            accurate.
          </p>
          <p>
            Outside research I&apos;ve run operations for a small business and built full-stack apps in Laravel and
            React, so I care about shipping as much as modeling.
          </p>

          <div className="pt-6">
            <h3 className="mb-4 text-sm font-semibold text-ink">Toolkit</h3>
            <dl className="divide-y divide-line border-y border-line">
              {skills.map((s) => (
                <div key={s.group} className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]">
                  <dt className="text-[15px] text-ink-3">{s.group}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {s.items.map((item) => (
                      <span key={item} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[12px] text-ink-2">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Record() {
  return (
    <section id="record" aria-labelledby="record-title" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="record-title" className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            Experience
          </h2>
          <p className="mt-4 max-w-sm text-[17px] leading-relaxed text-ink-2">
            Study, research, work and volunteering, most recent first.
          </p>
        </div>

        <div className="md:col-span-8">
          <ol className="relative">
            {timeline.map((t) => (
              <li
                key={t.title}
                className="group grid gap-x-6 gap-y-1 border-t border-line py-6 transition-colors duration-200 sm:grid-cols-[140px_44px_1fr]"
              >
                <span className="tabular pt-2.5 font-mono text-[13px] text-ink-3">{t.when}</span>
                <span
                  className="hidden size-11 place-items-center rounded-full bg-surface-2 text-ink-2 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-ink sm:grid"
                  title={kindLabel[t.kind]}
                >
                  {kindIcon[t.kind]}
                </span>
                <div>
                  <p className="sr-only">{kindLabel[t.kind]}</p>
                  <h3 className="text-[19px] font-semibold leading-snug">{t.title}</h3>
                  <p className="text-[15px] text-ink-2">{t.org}</p>
                  {t.detail && <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-2">{t.detail}</p>}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl bg-surface p-6 ring-1 ring-line sm:p-8">
            <h3 className="flex items-center gap-2 text-[15px] font-semibold">
              <Award size={18} className="text-accent-text" aria-hidden="true" />
              Certifications
            </h3>
            <ul className="mt-4 divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3 text-[15px]">
                  <span>{c.name}</span>
                  {c.when && <span className="tabular font-mono text-[13px] text-ink-3">{c.when}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 pb-8 sm:px-8">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[28px] bg-field px-6 py-20 text-field-ink sm:px-12 md:px-16 md:py-28">
        <h2 id="contact-title" className="max-w-[14ch] font-display text-[clamp(2.75rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em] [font-stretch:88%]">
          Let&apos;s build something remarkable.
        </h2>
        <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-field-ink/80">
          Open to research collaborations, internships and interesting problems.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex h-14 items-center gap-3 rounded-full bg-signal px-6 text-[16px] font-semibold text-signal-ink transition-transform duration-200 ease-out-expo hover:-translate-y-0.5"
          >
            <Mail size={18} aria-hidden="true" />
            {profile.email}
            <ArrowUpRight size={18} className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <CopyEmailButton
            email={profile.email}
            className="inline-flex h-14 items-center gap-2 rounded-full border border-field-ink/40 px-6 text-[15px] font-semibold text-field-ink transition-colors hover:border-field-ink hover:bg-field-ink/10"
          />
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-field-ink/20 pt-8">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-[16px] font-medium text-field-ink/85 transition-colors hover:text-field-ink"
              >
                <Icon size={18} />
                <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-signal">{label}</span>
                <ArrowUpRight size={15} className="opacity-60" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-ink-3 sm:px-8">
      <span>© 2026 Philbert Tan</span>
      <span className="hidden sm:inline">
        Press <kbd className="rounded-md border border-line-strong px-1.5 py-0.5 font-mono text-[11px]">⌘K</kbd> or{" "}
        <kbd className="rounded-md border border-line-strong px-1.5 py-0.5 font-mono text-[11px]">/</kbd> to jump anywhere
      </span>
      <a href="#top" className="font-medium text-ink-2 hover:text-ink">
        Back to top <ArrowUp size={14} className="inline align-[-2px]" aria-hidden="true" />
      </a>
    </footer>
  );
}
