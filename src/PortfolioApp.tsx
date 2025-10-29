import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Education } from "./components/Education";

export const PortfolioApp = () => {
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
  )
}
