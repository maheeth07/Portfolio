import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code2, Brain, X, CheckCircle2, Sparkles, Rocket } from "lucide-react";
import { MacWindow } from "./MacWindow";
import { Reveal } from "./Reveal";
import { TrafficLights } from "./TrafficLights";
import { cn } from "@/lib/utils";

const projectCategories = [
  {
    title: "Development Projects",
    icon: Code2,
    description: "Full-stack engineering with focus on performance and robust system architectures.",
    projects: [
      {
        title: "Tryber",
        description: "Gym Management Platform with member registration and payment tracking.",
        longDescription: "A full-stack gym management platform designed for seamless member registration, membership approvals, and payment tracking. Features automated lifecycle management and intelligent fitness assistance.",
        features: [
          "Developed full-stack member management platform",
          "Automated membership lifecycle with validity calculation",
          "Integrated LangChain-powered diet/fitness chatbot",
          "Implemented complex approval workflows"
        ],
        link: "https://tryber-l8cv.vercel.app/",
        repo: "https://github.com/maheeth07/Tryber",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "LangChain", "Vercel", "Railway"],
        accent: "from-blue-500/20 to-cyan-500/20"
      },
      {
        title: "CodeClash",
        description: "Competitive coding platform with real-time evaluation and Judge0 integration.",
        longDescription: "A high-performance coding contest platform enabling users to write, submit, and evaluate code in real time. Features an integrated compiler using Judge0 API and a sophisticated Monaco Editor interface.",
        features: [
          "Built full-stack coding contest engine",
          "Integrated Judge0 API for remote code execution",
          "Monaco Editor integration for in-browser IDE experience",
          "Real-time evaluation via Express backend APIs"
        ],
        link: "#",
        repo: "https://github.com/maheeth07/CodeClash",
        tags: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Judge0 API"],
        accent: "from-emerald-500/20 to-teal-500/20"
      },
      {
        title: "GDG VIIT Website",
        description: "Official community website for Google Developer Group VIIT.",
        longDescription: "Built and deployed the official GDG VIIT community website. It features a modern UI, dynamic event pages, and dedicated team sections, serving as the central hub for the GDG community at VIIT.",
        features: [
          "Deployed official GDG VIIT community portal",
          "Modern UI with dynamic event management",
          "Responsive interface for active community use",
          "Scalable architecture for high-traffic updates"
        ],
        link: "https://gdgviit2k25.vercel.app/",
        repo: "https://github.com/maheeth07/GDG-Website",
        tags: ["Next.js", "Tailwind CSS", "Vercel"],
        accent: "from-orange-500/20 to-yellow-500/20"
      }
    ]
  },
  {
    title: "AI Based Projects",
    icon: Brain,
    description: "Pushing the boundaries of intelligent automation and agentic workflows.",
    projects: [
      {
        title: "CodeCrafter",
        description: "AI-powered frontend code generator using LangGraph agents.",
        longDescription: "An advanced AI-powered frontend code generator utilizing LangGraph agents for structured planning and task execution. It converts user prompts into production-ready HTML, CSS, and JavaScript components automatically.",
        features: [
          "Built AI frontend generator with LangGraph agents",
          "Structured planning and multi-agent task execution",
          "Automatic prompt-to-component conversion",
          "Clean code output for HTML, CSS, and JS"
        ],
        link: "#",
        repo: "https://github.com/maheeth07/CodeCrafter",
        tags: ["Python", "LangGraph", "LangChain", "Pydantic", "Agent Design"],
        accent: "from-purple-500/20 to-pink-500/20"
      },
      {
        title: "StartSphere AI",
        description: "Advanced AI model for startup ecosystem analytics and growth.",
        longDescription: "StartSphere leverages deep learning to analyze startup ecosystems, predict growth potential, and provide strategic insights for founders and investors using customized AI model architectures.",
        features: [
          "Developed custom AI model for startup analytics",
          "Predictive growth modeling for early-stage ventures",
          "Data-driven strategic insight generation",
          "Integration with dynamic market data feeds"
        ],
        link: "#",
        repo: "https://github.com/maheeth07/StartSphere-AI-Model",
        tags: ["Python", "PyTorch", "LLMs", "Data Analytics"],
        accent: "from-indigo-500/20 to-blue-500/20"
      },
      {
        title: "Sign2Text",
        description: "Real-time sign language translation using computer vision.",
        longDescription: "A socially impactful tool that uses deep learning to translate sign language gestures into text and speech in real-time, bridging communication gaps.",
        features: [
          "Gesture Recognition using CNN architectures",
          "Real-time FPS optimization for mobility",
          "Voice Output integration for accessibility",
          "Privacy-focused on-device processing"
        ],
        link: "#",
        repo: "https://github.com/maheeth07/Sign-to-Text",
        tags: ["PyTorch", "OpenCV", "Flask"],
        accent: "from-red-500/20 to-orange-500/20"
      }
    ]
  }
];

