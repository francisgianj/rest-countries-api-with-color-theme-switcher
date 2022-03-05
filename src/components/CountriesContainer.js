import CountryInfo from "./CountryInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function CountriesContainer() {
  const { countries, isError, isLoading, errorMessage } = useSelector(
    (state) => state.country
  );

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
        />
      ))}
    </div>
  );
}

export default CountriesContainer;
