import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import { CustomTitle } from "../CustomTitle";
import { SkillCategories } from "../../data/SkilsCategories";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation("skills-data");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 0.4,
                        }}
                        className="space-y-2 group"
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="shrink-0 p-2 rounded-lg bg-background/50 group-hover:bg-primary/10 transition-colors"
                          >
                            <SkillIcon
                              className="w-5 h-5 transition-colors"
                              style={{ color: skill.color }}
                            />
                          </motion.div>
                          <div className="flex-1 flex justify-between items-center">
                            <span
                              color={skill.color}
                              className={cn(
                                "text-sm font-medium",
                                `text-[${skill.color}]`
                              )}
                            >
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
