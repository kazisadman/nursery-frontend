import { useDispatch } from "react-redux";
import { TCard } from "../types/product";
import { setCategoryName } from "../app/features/categorySlice";
import { Link } from "react-router-dom";

const CategoryCard: React.FC<TCard> = ({ data }) => {
  const { image, category } = data;

  const dispatch = useDispatch();

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-64">
          <img src={image} alt="Shoes" className="w-[260px]" />
        </figure>
        <div className="card-body items-center text-center">
          <Link
            to={"/shop"}
            className="card-title cursor-pointer"
            onClick={() => dispatch(setCategoryName(category))}
          >
            {category}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
