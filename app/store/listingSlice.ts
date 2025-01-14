import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ListingState = {
  generalData: GeneralDataState;
  interiorExterior: InteriorExteriorState;
  safetyExtras: safetyExtrasState;
  comfortExtras: comfortExtrasState;
  multimediaExtras: multimediaExtrasState;
  additionalExtras: additionalExtras;
  description: description;
  phoneNumber: phoneNumber;
  email: email;
};

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
  litres: string;
  euro: string;
  horsePower: string;
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

type description = {
  desc: string;
};

type phoneNumber = {
  num: string | null;
};

type email = {
  email: string | null;
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
    litres: "",
    euro: "",
    horsePower: "",
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
  description: {
    desc: "",
  },
  phoneNumber: {
    num: null,
  },
  email: {
    email: null,
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
    updateSellerInfo: (
      state,
      action: PayloadAction<{
        phoneNumber?: string | null;
        email?: string | null;
        description?: string;
      }>
    ) => {
      const { phoneNumber, email, description } = action.payload;
      if (phoneNumber !== undefined) state.phoneNumber.num = phoneNumber;
      if (email !== undefined) state.email.email = email;
      if (description !== undefined) state.description.desc = description;
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
  updateSellerInfo,
} = listingSlice.actions;

export default listingSlice.reducer;
