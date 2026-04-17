import { MacWindow } from "./MacWindow";
import { Reveal } from "./Reveal";

export const About = () => (
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
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-foreground text-lg">
                I'm a full-stack developer based in San Francisco with 6+ years of
                experience building digital products end-to-end.
              </p>
              <p>
                I care deeply about <span className="text-foreground">craft</span> —
                the details that turn a working app into one that feels right.
                Lately I've been focused on design systems, performance, and
                building tools that help teams ship faster without losing polish.
              </p>
              <p>
                When I'm offline, you'll find me exploring trails, brewing pour-over
                coffee, or restoring vintage Apple hardware.
              </p>
            </div>

            <div className="space-y-4">
              <Stat label="Years building" value="6+" />
              <Stat label="Projects shipped" value="40+" />
              <Stat label="OSS commits" value="2.1k" />
            </div>
          </div>
        </MacWindow>
      </Reveal>
    </div>
  </section>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl border border-border bg-secondary/40 p-4">
    <div className="text-2xl font-bold mono">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);
