import { TCard } from "../types/product";

const PopularCard:React.FC<TCard> = ({ data }) => {
  const { image, title, price } = data;
  return (
    <div className="flex gap-1 items-center shadow-md p-2 w-[260px]">
      <div className="w-16">
        <img className="w-full" src={image} alt="" />
      </div>
      <div>
        <p className="text-xl font-medium">{title}</p>
        <p className="text-xl font-medium text-text">${price}</p>
      </div>
    </div>
  );
};

export default PopularCard;
