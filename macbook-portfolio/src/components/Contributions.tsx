import { motion } from "framer-motion";
import { ExternalLink, Terminal, Users, Rocket, Trophy, Code2, ArrowUpRight, Globe } from "lucide-react";

const contributions = [
  {
    title: "GDG VIIT Website (2025-26)",
    tagline: "Official Community Hub for Google Developer Group VIIT",
    description:
      "Architected and deployed the official community platform for GDG VIIT, powering event registrations, speaker line-ups, team showcases, and real-time updates for thousands of student members.",
    type: "Community Hub",
    link: "https://gdgviit2k25.vercel.app/",
    icon: Globe,
  },
  {
    title: "Unisire ATS",
    tagline: "High-Accuracy Automated Resume Scoring Engine",
    description:
      "Engineered an automated ATS screening platform that calculates candidate matching scores against job descriptions with semantic parsing and keyword vectorization.",
    type: "Recruitment Tech",
    link: "https://ats.unisire.com/",
    icon: Terminal,
  },
  {
    title: "SusHacks 2026",
    tagline: "Official Registration & Participant Portal",
    description:
      "Built and deployed the registration, team check-in, and dynamic schedules portal for SusHacks 2026, seamlessly managing high concurrent traffic during admissions.",
    type: "Hackathon Hub",
    link: "https://sushacks.in/",
    icon: Users,
  },
  {
    title: "Restro SaaS",
    tagline: "Comprehensive Restaurant ERP Platform",
    description:
      "Architected Restro, a scalable full-stack SaaS managing live kitchen order tickets (KOT), real-time inventory deduction, staff roles, and analytics dashboards.",
    type: "Business Suite",
    link: "https://github.com/maheeth07/Restro",
    icon: Rocket,
  },
];

export const Contributions = () => {
  return (
    <section id="blogs" className="py-20 md:py-28 relative">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 dark:text-blue-400 font-semibold mb-2 block">
            04 / Community & Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Major Contributions & Platforms
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            Beyond isolated repositories, I build scalable community systems, recruitment tech, and SaaS architectures that deliver real-world utility.
          </p>
        </motion.div>

        {/* Contributions Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contributions.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-400/20 group-hover:scale-110 transition-transform">
                    <item.icon size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors flex items-center gap-1.5 mb-1.5">
                  <span>{item.title}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span>View Platform</span>
                <ExternalLink size={12} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* 2000+ Competitive Programming Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-950/80 dark:via-zinc-900/60 dark:to-zinc-950/80 border border-blue-400/30 dark:border-blue-500/30 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-400/30 text-blue-600 dark:text-blue-400 shrink-0">
              <Trophy size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold text-zinc-950 dark:text-white">1000+ Problems Solved</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-400/30">
                  Data Structures & Algorithms
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Consistent problem solver with deep mastery over trees, dynamic programming, graph algorithms, and system performance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://leetcode.com/u/maheethvarma_07/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-medium text-blue-600 dark:text-blue-300 border border-zinc-200 dark:border-zinc-800 transition-colors hover:border-blue-500/50 shadow-sm"
            >
              <Code2 size={14} />
              <span>LeetCode Profile</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.codechef.com/users/maheeth_07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 transition-colors hover:border-blue-500/50 shadow-sm"
            >
              <span>CodeChef</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};