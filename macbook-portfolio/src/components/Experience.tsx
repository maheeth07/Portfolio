import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  bulletPoints?: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "SDE Intern",
    company: "Mobizo",
    period: "Jan 2026 – Present",
    type: "Internship",
    summary:
      "Built multiple features, resolved issues, and enhanced the Next.js UI to improve functionality and user experience.",
    bulletPoints: [
      "Managed Git workflows by creating, switching, and merging feature branches using GitHub.",
      "Identified 30+ bugs and tracked using OpenProject, documenting issues and their status.",
    ],
    skills: ["Next.js", "React", "GitHub", "OpenProject"],
  },
  {
    role: "Full-Stack Intern",
    company: "Neuxa Global",
    period: "Jun 2025 – Oct 2025",
    type: "Internship",
    summary:
      "Developed responsive mobile and web interfaces and built a production MERN backend featuring robust authentication, RESTful APIs, and optimized MongoDB query performance.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const Experience = () => {
  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 dark:text-blue-400 font-semibold mb-2 block">
            01 / Work Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Where I've Contributed
          </h2>
        </motion.div>

        {/* Timeline / Cards */}
        <div className="space-y-6 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group relative p-6 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                    <Building2 size={14} className="text-zinc-400 dark:text-zinc-500" />
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">{exp.company}</span>
                    <span>•</span>
                    <span className="text-xs text-zinc-500">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 self-start sm:self-auto">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                {exp.summary}
              </p>

              {/* Bullet Points */}
              {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400 shrink-0 select-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-900">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
