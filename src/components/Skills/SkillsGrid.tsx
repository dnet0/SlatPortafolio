import type { DataSkill } from "@/interface/SkillsDTO";
import type { FC } from "react";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface Props {
  skill: DataSkill,
  isInView: boolean,
  categoryIndex: number,
  skillIndex: number,
}
export const SkillsGrid: FC<Props> = ({ skill, isInView, categoryIndex , skillIndex}) => {
  const SkillIcon = skill.icon;

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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
            className={cn("text-sm font-medium", `text-[${skill.color}]`)}
          >
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
