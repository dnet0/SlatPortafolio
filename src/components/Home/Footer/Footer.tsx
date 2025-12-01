import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router";

export const Footer = () => {
  const { t } = useTranslation("footer-data");
  const footer = t("footer");
  const privaciPolitic = t("privaciPolitic");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute px-8  py-2 w-full left-0 right-0 top-full border-t border-border bg-background/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col flex-1 md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left"
      >
        {/* Texto de derechos */}
        <p className="text-muted-foreground text-sm">
          © {currentYear}{" "}
          <span className="font-medium text-foreground">Johan Salvatierra</span>
          .{footer}
        </p>

        {/* Enlaces sociales */}
        <div className="flex space-x-4 flex-col gap-1 items-center">
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
          <Link to="/politicas-privacidad" className="font-medium text-sm">
            {privaciPolitic}
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};
