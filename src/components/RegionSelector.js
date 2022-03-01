import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import axios from "axios";

const regions = [
  { id: 0, name: "Filter by Region", disabled: true },
  { id: 1, name: "Africa", disabled: false },
  { id: 2, name: "Americas", disabled: false },
  { id: 3, name: "Asia", disabled: false },
  { id: 4, name: "Europe", disabled: false },
  { id: 5, name: "Oceania", disabled: false },
];

function RegionSelector() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //  Escape event listener
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setSelectedRegion(regions[0]);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    // Get Region countries
    const REGION_API = "https://restcountries.com/v3.1/region/";
    if (selectedRegion.id !== 0) {
      axios
        .get(`${REGION_API}/${selectedRegion.name}`)
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCountries([]);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedRegion]);

  return (
    <div
      className="h-14 w-48 cursor-pointer rounded border-none 
            bg-white shadow dark:bg-dark-blue ml-20"
    >
      <Listbox value={selectedRegion} onChange={setSelectedRegion}>
        <Listbox.Button className="flex h-full w-full items-center justify-between bg-transparent px-4">
          <div>{selectedRegion.name}</div>
          <BiChevronDown className="ml-2" />
        </Listbox.Button>
        <Listbox.Options
          className="mt-1 w-48 rounded bg-white py-4 
                    text-sm dark:bg-dark-blue shadow"
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
                  } space-x-1 px-4 py-2 ${
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
      <div>
        {countries.map((country) => (
          <pre>{JSON.stringify(country.name.common)}</pre>
        ))}
      </div>
    </div>
  );
}

export default RegionSelector;