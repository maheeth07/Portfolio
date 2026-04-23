import { motion } from "framer-motion";
import { Home, User, Code2, Briefcase, Mail, GitBranch, GitPullRequest } from "lucide-react";
import { cn } from "@/lib/utils";

const itemsSelect = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const allItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: GitBranch, label: "Experience", href: "#experience" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: GitPullRequest, label: "Contributions", href: "#contributions" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export const Dock = () => (
  <>
    {/* Desktop Dock */}
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
      aria-label="Quick navigation dock"
    >
      <div className="glass rounded-2xl px-3 py-2.5 flex items-end shadow-2xl border border-white/10">
        <ul className="flex items-end gap-1.5">
          {allItems.map((it) => (
            <li key={it.label} className="relative">
              <a
                href={it.href}
                aria-label={it.label}
                className="group relative w-11 h-11 grid place-items-center rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-[1.35] hover:-translate-y-2"
              >
                <it.icon size={19} className="transition-transform duration-300" />
                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-lg bg-foreground text-background text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-xl">
                  {it.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>

    {/* Mobile Tab Bar */}
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 inset-x-0 z-50 md:hidden pb-safe"
    >
      <div className="mx-4 mb-4 glass rounded-3xl p-2.5 border border-white/10 shadow-2xl overflow-hidden">
        <ul className="flex items-center justify-around">
          {itemsSelect.map((it) => (
            <li key={it.label} className="flex-1">
              <a
                href={it.href}
                className="flex flex-col items-center justify-center py-2 gap-1.5 text-muted-foreground hover:text-primary transition-colors active:scale-90"
              >
                <div className="w-9 h-9 rounded-2xl flex items-center justify-center hover:bg-primary/10 transition-colors">
                  <it.icon size={20} />
                </div>
                <span className="text-[10px] font-medium tracking-tight uppercase opacity-70">
                  {it.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  </>
);
