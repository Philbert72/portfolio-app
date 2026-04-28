"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showToast, setShowToast] = useState(false);

  // Handle cursor glow movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("philtan3805@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="relative min-h-screen bg-brand-dark text-brand-light selection:bg-sky-500/30 overflow-x-hidden font-sans">
      {/* Background Noise Layer */}
      <div className="noise fixed inset-0 pointer-events-none opacity-[0.04] z-0" />
<div className="fixed top-[-150px] right-[-150px] w-[600px] h-[600px] bg-sky-400/12 blur-[140px] rounded-full pointer-events-none z-0" />
<div className="fixed bottom-[10%] left-[-100px] w-[500px] h-[500px] bg-emerald-400/8 blur-[130px] rounded-full pointer-events-none z-0" />
      {/* Cursor Glow */}
      <div 
        className="fixed w-[300px] h-[300px] bg-sky-400/8 blur-[100px] rounded-full pointer-events-none z-0 transition-transform duration-300 ease-out"
        style={{ left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)' }}
      />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-10 py-5 bg-[#080c12]/80 backdrop-blur-xl border-b border-white/5">
        <div className="font-syne font-extrabold text-lg bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">PT</div>
        <ul className="hidden md:flex gap-8 list-none">
          {['About', 'Work', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-[13px] uppercase tracking-wider text-white/50 hover:text-sky-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a href="mailto:philtan3805@gmail.com" className="bg-gradient-to-r from-sky-400 to-emerald-400 text-[#080c12] px-5 py-2.5 rounded-full text-xs font-bold hover:opacity-80 transition-opacity">
          Say hello →
        </a>
      </nav>

      <div className="relative z-10 pt-20">
        {/* Hero */}
<FadeIn>
  <section id="hero" className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12 px-6 md:px-20 max-w-[900px] mx-auto pt-32">
    <div className="flex-1 space-y-8 text-center md:text-left">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-sky-400/30 rounded-full text-[10px] text-sky-400 uppercase tracking-widest mb-4">
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        Available for opportunities
      </div>
      
      <h1 className="font-syne font-extrabold text-[clamp(48px,8vw,86px)] leading-[0.92] tracking-tighter text-[#f0f4f8]">
        Philbert<br />
        <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">Tan.</span>
      </h1>
      
      <p className="text-white/45 text-base font-light leading-relaxed max-w-[450px]">
        6th Semester CS student at BINUS University & Exchange Student at NSYSU Taiwan. 
        Specializing in AI research, Machine Learning, and Blockchain technology.
      </p>

          <div className="flex items-center gap-6 pt-2 justify-center md:justify-start">
  <div className="flex items-center gap-8 pt-2 justify-center md:justify-start">
  <a 
    href="https://github.com/Philbert72" 
    target="_blank" 
    className="text-[13px] text-white/40 hover:text-sky-400 transition-colors tracking-wider uppercase font-medium border-b border-transparent hover:border-sky-400/50 pb-1"
  >
    GitHub
  </a>
  <a 
    href="https://www.linkedin.com/in/philbert-tan" 
    target="_blank" 
    className="text-[13px] text-white/40 hover:text-blue-400 transition-colors tracking-wider uppercase font-medium border-b border-transparent hover:border-blue-400/50 pb-1"
  >
    LinkedIn
  </a>
</div>
</div>

      <div className="flex gap-3 pt-4 justify-center md:justify-start">
        <a href="#work" className="bg-gradient-to-r from-sky-400 to-emerald-400 text-[#080c12] px-7 py-3.5 rounded-full text-[13px] font-bold hover:opacity-90 transition-all">
          View Work
        </a>
        <a href="/Phil_resume.pdf" download className="border border-white/10 text-white/70 px-7 py-3.5 rounded-full text-[13px] hover:border-white/30 transition-all">
          Download CV
        </a>
      </div>
    </div>

    {/* PROFILE PICTURE CONTAINER */}
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72">
      {/* Decorative Glow behind photo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-emerald-500 rounded-[2rem] rotate-6 opacity-10"></div>
      
      {/* Photo Frame */}
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
        <img 
          src="/profile.png" 
          alt="Philbert Tan" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</FadeIn>

        {/* About */}
        <section id="about" className="px-10 py-24 max-w-[900px] mx-auto">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.15em] text-sky-400 font-medium mb-4">Background</p>
            <h2 className="font-syne font-bold text-[clamp(28px,4vw,40px)] tracking-tight text-[#f0f4f8] leading-none mb-12">
              Built on curiosity,<br />driven by research.
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="text-[15px] leading-relaxed text-white/55 space-y-4">
                <p>I&apos;m a Computer Science student at <strong className="text-white/90 font-normal">BINUS University</strong>, currently on an exchange program at <strong className="text-white/90 font-normal">NSYSU Taiwan</strong>.</p>
                <p>I&apos;ve published IEEE research on detecting data breaches in cloud environments using GNNs, and I love turning complex ML problems into practical tools.</p>
              </div>
              <div className="border border-white/5 bg-white/2 rounded-2xl overflow-hidden">
                <StatRow label="Exchange" value="NSYSU, Taiwan" />
                <StatRow label="GPA" value="3.81 / 4.00" />
                <StatRow label="Focus" value="ML / GNN / Security" />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Work */}
        <section id="work" className="px-10 py-24 max-w-[900px] mx-auto">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.15em] text-sky-400 font-medium mb-4">Selected Work</p>
            <h2 className="font-syne font-bold text-[clamp(28px,4vw,40px)] tracking-tight text-[#f0f4f8] leading-none mb-12">Things I&apos;ve built.</h2>
            
            {/* Tabs */}
            <div className="flex gap-4 border-b border-white/5 mb-10">
              {['all', 'ml', 'web', 'research'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-2 text-[13px] capitalize transition-all border-b-2 ${
                    activeTab === tab ? "text-sky-400 border-sky-400" : "text-white/40 border-transparent hover:text-white/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col border-t border-white/5">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.num} project={project} />
                ))}
              </AnimatePresence>
            </div>
          </FadeIn>
        </section>

        {/* Contact */}
        <section id="contact" className="px-10 py-24 max-w-[900px] mx-auto">
          <FadeIn>
            <div className="bg-white/2 border border-white/5 rounded-[24px] p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-[20%] h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <h2 className="font-syne font-extrabold text-[clamp(32px,5vw,56px)] tracking-tighter text-[#f0f4f8] leading-none mb-4">
                Let&apos;s build<br />something <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">remarkable.</span>
              </h2>
              <p className="text-sm text-white/35 mb-10">Open to research collabs, internships, and interesting problems.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href="mailto:philtan3805@gmail.com" className="bg-gradient-to-r from-sky-400 to-emerald-400 text-[#080c12] px-7 py-3.5 rounded-full text-[13px] font-bold">philtan3805@gmail.com</a>
                <button onClick={copyEmail} className="border border-white/10 text-white/70 px-7 py-3.5 rounded-full text-[13px] hover:border-white/30 transition-all">Copy email</button>
              </div>

              <div className="flex justify-center gap-8 pt-8 border-t border-white/5">
        <a 
          href="https://github.com/Philbert72" 
          target="_blank" 
          className="text-[12px] uppercase tracking-widest text-white/20 hover:text-white transition-colors font-medium"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/philbert-tan" 
          target="_blank" 
          className="text-[12px] uppercase tracking-widest text-white/20 hover:text-white transition-colors font-medium"
        >
          LinkedIn
        </a>
        <a 
          href="https://www.instagram.com/philbert_tan11" 
          target="_blank" 
          className="text-[12px] uppercase tracking-widest text-white/20 hover:text-white transition-colors font-medium"
        >
          Instagram
        </a>
      </div>
            </div>
          </FadeIn>
        </section>

        

        <footer className="max-w-[900px] mx-auto px-10 py-6 border-t border-white/5 flex justify-between items-center text-[12px] text-white/25">
          <span>Philbert © 2026</span>
          <span>CS × AI × Research</span>
        </footer>
      </div>

      {/* Toast */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 px-5 py-2.5 rounded-full text-[13px] transition-all z-[999] ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Email copied!
      </div>
    </div>
  );
}