export const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState<null | any>(null);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projectCategories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projectCategories.length) % projectCategories.length);
  };

  const current = projectCategories[index];

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 500 : -500, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 500 : -500, opacity: 0 }),
  };

  return (
    <section id="projects" className="py-20 md:py-28 overflow-hidden">
      <div className="container max-w-6xl">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mono text-xs uppercase tracking-widest text-primary mb-3">04 — Work</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Personal Projects</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <MacWindow
              title={`projects.sh — ${current.title}`}
              bodyClassName="p-0 h-auto md:min-h-[480px] flex flex-col md:flex-row overflow-hidden"
              className="border-primary/20 shadow-2xl"
            >
              <div className="w-full md:w-60 border-b md:border-b-0 md:border-r border-border/50 bg-secondary/20 p-2 md:p-4 shrink-0 overflow-x-auto no-scrollbar">
                <div className="flex md:flex-col gap-1 min-w-max md:min-w-0">
                  {projectCategories.map((cat, i) => (
                    <button
                      key={cat.title}
                      onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                      className={cn(
                        "text-left px-4 py-2 md:py-2.5 rounded-lg text-sm transition-all flex items-center gap-2 md:gap-3 shrink-0",
                        index === i ? "bg-primary/10 text-primary border border-primary/20 font-medium shadow-glow-sm" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      <cat.icon size={15} className={index === i ? "text-primary" : "text-muted-foreground"} />
                      <span>{cat.title.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 p-5 md:p-8 relative flex flex-col h-full bg-background/40">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    className="h-full flex flex-col"
                  >
                    <div className="mb-8 text-center md:text-left">
                      <h3 className="text-2xl font-bold tracking-tight mb-2 uppercase">{current.title}</h3>
                      <p className="text-sm text-muted-foreground max-w-xl mx-auto md:mx-0">{current.description}</p>
                    </div>

                    <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x no-scrollbar">
                      {current.projects.map((p, i) => (
                        <div key={p.title} className="min-w-[280px] md:min-w-0 snap-center h-full">
                          <article 
                            onClick={() => setSelectedProject(p)}
                            className="card-hover group cursor-pointer rounded-2xl border border-border bg-secondary/30 overflow-hidden h-full flex flex-col"
                          >
                            <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.accent} border-b border-border`}>
                              <div className="absolute top-2 left-2">
                                <TrafficLights />
                              </div>
                              <div className="absolute inset-0 grid place-items-center">
                                <span className="mono text-[9px] text-foreground/40 group-hover:text-primary transition-colors">Details (Click)</span>
                              </div>
                            </div>

                            <div className="p-4 flex flex-col flex-1">
                              <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                                {p.title}
                                <Sparkles size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                              </h4>
                              <p className="text-[11px] text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                                {p.description}
                              </p>

                              <div className="flex flex-wrap gap-1 mb-4">
                                {p.tags.slice(0, 3).map((t) => (
                                  <span key={t} className="mono text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-background/50 border border-border/50 text-muted-foreground">
                                    {t}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center gap-4 text-xs mt-auto">
                                <span className="text-primary font-medium hover:underline text-[10px]">Quick Look</span>
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="hidden md:flex absolute top-10 right-10 gap-2">
                  <button onClick={prevSlide} className="w-10 h-10 rounded-full glass border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all active:scale-90"><ChevronLeft size={18} /></button>
                  <button onClick={nextSlide} className="w-10 h-10 rounded-full glass border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all active:scale-90"><ChevronRight size={18} /></button>
                </div>
              </div>
            </MacWindow>
          </div>
        </Reveal>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl mac-window overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="mac-header sticky top-0 bg-window-header flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <TrafficLights />
                  <span className="text-[11px] font-medium text-muted-foreground mono tracking-tight">Inspect — {selectedProject.title}.tsx</span>
                </div>
                <button onClick={() => setSelectedProject(null)} className="w-7 h-7 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                  <X size={14} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border bg-gradient-to-r", selectedProject.accent, "text-foreground")}>
                      Technical Case Study
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{selectedProject.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{selectedProject.longDescription}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                        <Rocket size={14} /> Key Contributions
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.features.map((f: string) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-foreground/80 leading-snug">
                            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                        <Code2 size={14} /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((t: string) => (
                          <span key={t} className="px-3 py-1.5 rounded-lg border border-border bg-secondary/50 text-xs font-medium mono whitespace-nowrap">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    {selectedProject.link !== "#" && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-all shadow-glow">
                        Live Project <ExternalLink size={18} />
                      </a>
                    )}
                    <a 
                      href={selectedProject.repo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={cn(
                        "rounded-2xl border border-border flex items-center justify-center hover:bg-secondary transition-all",
                        selectedProject.link === "#" ? "flex-1 px-6 py-4 h-auto text-base font-semibold gap-2 border-primary/30 text-foreground" : "w-14 h-14"
                      )}
                    >
                      <Github size={selectedProject.link === "#" ? 20 : 24} />
                      {selectedProject.link === "#" && "View Repository"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
