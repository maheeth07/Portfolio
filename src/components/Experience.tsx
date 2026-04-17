import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const items = [
  {
    role: "Senior Software Engineer",
    company: "Lumen Labs",
    period: "2023 — Present",
    summary: "Leading the front-end platform team. Shipped a redesigned dashboard used by 50k+ daily users.",
  },
  {
    role: "Full-Stack Engineer",
    company: "Northwind",
    period: "2021 — 2023",
    summary: "Built a multi-tenant SaaS from zero to 1M ARR. Owned auth, billing, and the design system.",
  },
  {
    role: "Software Engineer",
    company: "Pixelhouse Studio",
    period: "2019 — 2021",
    summary: "Delivered web experiences for design-led brands. Specialized in motion and interaction.",
  },
  {
    role: "Junior Developer",
    company: "Freelance",
    period: "2018 — 2019",
    summary: "Built marketing sites and small web apps for early-stage startups.",
  },
];

export const Experience = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="container max-w-3xl">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="mono text-xs uppercase tracking-widest text-primary mb-3">04 — Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
        </div>
      </Reveal>

      <div className="relative pl-8 md:pl-10">
        {/* Animated vertical line */}
        <motion.div
          className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <ul className="space-y-8">
          {items.map((it, i) => (
            <Reveal key={it.role} delay={i * 0.12} y={16}>
              <li className="relative">
                <span className="absolute -left-[30px] md:-left-[34px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-glow ring-4 ring-background" />
                <div className="card-hover glass rounded-xl p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-semibold">{it.role}</h3>
                    <span className="mono text-xs text-muted-foreground">{it.period}</span>
                  </div>
                  <div className="text-sm text-primary mb-2">{it.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.summary}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
