import { ExternalLink, Laptop, Rocket, Users, Terminal } from "lucide-react";
import { Reveal } from "./Reveal";

const contributions = [
  {
    title: "Unisire ATS",
    description: "Developed a high-accuracy ATS-based resume scoring system to automate candidate screening and improve recruitment efficiency.",
    type: "Professional",
    tag: "Recruitment Tech",
    icon: Terminal,
    link: "https://ats.unisire.com/",
  },
  {
    title: "SusHacks 2026",
    description: "Built the official registration and event portal for SusHacks Hackathon 2026, managing participant flows for a major student hackathon.",
    type: "Community",
    tag: "Hackathon Hub",
    icon: Users,
    link: "https://sushacks.in/",
  },
  {
    title: "Restro SaaS",
    description: "Engineered 'Restro', a comprehensive SaaS platform for end-to-end restaurant management, including orders, inventory, and analytics.",
    type: "SaaS",
    tag: "Business Suite",
    icon: Rocket,
    link: "https://github.com/maheeth07/Restro",
  },
];

export const Contributions = () => (
  <section id="contributions" className="py-20 md:py-28 bg-secondary/10">
    <div className="container max-w-5xl">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="mono text-xs uppercase tracking-widest text-primary mb-3">05 — Community & Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Major Contributions</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Beyond personal projects, I focus on building tools and platforms that provide real-world value and support communities.
          </p>
        </div>
      </Reveal>

      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 no-scrollbar snap-x">
        {contributions.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1} y={20}>
            <div className="min-w-[280px] md:min-w-0 snap-center h-full">
              <a
                href={c.link}
                className="card-hover glass rounded-2xl p-6 flex flex-col h-full border border-border/50 hover:border-primary/50 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <c.icon size={22} />
                  </div>
                  <span className="text-[10px] mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                    {c.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                
                <p className="text-sm text-muted-foreground flex-1 mb-6 leading-relaxed">
                  {c.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className="text-[11px] mono text-primary font-medium">{c.tag}</span>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
