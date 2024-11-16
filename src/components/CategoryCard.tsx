import { TCard } from "../types/product";

const CategoryCard: React.FC<TCard> = ({ data }) => {
  const { image, title } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="w-[260px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
