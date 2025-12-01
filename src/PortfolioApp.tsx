import { Navbar } from "./components/Home/Navbar/Navbar";
import { Hero } from "./components/Home/Hero/Hero";
import { About } from "./components/Home/About/About";
import { Skills } from "./components/Home/Skills/Skills";
import { Projects } from "./components/Home/Projects/Projects";
import { Contact } from "./components/Home/Contact/Contact";
import { Footer } from "./components/Home/Footer/Footer";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Education } from "./components/Home/Education/Education";

const PortfolioApp = () => {
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

export default PortfolioApp;