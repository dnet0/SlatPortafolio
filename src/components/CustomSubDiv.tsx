import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  subTitle: string;
  href?: string;
}
export const CustomSubDiv = ({ icon, title, subTitle, href }: Props) => {
  const SkillIcon = icon;

  return (
    <div className="flex items-center gap-4 mb-2">
      <div className="p-3 bg-primary/10 rounded-lg">
        <SkillIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex flex-col items-start justify-start">
        <h3 className="text-md font-semibold text-foreground">{title}</h3>
        {href ? (
          <a
            href={href}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {subTitle}
          </a>
        ) : (
          <p
            className="text-muted-foreground"
          >
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
};
