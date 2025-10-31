import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { BackgroundEffects } from './components/BackgroundEffects';
import { Education } from "./components/Education/Education";
import {DynamicNoiseBackground} from "./TVStaticBackground";

export const PortfolioApp = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects/>
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
