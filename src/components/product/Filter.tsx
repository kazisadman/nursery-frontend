import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setCategoryName } from "../../app/features/categorySlice";
import { setMaxPrice, setMinPrice } from "../../app/features/priceSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const categoryNames = useSelector(
    (state: RootState) => state.category.categoryNames
  );

  const handleMinAndMaxPrice = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const maxPrice = parseInt(form.maxPrice.value) || 1000;
    const minPrice = parseInt(form.minPrice.value) || 0;

    if (maxPrice < minPrice) {
      const alert = document.getElementById("alert");
      alert?.classList.remove("hidden");

      setTimeout(() => {
        alert?.classList.add("hidden");
      }, 3000);
    } else {
      dispatch(setMaxPrice(maxPrice));
      dispatch(setMinPrice(minPrice));
    }
  };

  return (
    <div>
      <div className="mb-10">
        <p className="text-2xl font-medium mb-6">Categories</p>
        <ul className="text-xl">
          {categoryNames.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => dispatch(setCategoryName(item))}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-2xl font-medium mb-6">Price</p>
        <form onSubmit={handleMinAndMaxPrice}>
          <div className="flex place-items-center gap-4  mb-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Min</span>
              </div>
              <input
                type="text"
                placeholder="0.00"
                name="minPrice"
                className="input input-bordered w-full max-w-[100px]"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Max</span>
              </div>
              <input
                type="text"
                placeholder="0.00"
                name="maxPrice"
                className="input input-bordered w-full max-w-[100px]"
              />
            </label>
          </div>
          <button className="btn btn-outline border-text w-20">
            <FaArrowRight></FaArrowRight>
          </button>
        </form>
      </div>
      <div id="alert" role="alert" className="alert alert-error my-5 hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Max Price is less the Min price</span>
      </div>
    </div>
  );
};

export default Filter;
