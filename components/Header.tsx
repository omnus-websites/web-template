import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Button, { ButtonVariants } from "./Button";
import logoPrimary from "../assets/Logo@2x.png";
import logoSecondary from "../assets/Logo@2x-1.png";
import Burger from "./Burger";
import { CSSProperties, useState } from "react";
import MobileMenu from "./MobileMenu";
import Home from "../pages";

const navConfig = [
  {
    label: "Services",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
];

export enum HeaderVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  COBALT = "cobalt",
}

type HeaderProps = {
  variant: HeaderVariants;
};

const Header = ({ variant }: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const isPrimary = variant === HeaderVariants.PRIMARY;
  const isSecondary = variant === HeaderVariants.SECONDARY;

  const homePageBackgroundImage = {
    backgroundImage: "url('/blue-background-curvy.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <header
      style={isSecondary ? homePageBackgroundImage : {}}
      className={classNames(
        "flex justify-between items-center px-4 py-3 lg:px-10 lg:py-6",
        {
          "bg-primary text-white": !isPrimary,
        }
      )}
    >
      <Link href="/">
        <Image
          src={isPrimary ? logoPrimary : logoSecondary}
          alt="company logo"
          className="max-w-[168px] h-10"
        />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex items-center">
          {navConfig.map(({ label, href }) => (
            <li key={label} className="mr-8 last-of-type:mr-10">
              <Link href={href}>{label}</Link>
            </li>
          ))}
          <li>
            <Button
              variant={
                isPrimary ? ButtonVariants.PRIMARY : ButtonVariants.WHITE
              }
              href="/"
            >
              Work with us
            </Button>
          </li>
        </ul>
      </nav>
      <Burger setOpen={setOpen} isPrimary={isPrimary} />
      <MobileMenu open={isOpen} setOpen={setOpen} />
    </header>
  );
};

export default Header;
