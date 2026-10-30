import React from "react";
import { motion } from "framer-motion";
import { FileText, Send, Calendar, Linkedin, Github, Mail, Code2 } from "lucide-react";

export const Hero = ({ onReplayLoader }: { onReplayLoader?: () => void }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden"
    >
      {/* Subtle ambient lighting with modern blue aura */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-blue-500/[0.08] dark:bg-blue-500/[0.06] blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 w-[320px] h-[320px] bg-cyan-500/[0.06] dark:bg-cyan-500/[0.04] blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Floating Aesthetic Origami Butterfly */}
      <motion.div
        className="absolute left-[6%] sm:left-[10%] md:left-[15%] top-[24%] md:top-[28%] pointer-events-none hidden sm:block animate-flutter"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <svg
          className="w-8 h-8 text-zinc-400/80 dark:text-white/80 drop-shadow-[0_2px_12px_rgba(59,130,246,0.4)]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <polygon points="12,14 4,5 11,9" opacity="0.95" />
          <polygon points="12,14 11,9 12,2" opacity="0.75" />
          <polygon points="12,14 20,5 13,9" opacity="0.95" />
          <polygon points="12,14 13,9 12,2" opacity="0.75" />
          <polygon points="12,14 6,20 11,16" opacity="0.85" />
          <polygon points="12,14 18,20 13,16" opacity="0.85" />
        </svg>
      </motion.div>

      <div className="container max-w-3xl mx-auto flex flex-col items-start text-left relative z-10">
        {/* Circular Avatar with Glowing Blue Halo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <div className="relative group">
            {/* Pulsing ambient blue glow backdrop */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/40 via-cyan-400/30 to-blue-600/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Avatar Frame with User's Logo */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-blue-400/80 shadow-[0_0_40px_rgba(59,130,246,0.35)] bg-white dark:bg-zinc-950 p-0.5 animate-float">
              <img
                src="/download(1).jpeg"
                alt="Maheeth Varma"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Active availability badge */}
            <span
              className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-zinc-950 shadow-md"
              title="Available for new opportunities"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.22] mb-4 text-balance"
        >
          Hi, I'm Maheeth{" "}
          <span className="text-zinc-500 dark:text-zinc-400 font-normal">
            — Backend Engineer & AI Agent Developer.
          </span>
        </motion.h1>

        {/* Bio paragraph focusing on Backend & AI Agents */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 font-normal max-w-2xl"
        >
          I architect scalable backend systems, microservices, and high-performance APIs. Currently focusing on autonomous{" "}
          <strong className="text-zinc-950 dark:text-white font-medium">AI Agents</strong> & LLM workflows, driven by robust system architecture, with{" "}
          <strong className="text-zinc-950 dark:text-white font-semibold underline decoration-blue-500/60 decoration-2 underline-offset-4">
            1000+
          </strong>{" "}
          competitive programming problems solved.
        </motion.p>

        {/* Action Buttons Row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          {/* Resume / CV */}
          <a
            href="https://drive.google.com/file/d/1c1P97xKOeWSiVCK1J_RY28o8kS66z8M5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-900/90 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:border-blue-500/50"
          >
            <FileText size={16} className="text-zinc-500 dark:text-zinc-400" />
            <span>Resume / CV</span>
          </a>

          {/* Get in touch (High Contrast Pill) */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/10"
          >
            <Send size={15} />
            <span>Get in touch</span>
          </a>

          {/* Hire Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-900/90 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:border-blue-500/50"
          >
            <Calendar size={16} className="text-zinc-500 dark:text-zinc-400" />
            <span>Hire Me</span>
          </a>
        </motion.div>

        {/* Social Icons Row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/maheeth-varma-30a582348/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 rounded-lg hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
          >
            <Linkedin size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/maheeth07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 rounded-lg hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
          >
            <Github size={20} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/maheethvarma_07/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="p-1.5 rounded-lg hover:text-blue-500 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
            title="LeetCode (1000+ solved)"
          >
            <Code2 size={20} />
          </a>

          {/* Mail */}
          <a
            href="mailto:maheethvarma.007@gmail.com"
            aria-label="Email"
            className="p-1.5 rounded-lg hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
