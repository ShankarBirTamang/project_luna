import type { FC } from "react";
import { Button } from "./button";

interface SpecialOfferProps {
  title: string;
  description: string;
  backgroundImage: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const SpecialOffer: FC<SpecialOfferProps> = ({
  title,
  description,
  backgroundImage,
  buttonText = "Shop Now",
  onButtonClick,
}) => {
  return (
    <section
      className="relative h-[400px] bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h2 className="mb-4 text-4xl font-bold">{title}</h2>
        <p className="mb-6 text-xl">{description}</p>
        <Button
          variant="outline"
          className="border-2 text-white hover:bg-white hover:text-black"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default SpecialOffer;
