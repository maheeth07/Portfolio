import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#blogs", label: "Contributions" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "#contact", label: "Hire-Me", highlight: true },
];

export const Navbar = ({ onReplayLoader }: { onReplayLoader?: () => void }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["hero", "work", "blogs", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-1 sm:gap-2 px-2.5 py-1.5 rounded-full transition-all duration-300 shadow-2xl",
            "bg-white/90 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/80"
          )}
        >
          {/* Avatar Icon */}
          <a
            href="#hero"
            aria-label="Home"
            className="group relative flex items-center justify-center p-1 rounded-xl overflow-hidden focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-blue-500/10 border border-blue-400/40 p-0.5 group-hover:scale-105 group-hover:border-blue-500 transition-all duration-200 shadow-sm">
              <img
                src="/download(1).jpeg"
                alt="Maheeth Varma"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-1">
            {navLinks.map((link) => {
              const target = link.href.replace("#", "");
              const isActive = activeSection === target && !link.highlight;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs lg:text-[13px] font-medium transition-colors duration-200 rounded-full",
                    link.highlight
                      ? "text-blue-600 dark:text-blue-400 hover:text-blue-500 font-semibold"
                      : isActive
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/80 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Replay Split-Flap Loader Button */}
          {onReplayLoader && (
            <button
              onClick={onReplayLoader}
              aria-label="Replay Split-Flap Board"
              title="Replay Split-Flap Intro Board"
              className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all focus:outline-none"
            >
              <Sparkles size={14} />
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all focus:outline-none"
          >
            {theme === "dark" ? (
              <Moon size={15} className="transition-transform rotate-0 hover:-rotate-12" />
            ) : (
              <Sun size={15} className="transition-transform rotate-0 hover:rotate-45 text-amber-500" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all focus:outline-none"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-50 md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-400/30">
                      Open
                    </span>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
