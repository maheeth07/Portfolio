import { Reveal } from "./Reveal";
import {
  Code2, Database, Cloud, Palette, Cpu, GitBranch, Layers, Terminal,
} from "lucide-react";

const skills = [
  { icon: Code2, name: "TypeScript", category: "Language" },
  { icon: Layers, name: "React / Next.js", category: "Framework" },
  { icon: Palette, name: "Tailwind CSS", category: "Styling" },
  { icon: Terminal, name: "Node.js", category: "Runtime" },
  { icon: Database, name: "PostgreSQL", category: "Database" },
  { icon: Cloud, name: "AWS / Vercel", category: "Cloud" },
  { icon: GitBranch, name: "Git / CI/CD", category: "Tooling" },
  { icon: Cpu, name: "Rust", category: "Language" },
];

export const Skills = () => (
  <section id="skills" className="py-20 md:py-28">
    <div className="container max-w-5xl">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="mono text-xs uppercase tracking-widest text-primary mb-3">02 — Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tools I work with</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.04} y={16}>
            <div className="card-hover group glass rounded-2xl p-5 h-full flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center group-hover:shadow-glow transition-all">
                <s.icon size={18} className="text-primary" />
              </div>
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.category}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
