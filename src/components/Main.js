import RegionSelector from "./RegionSelector";
import SearchBar from "./SearchBar";
import CountriesContainer from "./CountriesContainer";

function Main() {
  return (
    <div className="p-20">
      <main className="">
        <div className="mb-12 flex justify-between">
          <SearchBar />
          <RegionSelector />
        </div>
        {/* <CountriesContainer /> */}
      </main>
    </div>
  );
}

export default Main;
