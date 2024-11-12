import PriceCard from "../PriceCard";

const Collection = () => {
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
  );
};

export default Collection;
