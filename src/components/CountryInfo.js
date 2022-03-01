function CountryInfo(props) {
  return (
    <div className="country w-[16.5625rem] rounded-md bg-white dark:bg-dark-blue ">
      {" "}
      {/* overflow-hidden */}
      <img src={props.flag} alt="german flag" className=" w-[16.5625rem]" />
      <div className=" px-7 py-8">
        <h5 className="mb-6 text-lg font-extrabold">{props.countryName}</h5>
        <div className="leading-7">
          <p>
            <strong>Population:</strong> {props.population}
          </p>
          <p>
            <strong>Region:</strong> {props.region}
          </p>
          <p>
            <strong>Capital:</strong> {props.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
