import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: "white" | "light" | "dark" | "accent";
  id?: string;
};

const bgMap = {
  white: "bg-white",
  light: "bg-bg-secondary",
  dark: "bg-primary-dark",
  accent: "bg-primary-accent",
};

export function Section({ children, className, background = "white", id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-24 lg:py-28", bgMap[background], className)}>
      <Container>{children}</Container>
    </section>
  );
}
