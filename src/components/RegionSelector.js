import { useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesByRegion,
  resetCountries,
  getAllCountries,
  reset,
} from "../features/country/countrySlice";
import {
  setSelectedRegion,
  resetSelectedRegion,
  setQueryCountry,
} from "../features/appState/appStateSlice";

const regions = [
  { id: 0, name: "Filter by Region", disabled: true },
  { id: 1, name: "Africa", disabled: false },
  { id: 2, name: "Americas", disabled: false },
  { id: 3, name: "Asia", disabled: false },
  { id: 4, name: "Europe", disabled: false },
  { id: 5, name: "Oceania", disabled: false },
];

function RegionSelector() {
  const dispatch = useDispatch();

  const { selectedRegion, queryCountry } = useSelector(
    (state) => state.appState
  );

  const { isError, errorMessage } = useSelector((state) => state.country);

  useEffect(() => {
    //  Escape event listener
    function onKeyDown(e) {
      if (e.key === "Escape") {
        dispatch(resetSelectedRegion());
      }
    }

    window.addEventListener("keydown", onKeyDown);

    // Get Region countries
    if (isError) {
      console.log(errorMessage);
    }

    if (selectedRegion.id !== 0) {
      dispatch(setQueryCountry(""));
      dispatch(getCountriesByRegion(selectedRegion.name));
    } else if (queryCountry) {
      console.log("hehe")
    } else {
      dispatch(getAllCountries());
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      dispatch(reset());
    };
  }, [selectedRegion, queryCountry, isError, errorMessage, dispatch]);

  const onChange = (e) => {
    dispatch(setSelectedRegion(e));
  };

  return (
    <div
      className="ml-20 h-14 w-48 cursor-pointer rounded 
            border-none bg-white shadow dark:bg-dark-blue"
    >
      <Listbox value={selectedRegion} onChange={onChange}>
        <Listbox.Button className="flex h-full w-full items-center justify-between bg-transparent px-6">
          <div>{selectedRegion.name}</div>
          <BiChevronDown className="ml-2" />
        </Listbox.Button>
        <Listbox.Options
          className="relative text-sm mt-1 w-48 
                    rounded bg-white py-1 shadow dark:bg-dark-blue"
        >
          {regions.map((region) => (
            <Listbox.Option
              key={region.id}
              value={region}
              disabled={region.disabled}
              as={Fragment}
            >
              {({ active }) => (
                <div
                  className={`${
                    region.disabled && "hidden"
                  } space-x-1 px-6 py-1 ${
                    active
                      ? "bg-very-light-gray dark:bg-very-dark-blue1"
                      : "bg-white dark:bg-dark-blue"
                  }`}
                >
                  {region.name}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default RegionSelector;
