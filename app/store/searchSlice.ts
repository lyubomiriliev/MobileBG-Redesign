import { SearchCriteria } from "@/utils/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SearchCriteria = {
  category: "Автомобили и Джипове",
  brand: "",
  model: "",
  priceMin: "",
  priceMax: "",
  region: "",
  yearMin: "",
  yearMax: "",
  hpMin: "",
  hpMax: "",
  coupe: "",
  euro: "",
  engine: "",
  gearbox: "",
  color: "",
  maxMileage: "",
  materials: "",
  intColor: "",
  sort: "",
  safety: [],
  location: "",
  comfort: [],
  multimedia: [],
  additional: [],
  exterior: [],
  interior: [],
  security: [],
  others: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateCriteria: (state, action: PayloadAction<Partial<SearchCriteria>>) => {
      return { ...state, ...action.payload };
    },
    resetCriteria: () => initialState,
  },
});

export const { updateCriteria, resetCriteria } = searchSlice.actions;

export default searchSlice.reducer;
