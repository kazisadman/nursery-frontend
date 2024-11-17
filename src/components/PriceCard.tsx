import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { TCard } from "../types/product";

const PriceCard:React.FC<TCard> = ({ data }) => {
  const { image, title, price } = data;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5 h-64">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center gap-1">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStarHalfStroke></FaStarHalfStroke>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-3xl text-gray-500">${price}</p>
          <button className="btn bg-text text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
