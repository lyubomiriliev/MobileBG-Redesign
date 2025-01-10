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

type InteriorExteriorState = {
  exteriorColor: string;
  interiorMaterial: string;
  interiorColor: string;
};

type safetyExtrasState = {
  ext: string[];
};

type ListingState = {
  generalData: GeneralDataState;
  interiorExterior: InteriorExteriorState;
  safetyExtras: safetyExtrasState;
};

const initialState: ListingState = {
  generalData: {
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
  },
  interiorExterior: {
    exteriorColor: "",
    interiorMaterial: "",
    interiorColor: "",
  },
  safetyExtras: {
    ext: [],
  },
};

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    updateGeneralData: (
      state,
      action: PayloadAction<Partial<GeneralDataState>>
    ) => {
      state.generalData = { ...state.generalData, ...action.payload };
    },
    updateInteriorExterior: (
      state,
      action: PayloadAction<Partial<InteriorExteriorState>>
    ) => {
      state.interiorExterior = { ...state.interiorExterior, ...action.payload };
    },
    updateSafetyExtras: (state, action: PayloadAction<string[]>) => {
      state.safetyExtras.ext = action.payload;
    },
  },
});

export const { updateGeneralData, updateInteriorExterior, updateSafetyExtras } =
  listingSlice.actions;

const store = configureStore({
  reducer: {
    listing: listingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
