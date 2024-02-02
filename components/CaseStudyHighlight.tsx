import classNames from "classnames";
import Image from "next/image";
import Icon from "./Icon";
import Section, { SectionVariants } from "./Section";
import { ImageType } from "./TwoColumn";
import { IconType } from "../svgs/icons.constants";

export type CaseStudyHighlightProps = {
  title?: string;
  image: ImageType;
  imageLeft?: boolean;
};

const imageList = [
  {
    src: "/hero-graphic-flash-basements.png",
    alt: "Image 1",
    width: 277,
    height: 220,
    title: "Flash Basements",
    href: "https://flashbasements.com",
  },
  {
    src: "/placeholder.png",
    alt: "Image 2",
    width: 277,
    height: 220,
    title: "Placeholder",
    href: "https://google.com",
  },
  {
    src: "/placeholder.png",
    alt: "Image 3",
    width: 277,
    height: 220,
    title: "Placeholder",
    href: "https://google.com",
  },
  {
    src: "/placeholder.png",
    alt: "Image 4",
    width: 277,
    height: 220,
    title: "Placeholder",
    href: "https://google.com",
  },
];
const icon = IconType.RIGHT_ARROW;
const CaseStudyHighlight = ({
  image,
  imageLeft = true,
  title,
}: CaseStudyHighlightProps) => {
  const innerSectionClassName = classNames(
    "max-w-[1180px] mx-auto flex flex-col items-center justify-center",
    {
      "md:flex-row": imageLeft,
      "md:flex-row-reverse": !imageLeft,
    }
  );

  return (
    <Section
      variant={SectionVariants.LARGE}
      innerClassName={innerSectionClassName}
    >
      <div className="relative mb-4 md:mb-0 md:w-1/2 w-full">
        <Image
          src={image.src ?? "/hero-graphic-1.png"}
          alt={image.alt}
          width={578}
          height={504}
        />
        <div className="flex flex-grow">
          <a
            href="https://capitalviewaccounting.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 font-base text-black">
              <button className="font-base text-black">{title}</button>
              <div className="py-4">
                <Icon type={icon} className="fill-green" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="hidden md:block w-20 h-full" />
      <ul className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 lg:grid-cols-2 gap-8 items-center justify">
        {imageList?.map((img, i) => (
          <li>
            <div key={i}>
              <Image
                src={img.src || "/placeholder.png"}
                alt={img.alt}
                width={img.width}
                height={img.height}
              />
              <div className="">
                <a href={img.href} target="_blank" rel="noopener noreferrer">
                  <div className="flex gap-2 font-base text-black">
                    <button>{img.title}</button>
                    <div className="py-4">
                      <Icon type={icon} className="fill-green" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default CaseStudyHighlight;
