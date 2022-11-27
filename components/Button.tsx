import { FC, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";

type ButtonProps = {
  primary: boolean;
  secondary: boolean;
  href: string;
  className?: string;
  onClick: () => void | undefined;
  children: ReactNode;
};

// TODO: Handle icons and ask what variants

const Button: FC<ButtonProps> = ({
  primary,
  secondary,
  href,
  className,
  onClick,
  children,
}) => {
  const buttonClass = classNames(
    "p-4 font-base",
    { "bg-primary text-white": primary, "bg-white text-black": secondary },
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
