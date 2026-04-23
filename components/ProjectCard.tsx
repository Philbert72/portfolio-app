"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  desc,
  tags,
  githubUrl,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="flex-shrink-0 w-[300px] md:w-[400px] flex flex-col p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-blue-500/50 transition-all duration-300 h-[280px]"
    >
      {/* Title and Button Row */}
      <div className="flex justify-between items-start gap-4 mb-4">
        <h3 className="text-xl font-bold text-slate-100 leading-tight">
          {title}
        </h3>
        {githubUrl && githubUrl !== "#" && (
          <a
            href={githubUrl}
            target="_blank"
            className="flex-shrink-0 text-[10px] font-bold text-slate-500 hover:text-white transition-colors border border-slate-700 px-2 py-1 rounded h-fit"
          >
            GitHub →
          </a>
        )}
      </div>

      {/* Description */}
      <p className="flex-grow text-slate-400 text-sm leading-relaxed mb-6">
        {desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
