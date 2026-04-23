"use client";

import { motion, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  
  const projects = [
    {
      title: "Disease Prediction System",
      desc: "Developed a diagnostic support tool using Scikit-Learn to predict patient health outcomes based on symptom datasets. Optimized for high recall.",
      tags: ["Python", "Machine Learning", "Pandas", "Sci-kit Learn"],
      githubUrl: "https://github.com/Philbert72/Healthcare-Disease-Prediction",
    },
    {
      title: "GF(2^8) Galois Field Arithmetic",
      desc: "Implemented finite field arithmetic over GF(2^8), including multiplication and multiplicative inverses via Extended Euclidean Algorithm for AES.",
      tags: ["Cryptography", "Algorithm", "Python", "Numpy"],
      githubUrl: "https://github.com/Philbert72",
    },
    {
      title: "Simplified DES (S-DES)",
      desc: "Complete implementation of the Simplified Data Encryption Standard. Includes key generation and complex fK functions for 8-bit block encryption.",
      tags: ["Security", "Encryption", "Algorithms"],
      githubUrl: "https://github.com/Philbert72",
    },
    {
      title: "Music Genre Classification",
      desc: "Implemented NMF for feature extraction and pattern recognition in audio signals to classify genres using pattern recognition.",
      tags: ["Signal Processing", "NMF", "Python", "Scikit-Learn"],
      githubUrl: "https://github.com/Philbert72/Classify-Music-Genre-NMF",
    },
    {
      title: "HomeHeal",
      desc: "A Laravel-based web application designed to streamline home-based healthcare services. Developed for Web Programming using PHP and MySQL.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/Philbert72/HomeHeal",
    },
    {
      title: "Wine Quality Analysis",
      desc: "Predicting wine quality using the WineQT dataset. Handles class imbalance and EDA to optimize classification model performance.",
      tags: ["Python", "Machine Learning", "Seaborn", "Pandas", "Numpy"],
      githubUrl: "https://github.com/Philbert72/Wine-Quality-Analysis",
    },
  ];

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    const speed = isHovered ? -0.5 : -3;
    const moveBy = speed * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <main className="space-y-24 md:space-y-32 pb-20 pt-8 md:pt-12 max-w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <FadeIn>
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Philbert
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed mx-auto md:mx-0">
              6th Semester Computer Science student at **BINUS University** &
              Exchange Student at **NSYSU Taiwan**. Specializing in AI research,
              Machine Learning, and Blockchain technology.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 items-center text-sm text-slate-400">
              <a href="mailto:philtan3805@gmail.com" className="hover:text-blue-400 transition-colors underline decoration-slate-800 underline-offset-4">
                philtan3805@gmail.com
              </a>
              <span className="hidden sm:inline text-slate-700">|</span>
              <div className="flex gap-4">
                <a href="#" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                <span className="text-slate-700">|</span>
                <a href="https://github.com/Philbert72" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-semibold transition-all">
                View Work
              </a>
              <a href="/resume.pdf" download className="px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-full text-sm font-semibold transition-all">
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Pic */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-3xl rotate-6 opacity-20"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl">
              <img src="/Profile.png" alt="Philbert Tan" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="space-y-10 px-6 md:px-20 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">About Me</h2>
            <div className="h-[1px] flex-grow bg-slate-800"></div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 md:gap-16 items-start">
          <div className="space-y-6 text-slate-400 text-sm md:text-base leading-relaxed">
            <p>
              I am a Computer Science student currently bridging the gap
              between operational leadership and deep technical research. My
              journey began in Jakarta, where I served as the{" "}
              <span className="text-blue-400 font-medium">Chief Operating Officer at MiniMemo</span>.
            </p>
            <p>
              Currently, I am an <span className="text-emerald-400 font-medium">Exchange Student at NSYSU in Taiwan</span>. 
              My focus is on <span className="text-white font-medium">AI and Security</span>, researching on Federated Learning and learning about Cryptography.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-4 text-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 text-center lg:text-left">Fast Facts</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-500">Location</span>
                <span className="text-slate-200">Kaohsiung, TW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">University</span>
                <span className="text-slate-200">BINUS / NSYSU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION*/}
      <section id="skills" className="space-y-10 px-6 md:px-20 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Technical Skills</h2>
            <div className="h-[1px] flex-grow bg-slate-800"></div>
          </div>
        </FadeIn>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SkillGroup title="AI & Research" color="text-blue-400" skills={["Python", "PyTorch", "NLP", "Machine Learning"]} />
          <SkillGroup title="Development" color="text-emerald-400" skills={["React", "TypeScript", "Laravel", "MySQL"]} />
          <SkillGroup title="Others" color="text-purple-400" skills={["Blockchain", "Cryptography", "Git", "S-DES", "GF(2^8)"]} />
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section 
        id="projects" 
        className="py-12 md:py-20 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FadeIn>
          <div className="flex items-center gap-4 mb-12 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Featured Work</h2>
            <div className="h-[1px] flex-grow bg-slate-800"></div>
          </div>
        </FadeIn>

        <div className="relative flex overflow-hidden pt-6 md:pt-10">
          <motion.div className="flex gap-4 md:gap-6 pr-4 md:pr-6" style={{ x }}>
            {[...projects, ...projects].map((project, index) => (
              <div key={index} className="hover:z-50 transition-all flex-shrink-0">
                <ProjectCard {...project} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <footer id="contact" className="px-6 md:px-20 pb-32 max-w-7xl mx-auto">
        <FadeIn>
          <div className="relative group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 md:p-16 text-center">
            {/* Background Glow Effect */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-700"></div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                  Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Me.</span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg">
                  Currently seeking opportunities in AI Research, Data Science, or Cybersecurity. 
                  Whether you have a question or just want to say hi, my inbox is always open!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a 
                  href="mailto:philtan3805@gmail.com"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-slate-200 rounded-full font-bold transition-all flex items-center justify-center gap-2"
                >
                  Say Hello
                </a>
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("philtan3805@gmail.com");
                    alert("Email copied to clipboard!");
                  }}
                  className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:bg-slate-800 text-white rounded-full font-bold transition-all"
                >
                  Copy Email
                </button>
              </div>

              <div className="flex justify-center gap-8 pt-8 text-slate-500 text-sm">
                <a href="https://github.com/Philbert72" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/philbert_tan11" target="_blank" className="hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          <p className="text-center mt-12 text-slate-600 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Philbert • Built with Next.js & Framer Motion
          </p>
        </FadeIn>
      </footer>
    </main>
  );
}

function SkillGroup({ title, color, skills }: { title: string; color: string; skills: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className={`text-xs font-bold uppercase tracking-[0.2em] ${color}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => <SkillTag key={skill} name={skill} />)}
      </div>
    </div>
  );
}

function SkillTag({ name }: { name: string }) {
  return (
    <span className="px-3 py-1.5 rounded-lg text-[10px] md:text-[11px] font-bold border border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:text-white transition-all">
      {name}
    </span>
  );
}