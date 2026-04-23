import { MacWindow } from "./MacWindow";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

const profiles = [
  {
    name: "GitHub",
    url: "https://github.com/maheeth07",
    color: "bg-white",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maheeth-varma-30a582348/",
    color: "bg-[#0077b5]",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/maheethvarma_07/",
    color: "bg-[#ffa116]",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/leetcode.svg"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/maheeth_07",
    color: "bg-[#5b4638]",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/codechef.svg"
  }
];

export const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="mono text-xs uppercase tracking-widest text-primary mb-3">01 — About</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A bit about me</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <MacWindow title="about.md" bodyClassName="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-foreground text-lg italic font-medium">
                    "I'm a full-stack developer focused on AI-driven applications, building scalable products end-to-end using MERN and modern frameworks."
                  </p>
                  <p>
                    I care deeply about <span className="text-foreground font-semibold">impact</span> — creating solutions that solve real-world problems with clean design and strong performance.
                    Lately I've been focused on AI agents, system design, and building tools that improve user experience and efficiency.
                  </p>
                  <p>
                    When I'm offline, you'll find me coding challenges, exploring new tech, or working on innovative project ideas.
                  </p>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Digital Identity</p>
                  <div className="flex flex-wrap gap-4">
                    {profiles.map((p) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center p-3.5 rounded-xl border border-border bg-secondary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        title={p.name}
                      >
                        <div 
                          className="w-5 h-5 md:w-6 md:h-6 relative group-hover:scale-110 transition-transform duration-300"
                        >
                          {/* Base Layer: Inherits Theme Color (Black/White) */}
                          <div 
                            className="absolute inset-0 bg-foreground opacity-70 group-hover:opacity-0 transition-opacity duration-300"
                            style={{
                              maskImage: `url(${p.logo})`,
                              WebkitMaskImage: `url(${p.logo})`,
                              maskRepeat: 'no-repeat',
                              WebkitMaskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskPosition: 'center',
                              maskSize: 'contain',
                              WebkitMaskSize: 'contain'
                            }}
                          />
                          {/* Hover Layer: Official Brand Color */}
                          <div 
                            className={cn(
                              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                              p.name === 'GitHub' ? "bg-foreground" : 
                              p.name === 'LinkedIn' ? "bg-[#0077b5]" : 
                              p.name === 'LeetCode' ? "bg-[#ffa116]" : "bg-[#5b4638]"
                            )}
                            style={{
                              maskImage: `url(${p.logo})`,
                              WebkitMaskImage: `url(${p.logo})`,
                              maskRepeat: 'no-repeat',
                              WebkitMaskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskPosition: 'center',
                              maskSize: 'contain',
                              WebkitMaskSize: 'contain'
                            }}
                          />
                        </div>
                        <div className={cn("absolute -inset-1 opacity-0 group-hover:opacity-30 blur-xl transition-opacity rounded-full", p.color)} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Stat label="Years coding" value="2+" />
                <Stat label="Projects built" value="10+" />
                <Stat label="Problems solved" value="600+" />
              </div>
            </div>
          </MacWindow>
        </Reveal>
      </div>
    </section>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-border bg-secondary/20 p-5 group hover:border-primary/40 transition-colors shadow-sm">
    <div className="text-3xl font-bold mono text-primary group-hover:scale-105 transition-transform origin-left">{value}</div>
    <div className="text-[10px] mono uppercase tracking-widest text-muted-foreground mt-2">{label}</div>
  </div>
);
