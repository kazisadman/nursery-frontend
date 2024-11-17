import { useGetAllProductQuery } from "../../api/product";
import { TProduct } from "../../types/product";
import PriceCard from "../PriceCard";

const Collection = () => {
  const {data} = useGetAllProductQuery()
  const products = data?.data
  return (
    <div className="my-16 max-w-7xl mx-auto ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-medium">Plants</h1>
          <p className="text-xl text-gray-500 my-7">
            Discover our stunning collection of plants
          </p>
        </div>
        <div>
          <button className="btn btn-outline border-text w-40">View All</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 items-center">
        {products?.slice(0,8).map((item:TProduct) => (
          <PriceCard key={item?._id} data={item}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default Collection;
