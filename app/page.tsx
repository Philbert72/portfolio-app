import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { certifications, profile, skills, timeline } from "@/data/profile";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/BrandIcons";
import CommandMenu from "@/components/CommandMenu";
import CopyEmailButton from "@/components/CopyEmailButton";
import Highlight from "@/components/Highlight";
import PanelHeading from "@/components/PanelHeading";
import SiteNav from "@/components/SiteNav";
import Toaster from "@/components/Toaster";
import WorkSection from "@/components/WorkSection";

const references = [
  { label: "GitHub", handle: "github.com/Philbert72", href: profile.links.github, Icon: GitHubIcon },
  { label: "LinkedIn", handle: "linkedin.com/in/philbert-tan", href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", handle: "instagram.com/philbert_tan11", href: profile.links.instagram, Icon: InstagramIcon },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main" className="px-2 pb-10 pt-[4.5rem] sm:px-6 md:pt-20">
        <article className="sheet relative mx-auto max-w-[1280px] bg-paper shadow-sheet">
          <Pins />
          <Banner />
          <div className="px-4 py-10 sm:px-8 md:px-10 lg:py-9">
            <WorkSection intro={<Introduction />} />
            <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-12">
              <Experience />
              <Toolkit />
            </div>
            <Contact />
          </div>
          <SheetFooter />
        </article>
      </main>
      <CommandMenu />
      <Toaster />
    </>
  );
}

function Pins() {
  return (
    <div aria-hidden="true">
      {["left-4 top-4", "right-4 top-4", "left-4 bottom-4 hidden sm:block", "right-4 bottom-4 hidden sm:block"].map((pos, i) => (
        <span key={pos} className={`absolute ${pos} z-20 size-0`}>
          <span
            className="pin absolute left-0 top-0 block size-[19px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff8a7a_0,var(--pin)_38%,#a5241a_100%)] shadow-[3px_5px_4px_-1px_rgb(0_0_0/0.4)]"
            style={{ animationDelay: `${0.65 + i * 0.08}s`, transform: "translate(-50%, -50%)" }}
          />
        </span>
      ))}
    </div>
  );
}

function Banner() {
  return (
    <header id="top" className="bg-cobalt px-4 pb-8 pt-12 text-cobalt-ink sm:px-8 md:px-10 md:pb-7 md:pt-9">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-display text-[clamp(3.25rem,10vw,6rem)] font-extrabold leading-[0.88] tracking-[-0.035em] [font-stretch:118%]">
            Philbert Tan
          </h1>
          <p className="mt-4 max-w-[40ch] font-display text-[clamp(1.15rem,2.2vw,1.5rem)] font-medium leading-snug tracking-[-0.01em] [font-stretch:105%]">
            Machine learning research, and the systems built around it
          </p>
          <p className="mt-4 flex flex-col gap-1 text-[15px] leading-relaxed text-cobalt-dim md:flex-row md:flex-wrap md:gap-x-6">
            <span className="font-semibold text-cobalt-ink">
              Philbert Tan<sup className="ml-0.5">1,2</sup>
            </span>
            <span>
              <sup>1</sup> BINUS University, Jakarta
            </span>
            <span>
              <sup>2</sup> National Sun Yat-sen University, Kaohsiung (exchange)
            </span>
          </p>
        </div>
        <p className="flex items-center gap-2.5 self-start rounded-[3px] border border-cobalt-ink/35 px-3.5 py-2 text-[14px] font-medium lg:self-end">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-hi opacity-70" />
            <span className="relative inline-flex size-2.5 rounded-full bg-hi" />
          </span>
          Open to internships and research collaborations
        </p>
      </div>
    </header>
  );
}

