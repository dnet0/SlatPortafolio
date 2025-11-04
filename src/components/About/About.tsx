import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CustomTitle } from "../CustomTitle";
import { useTranslation } from "react-i18next";
import type { AboutDTO } from "@/interface/AboutDTO";

export const About = () => {
  const { t } = useTranslation("about-data");
  const about = t("about", { returnObjects: true }) as AboutDTO;
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
          <CustomTitle title={about.title} />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border space-y-6"
          >
            {about.data.map((paragraph) => (
              <p className="text-lg text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
