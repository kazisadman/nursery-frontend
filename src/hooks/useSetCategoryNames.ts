import { useDispatch } from "react-redux";
import { useGetAllProductQuery } from "../api/product";
import { TResponse } from "../types/product";
import { setCategoryNames } from "../app/features/categorySlice";

const useSetCategoryNames = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllProductQuery() as { data: TResponse };

  const products = data?.data;
  const categoryName: string[] = [];

  const getCategoryName = () => {
    for (const item in products) {
      if (!categoryName.includes(products[item]?.category)) {
        categoryName.push(products[item]?.category);
      }
    }
    dispatch(setCategoryNames(categoryName));
  };

  getCategoryName();
};

export default useSetCategoryNames;
