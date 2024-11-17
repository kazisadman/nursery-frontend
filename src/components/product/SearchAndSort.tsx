
const SearchAndSort = () => {
    return (
      <div className="flex justify-end max-w-7xl mx-auto my-5">
        <div className="flex items-center gap-4">
          <form className="input input-bordered flex items-center gap-2">
            <input type="text" name='query' className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </form>
          <select className="select border-text w-full max-w-28">
            <option disabled selected>
              Sort by
            </option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        </div>
      </div>
    );
};

export default SearchAndSort;