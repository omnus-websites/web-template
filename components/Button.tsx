import { FC, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";

enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  WHITE = "white",
}

type ButtonProps = {
  variant: "primary" | "secondary" | "white";
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

// TODO: Handle icons

const Button: FC<ButtonProps> = ({
  variant = ButtonVariants.PRIMARY,
  href,
  className,
  onClick,
  children,
}) => {
  const buttonClass = classNames(
    "p-4 font-base",
    {
      "bg-primary text-white": variant === ButtonVariants.PRIMARY,
      "bg-transparent text-primary border-2 border-primary":
        variant === ButtonVariants.SECONDARY,
      "bg-white text-black": variant === ButtonVariants.WHITE,
    },
    className
  );

  return onClick !== undefined ? (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  ) : (
    <Link className={buttonClass} href={href}>
      {children}
    </Link>
  );
};

export default Button;
