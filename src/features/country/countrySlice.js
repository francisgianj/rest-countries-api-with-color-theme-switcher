import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import countryService from "./countryService";

const initialState = {
  countries: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

// Get a country
export const getCountry = createAsyncThunk(
  "country/getCountry",
  async (country, thunkAPI) => {
    try {
      return await countryService.getCountry(country);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all countries in a region
export const getCountriesByRegion = createAsyncThunk(
  "country/getCountriesByRegion",
  async (region, thunkAPI) => {
    try {
      return await countryService.getCountriesByRegion(region);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllCountries = createAsyncThunk(
  "country/getAllCountries",
  async (thunkAPI) => {
    try {
      return await countryService.getAllCountries();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.errorMessage = "";
    },
    resetCountries: (state) => {
      state.countries = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.countries = action.payload;
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getCountriesByRegion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountriesByRegion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.countries = action.payload;
      })
      .addCase(getCountriesByRegion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getAllCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.countries = action.payload;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset, resetCountries } = countrySlice.actions;
export default countrySlice.reducer;
