import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import { MacWindow } from "./MacWindow";
import { Typewriter } from "./Typewriter";

export const Hero = () => {
  // Subtle parallax on mouse move (window-drag illusion)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 80, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden />

      <div className="container relative">
        {/* Floating MacBook-like window */}
        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
          className="animate-float will-change-transform"
        >
          <MacWindow
            animateOpen
            url="maheethvarma.dev — building thoughtful software"
            className="max-w-4xl mx-auto"
            bodyClassName="p-8 md:p-14"
          >
            <div className="text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-mac-green animate-pulse" />
                Available for new opportunities
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-5">
                Hi, I'm 
                <br />
                G.R.Maheeth Varma
                <br/>
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  <Typewriter
                    words={["Full-Stack Developer", "FreeLancer"]}
                  />
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground text-balance mb-8 leading-relaxed">
                Focused on solving real-world problems through clean, user-centric solutions.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary-glow hover:scale-[1.02] active:scale-[0.98] transition-all shadow-glow"
                >
                  View Projects <ArrowRight size={16} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1ucjJdkflV4JlfrjdFkpG4Gf4BoFV1Fie/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary transition-all"
                >
                  <Download size={16} /> View Resume
                </a>
              </div>
            </div>
          </MacWindow>
        </motion.div>
      </div>
    </section>
  );
};
