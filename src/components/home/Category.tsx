import { FaArrowRight } from "react-icons/fa";
import CategoryCard from "../CategoryCard";
import { useGetAllProductQuery } from "../../api/product";
import { TProduct, TResponse } from "../../types/product";
import { Link } from "react-router-dom";

const Category = () => {
  const { data } = useGetAllProductQuery() as { data: TResponse };
  const products = data?.data;

  const categories: TProduct[] = [];

  products?.forEach((product: TProduct) => {
    if (!categories?.some((item) => item?.category === product?.category)) {
      categories.push(product);
    }
  });

  console.log(categories);
  return (
    <div className="my-16 max-w-7xl mx-auto ">
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
        {categories?.slice(0, 3).map((item) => (
          <CategoryCard key={item?._id} data={item}></CategoryCard>
        ))}
        <Link to="/shop" className="btn btn-outline border-text w-40">
          Shop <FaArrowRight></FaArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default Category;
