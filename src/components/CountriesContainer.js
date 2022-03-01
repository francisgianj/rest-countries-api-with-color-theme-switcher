import CountryInfo from "./CountryInfo";

function CountriesContainer() {
  return (
    <div className="flex justify-between">
      <CountryInfo
        flag="https://flagcdn.com/de.svg"
        countryName="Germany"
        population="81,770,900"
        region="Europe"
        capital="Berlin"
      />
      <CountryInfo
        flag="https://flagcdn.com/us.svg"
        countryName="United States of America"
        population="81,770,900"
        region="Americas"
        capital="Washington, D.C"
      />
      <CountryInfo
        flag="https://flagcdn.com/ph.svg"
        countryName="Philippines"
        population="81,770,900"
        region="Asia"
        capital="Manila"
      />
      <CountryInfo
        flag="https://flagcdn.com/kr.svg"
        countryName="South Korea"
        population="81,770,900"
        region="Asia"
        capital="Seoul"
      />
    </div>
  );
}

export default CountriesContainer;
