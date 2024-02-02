import { ButtonVariants } from "../components/Button";
import FullWidthCta from "../components/FullWidthCta";
import { HeaderVariants } from "../components/Header";
import Layout from "../components/Layout";
import Services from "../components/Services";
import LogoBar from "../components/LogoBar";
import TwoColumn from "../components/TwoColumn";
import Section, { SectionVariants } from "../components/Section";
import Grid from "../components/Grid";
import QuoteCard, { QuoteCardProps } from "../components/QuoteCard";
import CaseStudyHighlight from "../components/CaseStudyHighlight";

const quoteCards: QuoteCardProps[] = [
  {
    image: { src: "/quote-card-face.png", alt: "someone's face" },
    title: "Text highlight",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam donec vitae scelerisque pellentesque. Et non laoreet enim faucibus. Placerat egestas in gravida vitae et. Dignissim hac feugiat fermentum risus fermentum, ac.",
    name: "Alice Blake",
  },
  {
    image: { src: "/quote-card-face.png", alt: "someone's face" },
    title: "Text highlight",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam donec vitae scelerisque pellentesque. Et non laoreet enim faucibus. Placerat egestas in gravida vitae et.",
    name: "Alice Blake",
  },
  {
    image: { src: "/quote-card-face.png", alt: "someone's face" },
    title: "Text highlight",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam donec vitae scelerisque pellentesque faucibus. Placerat egestas in gravida vitae et. Dignissim hac feugiat fermentum risus fermentum, ac.",
    name: "Alice Blake",
  },
  {
    image: { src: "/quote-card-face.png", alt: "someone's face" },
    title: "Text highlight",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam donec vitae scelerisque pellentesque. Et non laoreet enim faucibus. Placerat egestas in gravida vitae et. Dignissim hac feugiat fermentum risus fermentum, ac.",
    name: "Alice Blake",
  },
];

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
        image={{ src: "/first-two-column.png", alt: "whatever" }}
      />
      <Section variant={SectionVariants.LARGE}>
        <Grid gapX="gap-x-6">
          {quoteCards.map((quoteCard, i) => (
            <QuoteCard key={i} {...quoteCard} />
          ))}
        </Grid>
      </Section>
      <CaseStudyHighlight
        title="Capital View Accounting"
        image={{ src: "/hero-graphic-1.png", alt: "expanded website" }}
      />
    </Layout>
  );
}
