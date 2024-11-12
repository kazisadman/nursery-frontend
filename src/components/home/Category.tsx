import { FaArrowRight } from "react-icons/fa";
import CategoryCard from "../CategoryCard";

const Category = () => {
    return (
      <div className="my-16">
        <div>
          <h1 className="text-5xl font-medium">
            Explore Our Diverse Plant
            <br />
            Categories
          </h1>
          <p className="text-xl text-gray-500 my-7">
            Whether you're looking to green your home or office, we have the
            perfect plants for you.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-16 items-center">
            <CategoryCard></CategoryCard>
            <CategoryCard></CategoryCard>
            <CategoryCard></CategoryCard>
            <button className="btn btn-outline border-text w-40">Shop <FaArrowRight></FaArrowRight></button>
        </div>
      </div>
    );
};

export default Category;