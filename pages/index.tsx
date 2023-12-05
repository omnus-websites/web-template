import { useState } from "react";
import { ButtonVariants } from "../components/Button";
import FullWidthCta from "../components/FullWidthCta";
import { HeaderVariants } from "../components/Header";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout headerVariant={HeaderVariants.SECONDARY}>
      <FullWidthCta
        heading="Test heading"
        subheading="Test subheading"
        cta={{
          href: "/",
          text: "Call to action",
          variant: ButtonVariants.WHITE,
        }}
        hero
      />
    </Layout>
  );
}
