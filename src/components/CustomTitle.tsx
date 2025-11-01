import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  subTitle?: string;
}
export const CustomTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-gradient">{title}</h2>
      <div className="w-20 h-1 bg-linear-to-r from-primary to-accent mx-auto rounded-full" />
      {subTitle && (
        <p className="text-lg text-muted-foreground max-w-6xl mx-auto">{subTitle}</p>
      )}
    </div>
  );
};
