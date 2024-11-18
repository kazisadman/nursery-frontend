import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setCategoryName } from "../../app/features/categorySlice";

const Filter = () => {
  const dispatch = useDispatch();

  const categoryNames = useSelector(
    (state: RootState) => state.category.categoryNames
  );

  return (
    <div>
      <div className="mb-10">
        <p className="text-2xl font-medium mb-6">Categories</p>
        <ul className="text-xl">
          {categoryNames.map((item) => (
            <li
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
        <div className="flex place-items-center gap-4  mb-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Min</span>
            </div>
            <input
              type="text"
              placeholder="0.00"
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
              className="input input-bordered w-full max-w-[100px]"
            />
          </label>
        </div>
        <button className="btn btn-outline border-text w-20">
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Filter;
