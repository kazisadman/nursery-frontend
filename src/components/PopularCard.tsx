const PopularCard = () => {
  return (
    <div className="flex gap-1 items-center shadow-md p-2 w-[260px]">
      <div className="w-16">
        <img
          className="w-full"
          src="https://i.ibb.co.com/QQf1Hnx/category-image.png"
          alt=""
        />
      </div>
      <div>
        <p className="text-xl font-medium">Jasmin Plant</p>
        <p className="text-xl font-medium text-text">$45</p>
      </div>
    </div>
  );
};

export default PopularCard;
