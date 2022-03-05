import { useDispatch, useSelector } from "react-redux";
import CountriesContainer from "../components/CountriesContainer";
import SearchBar from "../components/SearchBar";
import RegionSelector from "../components/RegionSelector";
import Spinner from "../components/Spinner";

function Main() {
  const { countries, isError, isLoading, errorMessage } = useSelector(
    (state) => state.country
  );

  return (
    <div className="px-20 pb-12">
      <main className="">
        <div className="mb-12 flex justify-between">
          <SearchBar />
          <RegionSelector />
        </div>
        {isLoading ? <Spinner /> : <CountriesContainer />}
      </main>
    </div>
  );
}

export default Main;
