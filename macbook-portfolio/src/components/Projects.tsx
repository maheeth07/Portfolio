import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, Code2, Brain, Terminal, ArrowUpRight, X, CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  category: "fullstack" | "ai";
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  link?: string;
  repo: string;
  highlight?: string;
}

const allProjects: Project[] = [
  {
    title: "CareVault",
    category: "ai",
    tagline: "AI-Powered Medical Assistant & Patient Consultation RAG",
    description:
      "CareVault is an intelligent clinical assistant helping doctors effortlessly manage patient records and query historical consultation insights. Consultation transcripts are vectorized with Google Gemini embeddings and stored in MongoDB Atlas Vector Search, enabling an ultra-fast LangChain & Groq LLM pipeline to answer physician questions about medical history without manual transcript review.",
    features: [
      "Doctors securely log in and manage patient records with JWT & bcrypt authentication",
      "Automated consultation transcript processing and vector embedding via Google Gemini",
      "Semantic indexing and vector similarity retrieval powered by MongoDB Atlas Vector Search",
      "Real-time clinical question answering synthesized using Groq LLM & LangChain",
      "Eliminates the need for doctors to manually read through lengthy consultation transcripts",
    ],
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "Google Gemini",
      "Groq",
      "MongoDB Atlas",
      "Vector Search",
      "Next.js",
      "React",
      "JWT",
    ],
    link: "#",
    repo: "https://github.com/maheeth07",
    highlight: "Currently Working On",
  },
  {
    title: "LUCGE",
    category: "fullstack",
    tagline: "Remote Code Execution Platform with Docker Sandboxing",
    description:
      "A scalable remote code execution platform enabling secure execution of Python, C++, and Java code via authenticated REST APIs. Features Redis rate limiting, BullMQ execution queues, and isolated Docker containers.",
    features: [
      "API Key generation and developer authentication",
      "Isolated Docker container execution for zero-compromise security",
      "Redis-powered distributed rate limiting",
      "BullMQ asynchronous job queue handling concurrent requests",
      "Live support for Python, C++, and Java",
    ],
    tags: ["Docker", "Node.js", "Express", "Redis", "BullMQ", "MongoDB", "React"],
    link: "#",
    repo: "https://github.com/maheeth07/LUCGE",
    highlight: "Docker Sandboxing",
  },
  {
    title: "Tryber",
    category: "fullstack",
    tagline: "Gym Management Suite with LangChain Fitness AI",
    description:
      "A full-stack fitness and gym management SaaS for automated member onboarding, validity tracking, and revenue management. Integrated with an intelligent LangChain-powered conversational diet and fitness assistant.",
    features: [
      "Automated membership lifecycles with real-time validity checks",
      "LangChain-powered intelligent fitness & diet planning chatbot",
      "Multi-tiered admin and manager approval workflows",
      "Payment verification and automated customer notifications",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "Express", "LangChain", "Vercel"],
    link: "https://tryber-l8cv.vercel.app/",
    repo: "https://github.com/maheeth07/Tryber",
    highlight: "Full Stack Application",
  },
  {
    title: "CodeClash",
    category: "fullstack",
    tagline: "Competitive Coding Arena with Judge0 & Monaco IDE",
    description:
      "A competitive programming platform that gives developers an in-browser VS Code experience via Monaco Editor and evaluates code submissions against hidden test cases in real-time through Judge0.",
    features: [
      "In-browser Monaco Editor with syntax highlighting & auto-complete",
      "Integration with Judge0 API for multi-language execution",
      "Real-time evaluation, test case verification, and scoring",
      "Leaderboards and contest timer management",
    ],
    tags: ["Next.js", "Express.js", "Judge0 API", "PostgreSQL", "Monaco Editor"],
    link: "#",
    repo: "https://github.com/maheeth07/CodeClash",
    highlight: "Monaco IDE",
  },
  {
    title: "CodeCrafter",
    category: "ai",
    tagline: "AI Frontend Generator Powered by LangGraph Agents",
    description:
      "An autonomous code generation tool using multi-agent LangGraph workflows to plan, write, and refine production-ready HTML, CSS, and React UI components directly from natural language prompts.",
    features: [
      "Multi-agent architecture: Planner, Generator, and Quality Critic",
      "Structured schema validation with Pydantic",
      "Automatic prompt-to-component synthesis with preview",
      "Exports clean, modular Tailwind & React components",
    ],
    tags: ["Python", "LangGraph", "LangChain", "Pydantic", "LLMs"],
    link: "#",
    repo: "https://github.com/maheeth07/CodeCrafter",
    highlight: "LangGraph Multi-Agent",
  },
  {
    title: "StartSphere AI",
    category: "ai",
    tagline: "Predictive Analytics Model for Startup Growth",
    description:
      "Deep learning model and analytics dashboard that evaluates startup metrics, forecasts milestone velocity, and generates tailored strategic insights for founders and angel investors.",
    features: [
      "Custom deep learning models trained on market velocity metrics",
      "Early-stage venture viability prediction engine",
      "Dynamic insight synthesis from industry trend feeds",
      "Interactive analytics reporting with visual metrics",
    ],
    tags: ["Python", "PyTorch", "LLMs", "Data Analytics", "FastAPI"],
    link: "#",
    repo: "https://github.com/maheeth07/StartSphere-AI-Model",
    highlight: "Deep Learning",
  },
  {
    title: "Sign2Text",
    category: "ai",
    tagline: "Real-time Sign Language Translation via Computer Vision",
    description:
      "An accessibility tool bridging communication barriers by translating American Sign Language (ASL) hand gestures into real-time text and speech using custom CNN computer vision models.",
    features: [
      "Real-time gesture recognition using convolutional neural networks",
      "Optimized frame-rate throughput for smooth mobile webcam feeds",
      "Text-to-speech voice synthesizer integration",
      "Privacy-preserving, lightweight on-device inference",
    ],
    tags: ["PyTorch", "OpenCV", "Flask", "Python"],
    link: "#",
    repo: "https://github.com/maheeth07/Sign-to-Text",
    highlight: "Computer Vision",
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState<"all" | "fullstack" | "ai">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = filter === "all" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 dark:text-blue-400 font-semibold mb-2 block">
              02 / Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Projects & Engineering
            </h2>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80">
            {(["all", "fullstack", "ai"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all capitalize ${
                  filter === cat
                    ? "bg-blue-600 text-white dark:bg-blue-600/30 dark:text-blue-300 dark:border dark:border-blue-500/40 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
                }`}
              >
                {cat === "all" ? "All" : cat === "ai" ? "AI & Agents" : "Full Stack"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 gap-4">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/50 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-400/30">
                      {project.highlight || "Engineering"}
                    </span>
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors flex items-center gap-1.5 mb-1.5">
                    <span>{project.title}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200 dark:border-zinc-900">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-400 dark:text-zinc-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 shadow-2xl max-h-[88vh] overflow-y-auto no-scrollbar text-zinc-900 dark:text-zinc-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    {selectedProject.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{selectedProject.title}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{selectedProject.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5">
                {selectedProject.description}
              </p>

              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
                  Key Capabilities
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 size={14} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {selectedProject.link && selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Live Preview</span>
                  </a>
                )}
                <a
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
