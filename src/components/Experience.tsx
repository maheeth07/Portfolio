import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const items = [
  {
  role: "Freelance Full Stack Developer",
  company: "Self-Employed",
  period: "2026 — Present",
  summary: "Building custom web and AI-driven applications that adapt to user interests and deliver personalized, scalable experiences.",
},
  {
    role: "QA Intern",
    company: "Mobizo",
    period: "Jan 2026 – Mar 2026",
    summary: "Designed and executed test cases, collaborated with developers to improve quality, and managed defects using OpenProject.",
  },
  {
    role: "Full-Stack Intern",
    company: "Neuxa Global",
    period: "Jun 2025 – Oct 2025",
    summary: "Built responsive React Native screens and developed a MERN backend with authentication, APIs, and database integration while collaborating on UI/UX design.",
  },
];

export const Experience = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="container max-w-3xl">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="mono text-xs uppercase tracking-widest text-primary mb-3">03 — Journey</p>
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
