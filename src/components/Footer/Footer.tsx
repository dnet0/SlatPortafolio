import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left"
        >
          {/* Texto de derechos */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} <span className="font-medium text-foreground">Johan Salvatierra</span>.  
            Todos los derechos reservados.
          </p>

          {/* Enlaces sociales */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/dnet0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <SiGithub className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/johansalgut/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <SiLinkedin className="w-5 h-5 text-primary" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
