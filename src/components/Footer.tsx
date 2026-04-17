import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="py-10 border-t border-border mt-10">
    <div className="container flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-3">
        <SocialLink href="#" label="GitHub"><Github size={16} /></SocialLink>
        <SocialLink href="#" label="LinkedIn"><Linkedin size={16} /></SocialLink>
        <SocialLink href="#" label="Twitter"><Twitter size={16} /></SocialLink>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Alex Carter. Designed & built with care.
      </p>
    </div>
  </footer>
);

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 grid place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary transition-all"
  >
    {children}
  </a>
);
