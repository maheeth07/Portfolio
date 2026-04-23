import { Github, Linkedin, Code2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/maheeth07",
    icon: Github,
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maheeth-varma-30a582348/",
    icon: Linkedin,
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/maheethvarma_07/",
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/leetcode.svg"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/maheeth_07",
    icon: Terminal,
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/codechef.svg"
  }
];

export const Footer = () => (
  <footer className="py-10 border-t border-border mt-10">
    <div className="container flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-3">
        {socialLinks.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            title={p.name}
            className="w-10 h-10 grid place-items-center rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary transition-all group overflow-hidden"
          >
            <div 
              className="w-5 h-5 bg-muted-foreground group-hover:bg-foreground transition-colors"
              style={{
                maskImage: `url(${p.logo})`,
                WebkitMaskImage: `url(${p.logo})`,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
              }}
            />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Maheeth Varma. Designed & built with care.
      </p>
    </div>
  </footer>
);
