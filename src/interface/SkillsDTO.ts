import type { IconType } from "react-icons";

export interface SkillsDTO {
    title: string;
    skills: DataSkill[];
}
export interface DataSkill{
    name: string;
    icon: IconType;
    color: string;
}
