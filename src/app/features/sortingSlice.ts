import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TSorting {
  option: string;
}

const initialState: TSorting = {
  option: "",
};

export const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    sortByOption: (state, action: PayloadAction<string>) => {
      state.option = action.payload;
    },
  },
});

export const { sortByOption } = sortingSlice.actions;
export default sortingSlice.reducer;
