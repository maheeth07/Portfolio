import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PortfolioLoader } from "@/components/PortfolioLoader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contributions } from "@/components/Contributions";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-blue-500/20 selection:text-white relative overflow-hidden">
      {/* Portfolio Split-Flap Loader as page loads */}
      <AnimatePresence>
        {loading && (
          <PortfolioLoader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Subtle interactive cursor spotlight glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-60 dark:opacity-70"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.045), transparent 80%)`,
        }}
      />

      {/* Subtle noise/grid ambient layer */}
      <div
        className="fixed inset-0 pointer-events-none z-10 opacity-[0.025] dark:opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <Navbar onReplayLoader={() => setLoading(true)} />

      <main className="relative z-20">
        <Hero onReplayLoader={() => setLoading(true)} />
        <Experience />
        <Projects />
        <Skills />
        <Contributions />
        <Contact />
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
