import { useGetAllProductQuery } from "../api/product";
import { TProduct } from "../types/product";

const usePopularProduct = () => {
  const { data } = useGetAllProductQuery();
  const products = data?.data;

  const popular: TProduct[] = [];

  for (const item in products) {
    if (products[item]?.popular === true) {
      popular.push(products[item]);
    }
  }
  return popular;
};

export default usePopularProduct;
