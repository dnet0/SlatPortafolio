import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  animate: boolean;
  isInView?: boolean;
  title?: string;
  style?: string;
}

export const CustomCard = ({
  animate,
  isInView,
  title,
  style,
  children,
}: Props) => {
  const Wrapper = animate ? motion.div : "div";
  return (
    <Wrapper
      {...(animate && {
        initial: { opacity: 0, x: -30 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
        transition: { delay: 0.2, duration: 0.6 },
      })}
      className={cn(
        "bg-card rounded-2xl p-8 shadow-lg border border-border",
        style
      )}
    >
      {title && (
        <h2 className="text-2xl font-medium text-foreground mb-2">{title}</h2>
      )}
      {children}
    </Wrapper>
  );
};
