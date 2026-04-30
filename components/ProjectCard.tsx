"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  githubUrl?: string;
  image: string; // The "contract" that requires an image path
}

export default function ProjectCard({
  title,
  desc,
  tags,
  githubUrl,
  image, // Destructured so you can use it in the <img> tag
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="flex-shrink-0 w-[300px] md:w-[400px] flex flex-col rounded-xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/80 hover:border-sky-500/50 transition-all duration-300 overflow-hidden"
    >
      {/* Project Image Header */}
      <div className="relative w-full h-48 overflow-hidden border-b border-white/5">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Title and Button Row */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl font-syne font-bold text-slate-100 leading-tight">
            {title}
          </h3>
          {githubUrl && githubUrl !== "#" && (
            <a
              href={githubUrl}
              target="_blank"
              className="flex-shrink-0 text-[10px] font-bold text-white/30 hover:text-sky-400 transition-colors border border-white/10 px-2 py-1 rounded h-fit uppercase tracking-wider"
            >
              GitHub →
            </a>
          )}
        </div>

        {/* Description */}
        <p className="flex-grow text-white/45 text-sm leading-relaxed mb-6">
          {desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold bg-sky-500/10 text-sky-400 border border-sky-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}