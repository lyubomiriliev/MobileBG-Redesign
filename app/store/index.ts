import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./listingSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    listing: listingReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
