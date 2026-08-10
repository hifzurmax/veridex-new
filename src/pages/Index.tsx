import { Nav } from "@/components/veridex/Nav";
import { Hero } from "@/components/veridex/Hero";
import { Marquee } from "@/components/veridex/Marquee";
import { Platform } from "@/components/veridex/Platform";
import { HowItWorks } from "@/components/veridex/HowItWorks";
import { SystemDiagram } from "@/components/veridex/SystemDiagram";
import { Impact } from "@/components/veridex/Impact";
import { Cases } from "@/components/veridex/Cases";
import { Trust } from "@/components/veridex/Trust";
import { About } from "@/components/veridex/About";
import { CTA } from "@/components/veridex/CTA";
import { Footer } from "@/components/veridex/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />
      <Hero />
      <Marquee />
      <Platform />
      <HowItWorks />
      <SystemDiagram />
      <Impact />
      <Cases />
      <Trust />
      <About />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
