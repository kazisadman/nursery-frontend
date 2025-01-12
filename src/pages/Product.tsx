import { useGetAllProductQuery } from "../api/product";
import PopularCard from "../components/PopularCard";
import PriceCard from "../components/PriceCard";
import Filter from "../components/product/Filter";
import Hero from "../components/product/Hero";
import SearchAndSort from "../components/product/SearchAndSort";
import { LuSettings2 } from "react-icons/lu";
import { TProduct } from "../types/product";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import usePopularProduct from "../hooks/usePopularProduct";

const Product = () => {
  const categoryName = useSelector(
    (state: RootState) => state.category.categoryName
  );

  const maxPrice = useSelector((state: RootState) => state.price.maxPrice);
  const minPrice = useSelector((state: RootState) => state.price.minPrice);

  const sortByOption = useSelector((state: RootState) => state.sorting.option);

  console.log(sortByOption);

  const { data } = useGetAllProductQuery();
  const products = data?.data;

  let filteredData: TProduct[] | undefined = [];

  if (categoryName && filteredData?.length === 0) {
    filteredData = products?.filter((item) => item?.category === categoryName);
  } else {
    filteredData = filteredData?.filter(
      (item) => item?.category === categoryName
    );
  }

  if ((minPrice || maxPrice) && filteredData?.length === 0) {
    filteredData = products?.filter(
      (item) => item?.price >= minPrice && item?.price <= maxPrice
    );
  } else {
    filteredData = filteredData?.filter(
      (item) => item?.price >= minPrice && item?.price <= maxPrice
    );
  }
  // console.log(filteredData?.length);

  const popular = usePopularProduct();

  if (sortByOption === "alphabetic") {
    filteredData?.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortByOption === "acending") {
    filteredData?.sort((a, b) => a.price - b.price);
  } else if (sortByOption === "decending") {
    filteredData?.sort((a, b) => b.price - a.price);
  }
  console.log(filteredData);

  return (
    <div>
      <Hero></Hero>
      <SearchAndSort></SearchAndSort>
      <div className="my-16 max-w-7xl mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col-reverse items-center justify-center">
            <div>
              {categoryName ? (
                <p className="text-2xl font-medium mb-6">{categoryName}</p>
              ) : (
                <p className="text-2xl font-medium mb-6">All Products</p>
              )}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                {categoryName || minPrice || maxPrice
                  ? filteredData?.map((item: TProduct) => (
                      <PriceCard key={item?._id} data={item}></PriceCard>
                    ))
                  : products?.map((item: TProduct) => (
                      <PriceCard key={item?._id} data={item}></PriceCard>
                    ))}
              </div>
            </div>

            <label
              htmlFor="my-drawer-2"
              className="btn drawer-button lg:hidden"
            >
              <LuSettings2></LuSettings2>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
              <Filter></Filter>
              <div className="mt-14">
                <p className="text-xl font-medium mb-4">Popular</p>
                <div className="flex flex-col gap-10">
                  {popular?.slice(0, 4).map((item) => (
                    <PopularCard key={item?._id} data={item}></PopularCard>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-3">
        <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            defaultChecked
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
