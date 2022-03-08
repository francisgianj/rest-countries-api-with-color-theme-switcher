import CountryInfo from "./CountryInfo";
import {
  reset,
  getAllCountries,
  resetCountries,
  getCountry,
} from "../features/country/countrySlice";
import Spinner from "./Spinner"


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function CountriesContainer() {
  const dispatch = useDispatch();
  const { countries } = useSelector(
    (state) => state.country
  );

  const { queryCountry } = useSelector(
    (state) => state.appState
  );

  if (!countries) {
    if (queryCountry) {
      return <div>{queryCountry} is not found. </div>;
    }

    return <div>No Countries found</div>;
  }

  return (
    <div className="flex flex-wrap justify-between">
      {countries.map((country, id) => (
        <CountryInfo
          key={id}
          flag={country.flags.png}
          flagAlt={country.flag}
          countryName={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          cca2={country.cca2}
        />
      ))}
    </div>
  );
}

export default CountriesContainer;
