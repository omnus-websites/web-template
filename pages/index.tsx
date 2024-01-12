import { useState } from "react";
import { ButtonVariants } from "../components/Button";
import FullWidthCta from "../components/FullWidthCta";
import { HeaderVariants } from "../components/Header";
import Layout from "../components/Layout";
import Services from "../components/Services";
import LogoBar from "../components/LogoBar";

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
      <Services />
    </Layout>
  );
}
