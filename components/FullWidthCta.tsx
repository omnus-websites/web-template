import Button, { ButtonVariants } from "./Button";
import Section, { SectionVariants } from "./Section";
import { CTA } from "./TwoColumn";

type FullWidthCtaProps = {
  heading?: string;
  subheading?: string;
  cta?: CTA;
  hero?: boolean;
};

const FullWidthCta = ({
  heading = "Heading Text",
  subheading,
  cta = {
    href: "/",
    text: "Call to action",
    variant: ButtonVariants.WHITE,
  },
  hero,
}: FullWidthCtaProps) => {
  return (
    <Section
      variant={SectionVariants.LARGE}
      outerClassName="bg-white"
      innerClassName=" flex flex-col items-center text-white"
      style={
        hero
          ? {
              backgroundImage: "url('/blue-background-curvy.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "top",
            }
          : {}
      }
    >
      <h2 className="font-f2 mb-2 md:mb-4">{heading}</h2>
      {subheading && <p className="mb-6">{subheading}</p>}
      <Button variant={cta.variant} href={cta.href}>
        {cta.text}
      </Button>
    </Section>
  );
};

export default FullWidthCta;
