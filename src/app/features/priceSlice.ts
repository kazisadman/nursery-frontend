import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TPrice {
  maxPrice: number;
  minPrice: number;
}

const initialState: TPrice = {
  maxPrice: 1000,
  minPrice: 0,
};

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
  },
});

export const { setMaxPrice, setMinPrice } = priceSlice.actions;

export default priceSlice.reducer;
