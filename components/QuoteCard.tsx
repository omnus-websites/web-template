import Image from "next/image";
import { ImageType } from "./TwoColumn";

export type QuoteCardProps = {
  image: ImageType;
  title: string;
  body: string;
  name: string;
};

const QuoteCard = ({ image, title, body, name }: QuoteCardProps) => (
  <div className="bg-white py-8 px-6 shadow-quote-card flex flex-col max-w-[325px]">
    <div className="mb-6">
      <Image src="/quotes.png" width={47} height={18} alt="quotes" />
    </div>
    {image.src && (
      <div className="mb-6">
        <Image src={image.src} width={80} height={80} alt={image.alt} />
      </div>
    )}
    <h3 className="font-base font-bold text-primary mb-2">{title}</h3>
    <div className="flex-grow">
      <p className="font-sm text-grey2 mb-4">{body}</p>
    </div>
    <p className="font-sm text-grey1 font-bold">{name}</p>
  </div>
);

export default QuoteCard;
