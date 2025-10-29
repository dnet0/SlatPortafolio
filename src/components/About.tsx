import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CustomTitle } from './CustomTitle';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Section Title */}
          <CustomTitle title="Sobre Mí" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              Soy un desarrollador frontend apasionado por crear interfaces web
              intuitivas y atractivas. Con experiencia en tecnologías modernas
              como React, TypeScript y Tailwind CSS, me especializo en
              transformar diseños en experiencias digitales fluidas y
              responsive.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Soy Ingeniero de Software especializado en desarrollo backend y
              full stack, con experiencia demostrada en entornos empresariales
              exigentes y tecnologías clave como Java, Spring Boot, SQL,
              Node.js, Angular y metodologías ágiles (Scrum). He formado parte
              de NTT DATA, donde participe en el desarrollo de soluciones para
              Enagas.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Mi diferencial está en combinar una base técnica sólida con
              mentalidad analítica, constancia y un enfoque 100% orientado a
              resultados. No solo desarrollo software: identifico problemas,
              propongo mejoras y construyo soluciones escalables, mantenibles y
              alineadas con los objetivos del negocio.
            </p>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
