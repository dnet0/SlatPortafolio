import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { CustomTitle } from "../CustomTitle";
import { SkillCategories } from "../../data/SkilsCategories";
import { useTranslation } from "react-i18next";
import { SkillsGrid } from "./SkillsGrid";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation("skills-data");
  const skillCategoiesDTO = SkillCategories();
  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-muted/30"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <CustomTitle title={t("title")} />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategoiesDTO.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillsGrid
                      skill={skill}
                      isInView={isInView}
                      categoryIndex={categoryIndex}
                      skillIndex={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
