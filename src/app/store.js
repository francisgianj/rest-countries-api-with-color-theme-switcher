import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/country/countrySlice";
import appStateReducer from "../features/appState/appStateSlice";

export const store = configureStore({
  reducer: {
    country: countryReducer,
    appState: appStateReducer,
  },
});
