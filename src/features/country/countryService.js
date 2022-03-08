import axios from "axios";

const getCountry = async (countryName) => {
  const API_URL = "https://restcountries.com/v3.1/name/";

  try {
    const response = await axios.get(API_URL + countryName);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Get all countries in a region
const getCountriesByRegion = async (region) => {
  const API_URL = "https://restcountries.com/v3.1/region/";

  try {
    const response = await axios.get(API_URL + region);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Get a country by code
const getCountryByCode = async (code) => {
  const API_URL = "https://restcountries.com/v3.1/alpha/";

  try {
    const response = await axios.get(API_URL + code);
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
}

// Get all countries
const getAllCountries = async () => {
  const API_URL = "https://restcountries.com/v3.1/all";

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const countryService = {
  getCountry,
  getCountriesByRegion,
  getAllCountries,
  getCountryByCode,
};

export default countryService;
