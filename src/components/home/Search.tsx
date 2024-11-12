import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-3xl mx-auto my-44">
        <div className="text-center">
          <h1 className="text-5xl font-medium">
            Find Your Perfect <span className="text-text">Plant</span>
          </h1>
          <h3 className="text-2xl text-gray-500 my-8">
            Discover a variety of plants tailored to your home and
            lifestyle.Start your search now!
          </h3>
        </div>
        <img
          className="absolute left-[-5px] top-20"
          src="https://i.ibb.co.com/6W2Z8YW/search-left.png"
          alt=""
        />
        <label className="flex items-center mx-auto bg-text w-[623px] rounded-lg mb-10">
          <input
            className=" border-2 px-3 rounded-s-lg focus:outline-none focus:border-text h-[72px] w-full "
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <FaSearch className="text-2xl bg-text text-white w-[85px]"></FaSearch>
        </label>
        <div className="flex items-center gap-4 justify-center">
          <p>Suggestions:</p>
          <div className="flex justify-around gap-2">
            <p className="btn">Indoor plants</p>
            <p className="btn">Indoor plants</p>
            <p className="btn">Indoor plants</p>
          </div>
        </div>
        <img
          className="absolute right-[-5px] bottom-0 scale-x-[-1]"
          src="https://i.ibb.co.com/6W2Z8YW/search-left.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Search;