function Introduction() {
  return (
    <section id="about" aria-labelledby="about-title" className="lg:col-span-4">
      <PanelHeading n={1} id="about-title">
        Introduction
      </PanelHeading>

      <div className="mt-5 grid grid-cols-[minmax(0,148px)_1fr] gap-4">
        <figure>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-paper-2">
            <Image src="/profile.png" alt="Portrait of Philbert Tan" fill preload sizes="148px" className="object-cover" />
          </div>
          <figcaption className="mt-1.5 font-mono text-[11px] text-ink-3">The author.</figcaption>
        </figure>
        <dl className="self-start text-[13.5px]">
          {[
            ["Published", "IEEE AiDAS 2025"],
            ["GPA", "3.81 / 4.00"],
            ["Exchange", "NSYSU, Taiwan"],
            ["Focus", "ML · GNNs · Security"],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-line py-1 first:pt-0">
              <dt className="text-[11.5px] text-ink-3">{k}</dt>
              <dd className="tabular font-semibold leading-snug text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-ink-2">
        <p>
          I&apos;m a Computer Science student at BINUS University, spending this term at NSYSU in Taiwan. I research and
          build <Highlight delay={900}>machine learning systems</Highlight>, from graph neural networks that flag cloud
          data breaches to an agent that learns to land a lunar module.
        </p>
        <p>
          My <Highlight delay={1300}>IEEE paper</Highlight> detects data breaches in cloud environments in real time. I
          like messy, high-dimensional data and models that have to be useful, not just accurate.
        </p>
      </div>

      <Handout />
      <a
        href={`mailto:${profile.email}`}
        className="mt-3 flex h-11 items-center justify-center gap-2 rounded-[3px] border border-line-strong text-[14.5px] font-semibold text-ink transition-colors hover:border-ink"
      >
        <Mail size={16} aria-hidden="true" />
        Email me
      </a>
    </section>
  );
}

/** The pocket of take-away copies pinned beside a poster: here, the CV. */
function Handout() {
  return (
    <a
      href={profile.resume}
      download
      className="group relative mt-5 block rounded-[3px] border border-line-strong bg-paper-2 px-4 pb-4 pt-6 transition-colors hover:border-ink"
    >
      <span aria-hidden="true" className="absolute inset-x-4 -top-3 h-6">
        <span className="absolute inset-x-3 top-0 h-full rounded-t-[2px] border border-b-0 border-line bg-paper transition-transform duration-500 ease-out-expo group-hover:-translate-y-1.5" />
        <span className="absolute inset-x-1.5 top-1 h-full rounded-t-[2px] border border-b-0 border-line bg-paper transition-transform duration-500 ease-out-expo group-hover:-translate-y-1" />
      </span>
      <span className="relative flex items-center justify-between gap-4">
        <span>
          <span className="block font-display text-[18px] font-bold tracking-[-0.01em] [font-stretch:110%]">Take a copy</span>
          <span className="block text-[14px] text-ink-2">Curriculum vitae, PDF</span>
        </span>
        <span className="grid size-10 place-items-center rounded-full bg-cobalt text-cobalt-ink transition-transform duration-300 ease-out-expo group-hover:translate-y-0.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v12M6 11l6 6 6-6M5 20h14" />
          </svg>
        </span>
      </span>
    </a>
  );
}

function Experience() {
  return (
    <section id="record" aria-labelledby="record-title" className="lg:col-span-7">
      <PanelHeading n={3} id="record-title">
        Experience
      </PanelHeading>
      <ol className="mt-2">
        {timeline.map((t) => (
          <li key={t.title} className="group grid gap-x-6 gap-y-1 border-b border-line py-5 sm:grid-cols-[120px_1fr]">
            <span className="tabular pt-1 font-mono text-[12.5px] text-ink-3">{t.when}</span>
            <div>
              <h3 className="text-[17px] font-semibold leading-snug">
                {t.kind === "publication" ? <Highlight>{t.title}</Highlight> : t.title}
              </h3>
              <p className="text-[14.5px] text-ink-2">{t.org}</p>
              {t.detail && <p className="mt-1.5 max-w-[62ch] text-[14.5px] leading-relaxed text-ink-2">{t.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Toolkit() {
  return (
    <section aria-labelledby="toolkit-title" className="lg:col-span-5">
      <PanelHeading n={4} id="toolkit-title">
        Methods and tools
      </PanelHeading>
      <dl className="mt-2">
        {skills.map((s) => (
          <div key={s.group} className="border-b border-line py-4">
            <dt className="text-[13px] font-medium text-ink-3">{s.group}</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {s.items.map((item) => (
                <span key={item} className="rounded-[2px] border border-line px-1.5 py-0.5 font-mono text-[12px] text-ink-2">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      <h3 className="mt-7 text-[13px] font-medium text-ink-3">Certifications</h3>
      <ul className="mt-2">
        {certifications.map((c) => (
          <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-line py-2.5 text-[14.5px]">
            <span>{c.name}</span>
            {c.when && <span className="tabular font-mono text-[12px] text-ink-3">{c.when}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <PanelHeading n={5} id="contact-title">
          Conclusion
        </PanelHeading>
        <p className="mt-6 max-w-[16ch] font-display text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.03em] [font-stretch:115%]">
          Let&apos;s build something <Highlight>remarkable</Highlight>.
        </p>
        <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-ink-2">
          Open to research collaborations, internships and interesting problems. Questions about anything on this
          poster are welcome.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex h-12 items-center gap-2.5 rounded-[3px] bg-cobalt px-5 text-[15px] font-semibold text-cobalt-ink transition-transform duration-200 ease-out-expo hover:-translate-y-0.5"
          >
            <Mail size={17} aria-hidden="true" />
            {profile.email}
          </a>
          <CopyEmailButton
            email={profile.email}
            className="inline-flex h-12 items-center gap-2 rounded-[3px] border border-line-strong px-5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
          />
        </div>
      </div>

      <div className="lg:col-span-5">
        <h2 className="border-b-2 border-ink pb-2 font-display text-[19px] font-bold [font-stretch:110%]">References</h2>
        <ol className="mt-1">
          {references.map(({ label, handle, href, Icon }, i) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[28px_20px_1fr_auto] items-center gap-2 border-b border-line py-3.5 text-[14.5px]"
              >
                <span className="tabular font-mono text-[12px] text-ink-3">[{i + 1}]</span>
                <Icon size={16} className="text-ink-2" />
                <span>
                  <span className="font-semibold">{label}.</span>{" "}
                  <span className="font-mono text-[12.5px] text-ink-2 group-hover:text-accent-text group-hover:underline">{handle}</span>
                </span>
                <ArrowUpRight size={15} className="text-ink-3 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-text" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li className="grid grid-cols-[28px_20px_1fr] items-center gap-2 border-b border-line py-3.5 text-[14.5px]">
            <span className="tabular font-mono text-[12px] text-ink-3">[4]</span>
            <span />
            <span>
              Graph Neural Networks for Cloud Security: Detecting Data Breaches in Real Time.{" "}
              <em>IEEE AiDAS</em>, 2025.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}

function SheetFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-5 text-[13px] text-ink-3 sm:px-8 md:px-10">
      <span>© 2026 Philbert Tan</span>
      <span className="hidden sm:inline">
        Press <kbd className="rounded-[2px] border border-line-strong px-1.5 py-0.5 font-mono text-[11px]">⌘K</kbd> or{" "}
        <kbd className="rounded-[2px] border border-line-strong px-1.5 py-0.5 font-mono text-[11px]">/</kbd> to jump anywhere
      </span>
      <a href="#top" className="font-medium text-ink-2 hover:text-ink">
        Back to top
      </a>
    </footer>
  );
}
