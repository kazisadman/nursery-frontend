import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TResponse } from "../types/product";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<TResponse, void>({
      query: () => {
        return {
          url: "/product",
        };
      },
    }),
    getProductByKeyword: builder.query<TResponse, string>({
      query: (query) => {
        return {
          url: "/product",
          params: { query },
        };
      },
    }),
  }),
});

export const { useGetAllProductQuery,useGetProductByKeywordQuery } = productApi;
