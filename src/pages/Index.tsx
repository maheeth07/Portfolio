import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contributions } from "@/components/Contributions";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Dock } from "@/components/Dock";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contributions />
        <Contact />
      </main>
      <Footer />
      <Dock />
    </div>
  );
};

export default Index;
