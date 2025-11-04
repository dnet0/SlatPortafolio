import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
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
import { DiMysql } from "react-icons/di";
import { CustomEmptyIcon } from "../components/CustomEmptyIcon";
import { useTranslation } from "react-i18next";
import type { SkillsDTO } from "@/interface/SkillsDTO";

export const SkillCategories = ():SkillsDTO[] => {
  const { t } = useTranslation("skills-data");

  return [
    {
      title: t("frontend"),
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
      title: t("backend"),
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
      title: t("tools"),
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "VS Code", icon: VscCode, color: "#007ACC" },
        { name: "Vite", icon: SiVite, color: "#61DAFB" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { name: "SonarQube", icon: SiSonar, color: "#4E9BCD" },
      ],
    },
    {
      title: t("architecture"),
      skills: [
        { name: "Microservicios", icon: SiMicrodotblog, color: "#00BFFF" },
        { name: "MVC", icon: CustomEmptyIcon, color: "#FF9900" },
        { name: "SOLID Principles", icon: CustomEmptyIcon, color: "#800080" },
        { name: "Scrum/Agile", icon: CustomEmptyIcon, color: "#008000" },
      ],
    },
    {
      title: t("database"),
      skills: [
        { name: "MySQL", icon: DiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Oracle", icon: SiOracle, color: "#F80000" },
      ],
    },
  ];
};
