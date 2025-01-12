import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../api/product";
import { setupListeners } from "@reduxjs/toolkit/query";
import categoryReducer from "./features/categorySlice";
import priceReducer from "./features/priceSlice";
import sortReducer from "./features/sortingSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    category: categoryReducer,
    price: priceReducer,
    sorting: sortReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
