import { ReactNode } from "react";
import Footer from "./Footer";
import Header, { HeaderVariants } from "./Header";
import classNames from "classnames";

type LayoutProps = {
  headerVariant: HeaderVariants;
  children: ReactNode;
  isHomePage: boolean;
};

const Layout = ({
  headerVariant,
  children,
  isHomePage = false,
}: LayoutProps) => {
  const HomePageBackgroundImage = {
    backgroundImage: "url('/blue-background-curvy.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        className={classNames("", {
          "bg-primary text-white":
            headerVariant === HeaderVariants.SECONDARY && !isHomePage,
        })}
        style={isHomePage ? HomePageBackgroundImage : {}}
      >
        <Header variant={headerVariant} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
