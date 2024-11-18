import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TCategory {
  categoryNames: string[];
  categoryName: string;
}

const initialState: TCategory = {
  categoryNames: [],
  categoryName: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryNames: (state, action: PayloadAction<string[]>) => {
      state.categoryNames = action.payload;
    },
    setCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload;
    },
  },
});

export const { setCategoryNames, setCategoryName } = categorySlice.actions;
export default categorySlice.reducer;
