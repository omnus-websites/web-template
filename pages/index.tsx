import { useState } from "react";
import { ButtonVariants } from "../components/Button";
import FullWidthCta from "../components/FullWidthCta";
import { HeaderVariants } from "../components/Header";
import Layout from "../components/Layout";
import Services from "../components/Services";
import LogoBar from "../components/LogoBar";
import TwoColumn from "../components/TwoColumn";

export default function Home() {
  return (
    <Layout headerVariant={HeaderVariants.SECONDARY}>
      <FullWidthCta
        heading="Ready for a painless website update?"
        subheading="You need a professional website that conveys your services and drives business, and we're ready to create that for you."
        cta={{
          href: "/",
          text: "Work with us",
          variant: ButtonVariants.WHITE,
        }}
        hero
      />
      <LogoBar />
      <TwoColumn
        content={{
          heading: "Omnus means everything",
          body: "In Latin, “omnus” means “everything in one.” True to our name, we handle all aspects of updating or creating your website, including design, content writing, and development so you can stick to what you do best. ",
        }}
        cta={{
          href: "/",
          text: "Learn more about us",
          variant: ButtonVariants.PRIMARY,
        }}
      />
      <Services />
    </Layout>
  );
}
