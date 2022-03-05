import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryCountry: "",
  selectedRegion: { id: 0, name: "Filter by Region", disabled: true },
};

const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setSelectedRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
    setQueryCountry: (state, action) => {
      state.queryCountry = action.payload;
    },
    resetSelectedRegion: (state) => {
      state.selectedRegion = "";
    },
    resetQueryCountry: (state) => {
      state.queryCountry = "";
    },
    resetAll: (state) => {
      state.selectedRegion = "";
      state.queryCountry = "";
    },
  },
});

export const {
  setSelectedRegion,
  setQueryCountry,
  resetSelectedRegion,
  resetQueryCountry,
  resetAll,
} = appStateSlice.actions;
export default appStateSlice.reducer;
