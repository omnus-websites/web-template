import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Section, { SectionVariants } from "./Section";
import LogoBarGrid from "./LogoBarGrid";

type ImageData = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
};

type LogoBarProps = {
  logoBarList?: ImageData[];
  hero?: boolean;
};

const logoBarList = [
  {
    src: "/capital-view-accounting.png",
    alt: "Image 1",
    width: 150,
    height: 50,
  },
  {
    src: "/flash-basements-logobar.png",
    alt: "Image 2",
    width: 150,
    height: 50,
  },
  {
    src: "/placeholder.png",
    alt: "Image 3",
    width: 150,
    height: 50,
  },
  {
    src: "/placeholder.png",
    alt: "Image 4",
    width: 150,
    height: 50,
  },
  {
    src: "/placeholder.png",
    alt: "Image 5",
    width: 150,
    height: 120,
  },
  {
    src: "/placeholder.png",
    alt: "Image 6",
    width: 150,
    height: 50,
  },
];

const LogoBar = () => {
  const innerSectionClassName = classNames("", {});

  return (
    <section className="bg-grey4 px-[130px] py-16">
      <LogoBarGrid>
        {logoBarList?.map((logo, index) => (
          <div key={index}>
            <Image
              src={logo.src || "/placeholder.png"}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className=""
            />
          </div>
        ))}
      </LogoBarGrid>
    </section>
  );
};

export default LogoBar;
