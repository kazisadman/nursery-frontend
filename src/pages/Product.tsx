import PopularCard from "../components/PopularCard";
import PriceCard from "../components/PriceCard";
import Filter from "../components/product/Filter";
import Hero from "../components/product/Hero";
import SearchAndSort from "../components/product/SearchAndSort";
import { LuSettings2 } from "react-icons/lu";

const Product = () => {
  return (
    <div>
      <Hero></Hero>
      <SearchAndSort></SearchAndSort>
      <div className="my-16 max-w-7xl mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col-reverse items-center justify-center">
            <div>
              <p className="text-2xl font-medium mb-6">All Products</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
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
                  <PopularCard></PopularCard>
                  <PopularCard></PopularCard>
                  <PopularCard></PopularCard>
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
