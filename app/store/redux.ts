import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

type GeneralDataState = {
  category: string;
  brand: string;
  model: string;
  modification: string;
  tuning: string;
  engine: string;
  gearbox: string;
  dateYear: string;
  dateMonth: string;
  coupe: string;
  vin: string;
  mileage: string;
  price: string;
  currency: string;
  location: string;
};

const initialState: GeneralDataState = {
  category: "",
  brand: "",
  model: "",
  modification: "",
  tuning: "",
  engine: "",
  gearbox: "",
  dateYear: "",
  dateMonth: "",
  coupe: "",
  vin: "",
  mileage: "",
  price: "",
  currency: "",
  location: "",
};

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    updateGeneralData: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    // addImage: (state, action: PayloadAction<File>) => {
    //   state.images.push(action.payload);
    // },
    // updateAdditionalExtras: (state, action: PayloadAction<any>) => {
    //   state.additionalExtras = action.payload;
    // },
  },
});

export const { updateGeneralData } = listingSlice.actions;

const store = configureStore({
  reducer: {
    listing: listingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
