const CategoryCard = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/QQf1Hnx/category-image.png"
            alt="Shoes"
            className="w-[260px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Outdoor Plants</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
