import { ExternalLink, Github } from "lucide-react";
import { MacWindow } from "./MacWindow";
import { Reveal } from "./Reveal";
import { TrafficLights } from "./TrafficLights";

const projects = [
  {
    title: "Lumen Analytics",
    description: "A real-time dashboard for product teams. Custom charting engine, sub-100ms updates.",
    tags: ["Next.js", "WebSockets", "D3"],
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Harbor CLI",
    description: "Open-source deployment toolkit written in Rust. 4k+ GitHub stars.",
    tags: ["Rust", "CLI", "OSS"],
    accent: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Note Stack",
    description: "Markdown notes app with end-to-end encryption and offline-first sync.",
    tags: ["React", "CRDT", "PWA"],
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Pulse UI Kit",
    description: "A modern component library with 80+ accessible primitives and a design-token system.",
    tags: ["TypeScript", "Tailwind", "Design"],
    accent: "from-violet-500/20 to-purple-500/20",
  },
];

export const Projects = () => (
  <section id="projects" className="py-20 md:py-28">
    <div className="container max-w-6xl">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="mono text-xs uppercase tracking-widest text-primary mb-3">03 — Work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected projects</h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <MacWindow
          title="~/projects"
          tabs={[{ label: "All", active: true }, { label: "Web" }, { label: "Open Source" }]}
          bodyClassName="p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} y={16}>
                <article className="card-hover group rounded-2xl border border-border bg-secondary/30 overflow-hidden h-full flex flex-col">
                  {/* Mini app preview */}
                  <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.accent} border-b border-border`}>
                    <div className="absolute top-3 left-3">
                      <TrafficLights />
                    </div>
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="mono text-xs text-foreground/60">{p.title.toLowerCase().replace(/ /g, "-")}.app</span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-background border border-border text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <a href="#" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary story-link transition-colors">
                        <ExternalLink size={14} /> Live
                      </a>
                      <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground story-link transition-colors">
                        <Github size={14} /> Code
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </MacWindow>
      </Reveal>
    </div>
  </section>
);
