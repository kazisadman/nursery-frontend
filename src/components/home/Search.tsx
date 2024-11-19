import { FaSearch } from "react-icons/fa";
import { useGetProductByKeywordQuery } from "../../api/product";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategoryName } from "../../app/features/categorySlice";

const Search = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const categoryNames = useSelector(
    (state: RootState) => state.category.categoryNames
  );

  const { data: searchData, refetch } = useGetProductByKeywordQuery(query);
  console.log(searchData);

  const handleSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = (form.elements.namedItem("query") as HTMLFormElement).value;
    setQuery(query);
    refetch();
  };

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
        <form
          className="flex items-center mx-auto bg-text w-[623px] rounded-lg mb-10"
          onSubmit={handleSearchForm}
        >
          <input
            className=" border-2 px-3 rounded-s-lg focus:outline-none focus:border-text h-[72px] w-full "
            type="text"
            name="query"
            id=""
            placeholder="Search"
          />
          <button type="submit">
            <FaSearch className="text-2xl bg-text text-white w-[85px] cursor-pointer"></FaSearch>
          </button>
        </form>
        <div className="flex items-center gap-4 justify-center">
          <p>Suggestions:</p>
          <div className="flex justify-around gap-2">
            {categoryNames.slice(0, 3).map((item) => (
              <Link
                onClick={() => dispatch(setCategoryName(item))}
                to={`/shop`}
                className="btn"
              >
                {item}
              </Link>
            ))}
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
