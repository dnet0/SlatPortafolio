import { About } from "@/components/Home/About/About";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Education } from "@/components/Home/Education/Education";
import { Footer } from "@/components/Home/Footer/Footer";
import { Hero } from "@/components/Home/Hero/Hero";
import { Navbar } from "@/components/Home/Navbar/Navbar";
import { Projects } from "@/components/Home/Projects/Projects";
import { Skills } from "@/components/Home/Skills/Skills";
import { Contact } from "@/components/Home/Contact/Contact";

export const HomeScreen = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
