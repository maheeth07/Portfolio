import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contributions", label: "Contributions" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled ? "nav-blur py-2" : "py-4"
        )}
      >
        <nav className="container flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-primary-glow shadow-glow grid place-items-center">
              <span className="mono text-[11px] font-bold text-primary-foreground">M</span>
            </div>
            <span className="font-semibold tracking-tight">Maheeth Varma</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground story-link transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 grid place-items-center rounded-lg border border-border hover:border-primary/40 hover:bg-secondary transition-all"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-glow hover:scale-[1.02] transition-all shadow-glow"
            >
              Let's talk
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};
