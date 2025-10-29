import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiCplusplus,
  SiPython,
  SiJunit5,
  SiApachemaven,
  SiMicrodotblog,
  SiVite,
  SiJenkins,
  SiBootstrap,
  SiOracle,
  SiMongodb,
  SiSonar,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { CustomEmptyIcon } from "./CustomEmptyIcon";
import { cn } from "@/lib/utils";
import { DiMysql } from "react-icons/di";
import { CustomTitle } from "./CustomTitle";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Angular", icon: SiAngular, color: "#D6002F" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Spring Boot", icon: BiLogoSpringBoot, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JUnit", icon: SiJunit5, color: "#25A162" },
      { name: "Mockito", icon: CustomEmptyIcon, color: "#FF0000" },
      { name: "Maven", icon: SiApachemaven, color: "#C71A36" },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Vite", icon: SiVite, color: "#61DAFB" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "SonarQube", icon: SiSonar, color: "#4E9BCD" },
    ],
  },
  {
    title: "Arquitectura y Patrones",
    skills: [
      { name: "Microservicios", icon: SiMicrodotblog, color: "#00BFFF" },
      { name: "MVC", icon: CustomEmptyIcon, color: "#FF9900" },
      { name: "SOLID Principles", icon: CustomEmptyIcon, color: "#800080" },
      { name: "Scrum/Agile", icon: CustomEmptyIcon, color: "#008000" },
    ],
  },
  {
    title: "Base de Datos",
    skills: [
      { name: "MySQL", icon: DiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Oracle", icon: SiOracle, color: "#F80000" },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <CustomTitle title="Habilidades Técnicas" />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
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
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
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
