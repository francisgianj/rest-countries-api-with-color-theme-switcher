import { Link } from "react-router-dom";

function CountryInfo(props) {
  const country_param = props.countryName.common.split(" ").join("-").toLowerCase();
  return (
    <Link to={`/country/${country_param}`} id={props.key}>
      <div className="mb-10 w-64 overflow-hidden rounded-md bg-white dark:bg-dark-blue">
        {/* h-80  */}
        <img src={props.flag} alt={props.flagAlt} className="h-40 w-64" />
        <div className=" px-7 py-7">
          <h5 className=" pb-7 text-detail-page font-extrabold">
            {props.countryName.official}
          </h5>
          <div className="">
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {props.population}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {props.region}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {props.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryInfo;
