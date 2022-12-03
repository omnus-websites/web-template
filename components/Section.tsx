import { ReactNode } from "react";
import classNames from "classnames";

export enum SectionVariants {
  MEDIUM = "medium",
  LARGE = "large",
}

type SectionProps = {
  variant: SectionVariants;
  children: ReactNode;
};

const Section = ({ variant, children }: SectionProps) => {
  const isMedium = variant === SectionVariants.MEDIUM;
  const isLarge = variant === SectionVariants.LARGE;

  const className = classNames("max-w-[1260px] mx-auto px-4 md:px-10 py-12", {
    "lg:py-16": isMedium,
    "lg:py-20": isLarge,
  });

  return <section className={className}>{children}</section>;
};

export default Section;
