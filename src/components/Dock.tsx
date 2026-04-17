import { motion } from "framer-motion";
import { Home, User, Code2, Briefcase, Mail, Github } from "lucide-react";

const items = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
  { icon: Github, label: "GitHub", href: "#" },
];

/** macOS-style floating dock at the bottom of the screen. */
export const Dock = () => (
  <motion.nav
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 hidden md:block"
    aria-label="Quick navigation dock"
  >
    <ul className="glass rounded-2xl px-3 py-2 flex items-end gap-1 shadow-window">
      {items.map((it) => (
        <li key={it.label}>
          <a
            href={it.href}
            aria-label={it.label}
            className="group relative w-11 h-11 grid place-items-center rounded-xl text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 hover:scale-125 hover:-translate-y-1.5"
          >
            <it.icon size={18} />
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-foreground text-background text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {it.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </motion.nav>
);
