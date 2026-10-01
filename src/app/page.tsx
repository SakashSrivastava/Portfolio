import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Research from "@/components/Research";
import Proof from "@/components/Proof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SoundToggle from "@/components/ui/SoundToggle";
import CommandPalette from "@/components/ui/CommandPalette";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <SoundToggle />

      {/* faint editorial vertical grid, fixed behind everything */}
      <div
        aria-hidden
        className="bg-vgrid pointer-events-none fixed inset-0 -z-10 mx-auto max-w-7xl"
      />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Research />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
