import { FC } from "react";
import {useHover} from "../../hooks";
import { characteristic } from "../../interfaces";
import { CheckIcon, CheckIcon as CheckIconFill } from "../Icons";

interface FeaturesListingProps extends characteristic {
  provider : string
  title: string
}
const Feautres2Listing : FC <Partial<FeaturesListingProps>> = ({provider, title, items}) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-primary pb-4 capitalize">
        {title}
        <span className="font-light"> de {provider}</span>
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {items?.map((item,idx) => (
              <Feature key={idx} text={item.title} clicked={item.clicked} />
          ))}
      </div>
    </div>
  );
};

export default Feautres2Listing;

export const Feature = ({ text, clicked = false }: { text: string, clicked?: boolean }) => {
  const [hoverRef, isHovered] = useHover()
    return (
    <div ref={hoverRef} className="flex gap-2 items-center text-sm">
      <div
        className={`${clicked && isHovered ? "bg-primary" : "bg-white"} w-5 h-5 rounded-full grid place-items-center ${clicked && isHovered ? "text-white" : "text-primary"} transition border-2 ${clicked ? "border-primary" : "border-gray-500"}`}
      >
        {clicked && <CheckIcon className="w-4 h-4" />}
      </div>
      <p className="text-gray-500 capitalize">{text}</p>
    </div>
  );
};
