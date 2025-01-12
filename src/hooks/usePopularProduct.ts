import { useGetAllProductQuery } from "../api/product";

const usePopularProduct = () => {
  const { data } = useGetAllProductQuery();
  const products = data?.data;

  return products?.filter((item) => item.popular === true);
};

export default usePopularProduct;