/* Helper Components */

function HeroMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-widest text-white/30">{label}</span>
      <span className="text-[13px] text-white/80">{value}</span>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white/[0.02] border-b border-white/5 last:border-none">
      <span className="text-[12px] text-white/35 tracking-tight">{label}</span>
      <span className="text-[13px] text-white/85 font-medium">{value}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="group relative flex justify-between items-start py-8 border-b border-white/5 cursor-pointer no-underline"
    >
      <div className="relative z-10">
        <div className="text-[11px] text-white/20 font-medium tracking-wider mb-3">{project.num}</div>
        
        {/* Updated Title: Increased from text-lg to text-xl/text-2xl and added font-syne */}
        <div className="font-syne font-bold text-xl md:text-2xl text-[#f0f4f8] mb-3 group-hover:text-sky-400 transition-colors tracking-tight">
          {project.title}
        </div>
        
        {/* Updated Description: Increased from text-[13px] to text-sm */}
        <div className="text-sm text-white/45 leading-relaxed max-w-[550px]">
          {project.desc}
        </div>
        
        <div className="flex gap-1.5 mt-5 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2.5 py-1 border border-sky-400/20 text-sky-400 rounded-full bg-sky-400/5 uppercase tracking-tight font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="text-white/20 text-2xl transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sky-400 pt-8">
        ↗
      </div>
      
      {/* Hover Background */}
      <div className="absolute -inset-x-5 inset-y-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity z-0" />
    </motion.a>
  );
}