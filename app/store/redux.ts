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

type comfortExtrasState = {
  safe: string[];
};

type multimediaExtrasState = {
  media: string[];
};

type additionalExtras = {
  add: string[];
};

type UploadedImage = {
  name: string;
  type: string;
};

type UploadedImagesState = {
  images: File[]; // Array of uploaded image metadata
};

type ListingState = {
  generalData: GeneralDataState;
  interiorExterior: InteriorExteriorState;
  safetyExtras: safetyExtrasState;
  comfortExtras: comfortExtrasState;
  multimediaExtras: multimediaExtrasState;
  additionalExtras: additionalExtras;
  uploadedImages: UploadedImagesState;
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
  comfortExtras: {
    safe: [],
  },
  multimediaExtras: {
    media: [],
  },
  additionalExtras: {
    add: [],
  },
  uploadedImages: {
    images: [], // Start with an empty array for uploaded images
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
    updateComfortExtras: (state, action: PayloadAction<string[]>) => {
      state.comfortExtras.safe = action.payload;
    },
    updateMediaExtras: (state, action: PayloadAction<string[]>) => {
      state.multimediaExtras.media = action.payload;
    },
    updateAdditionalExtras: (state, action: PayloadAction<string[]>) => {
      state.additionalExtras.add = action.payload;
    },
    updateUploadedImages: (state, action: PayloadAction<File[]>) => {
      state.uploadedImages.images = action.payload; // Update images array
    },
  },
});

export const {
  updateGeneralData,
  updateInteriorExterior,
  updateSafetyExtras,
  updateComfortExtras,
  updateMediaExtras,
  updateAdditionalExtras,
  updateUploadedImages,
} = listingSlice.actions;

const store = configureStore({
  reducer: {
    listing: listingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
