import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Terminal, Award, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const profiles = [
  {
    name: "GitHub",
    handle: "@maheeth07",
    icon: Github,
    link: "https://github.com/maheeth07",
    color: "hover:text-[#2b3137]",
    bg: "bg-[#2b3137]/10",
    stats: "10+ Projects"
  },
  {
    name: "LinkedIn",
    handle: "Maheeth Varma",
    icon: Linkedin,
    link: "https://linkedin.com/in/maheeth-varma",
    color: "hover:text-[#0077b5]",
    bg: "bg-[#0077b5]/10",
    stats: "Professional Network"
  },
  {
    name: "LeetCode",
    handle: "maheeth07",
    icon: Code2,
    link: "https://leetcode.com/maheeth07",
    color: "hover:text-[#ffa116]",
    bg: "bg-[#ffa116]/10",
    stats: "600+ Solved"
  },
  {
    name: "CodeChef",
    handle: "maheeth07",
    icon: Terminal,
    link: "https://www.codechef.com/users/maheeth07",
    color: "hover:text-[#5b4638]",
    bg: "bg-[#5b4638]/10",
    stats: "Competitive Coder"
  }
];

export const Profiles = () => {
  return (
    <section id="profiles" className="py-12 bg-secondary/5 border-y border-border/50">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profiles.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} y={20}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col p-5 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow-sm`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${p.bg} ${p.color} transition-colors`}>
                    <p.icon size={22} />
                  </div>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-bold text-sm tracking-tight">{p.name}</h3>
                  <p className="text-[11px] text-muted-foreground mono">{p.handle}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-border/30 flex items-center gap-2">
                  <Award size={12} className="text-primary" />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-primary/80">
                    {p.stats}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
