import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct } from "../types/product";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<TProduct, void>({
      query: () => `/product`,
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
