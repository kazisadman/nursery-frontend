import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const PriceCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src="https://i.ibb.co.com/7NK5rY2/plant.png"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Monstera plant</h2>
        <div className="flex items-center gap-1">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfStroke></FaStarHalfStroke>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-3xl text-gray-500">$40</p>
          <button className="btn bg-text text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
