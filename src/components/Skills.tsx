import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, Database as DatabaseIcon, Cloud, Terminal, Layers, 
  ChevronLeft, ChevronRight, Binary, Cpu, Github, 
  Globe, Server, Layout, Search, Workflow, Network, Brain
} from "lucide-react";
import { Reveal } from "./Reveal";
import { MacWindow } from "./MacWindow";
import { cn } from "@/lib/utils";

// Helper to get skill icons
const getSkillIcon = (skill: string) => {
  const mapping: Record<string, string> = {
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "React-Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "Supabase": "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "Postman": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    "Railway": "https://railway.app/brand/logo-light.svg",
  };

  if (mapping[skill]) {
    return <img src={mapping[skill]} alt={skill} className="w-5 h-5 object-contain" />;
  }

  // Fallback map for specialty icons
  if (skill === "LangChain") return <Workflow size={20} className="text-emerald-500" />;
  if (skill === "LangGraph") return <Network size={20} className="text-blue-500" />;

  return <Binary size={20} className="text-muted-foreground" />;
};

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "JavaScript"],
    icon: Code2,
    gradient: "from-blue-500/20 to-cyan-500/20",
    color: "text-blue-500",
    description: "The core foundations of my technical stack, enabling versatile problem solving."
  },
  {
    title: "Frameworks",
    skills: ["React-Native", "React.js", "Next.js", "Node.js", "Express.js"],
    icon: Layers,
    gradient: "from-purple-500/20 to-pink-500/20",
    color: "text-purple-500",
    description: "Building scalable applications with modern, industry-standard frameworks."
  },
  {
    title: "AI Frameworks",
    skills: ["LangChain", "LangGraph"],
    icon: Brain,
    gradient: "from-indigo-500/20 to-blue-500/20",
    color: "text-indigo-500",
    description: "Developing intelligent agents and large language model applications."
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Supabase"],
    icon: DatabaseIcon,
    gradient: "from-emerald-500/20 to-teal-500/20",
    color: "text-emerald-500",
    description: "Architecting efficient data models and managing persistent storage solutions."
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
    icon: Terminal,
    gradient: "from-orange-500/20 to-yellow-500/20",
    color: "text-orange-500",
    description: "Optimizing the development workflow with professional-grade tooling."
  },
  {
    title: "Deployment Tools",
    skills: ["Vercel", "Railway"],
    icon: Cloud,
    gradient: "from-red-500/20 to-orange-500/20",
    color: "text-red-500",
    description: "Scaling and delivering applications to the cloud with seamless CI/CD."
  },
];

export const Skills = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const current = skillCategories[index];

  return (
    <section id="skills" className="py-20 md:py-28 overflow-hidden">
      <div className="container max-w-5xl">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mono text-xs uppercase tracking-widest text-primary mb-3">02 — Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Proficiency</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative group">
            <MacWindow 
              title={`skills.json — ${current.title}`}
              bodyClassName="p-0 h-[650px] md:h-[520px] flex flex-col md:flex-row overflow-hidden"
              className="border-primary/20 shadow-2xl"
            >
              {/* Sidebar navigation (Vertical on Desktop, Horizontal on Mobile) */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border/50 bg-secondary/20 p-2 md:p-4 shrink-0 overflow-x-auto no-scrollbar">
                <div className="flex md:flex-col gap-1 min-w-max md:min-w-0">
                  {skillCategories.map((cat, i) => (
                    <button
                      key={cat.title}
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      className={cn(
                        "text-left px-4 py-2.5 md:py-3 rounded-lg text-sm transition-all flex items-center gap-2 md:gap-3 shrink-0",
                        index === i 
                        ? "bg-primary/10 text-primary border border-primary/20 font-medium shadow-glow-sm" 
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      <cat.icon size={16} className={index === i ? "text-primary" : "text-muted-foreground"} />
                      <span>{cat.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main content area with animation */}
              <div className="flex-1 p-8 md:p-12 relative flex flex-col justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${current.gradient} border border-white/10 grid place-items-center`}>
                        <current.icon size={24} className={current.color} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">{current.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                      {current.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {current.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + 0.2 }}
                          className="px-4 py-3 rounded-xl glass border border-primary/10 flex items-center gap-3 group hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
                        >
                          <div className="w-8 h-8 rounded-lg bg-background border border-border grid place-items-center shrink-0 group-hover:shadow-glow-sm transition-all">
                            {getSkillIcon(skill)}
                          </div>
                          <span className="font-medium text-sm text-foreground/90 group-hover:text-primary transition-colors">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress bar at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary/30">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${((index + 1) / skillCategories.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </MacWindow>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full glass border border-border shadow-2xl grid place-items-center hover:bg-primary/10 hover:border-primary transition-all group active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full glass border border-border shadow-2xl grid place-items-center hover:bg-primary/10 hover:border-primary transition-all group active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
