import { ArrowUp, Github, Linkedin, Code2, Mail } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-zinc-900/80 mt-16 text-zinc-500">
      <div className="container max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md overflow-hidden bg-blue-500/20 border border-blue-400/40 p-0.5">
            <img src="/download(1).jpeg" alt="Maheeth" className="w-full h-full object-cover rounded-sm" />
          </div>
          <span>© {new Date().getFullYear()} Maheeth Varma. Crafted with precision.</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/maheeth07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/maheeth-varma-30a582348/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/maheethvarma_07/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            LeetCode
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors border border-zinc-800"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
