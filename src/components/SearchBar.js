import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Combobox } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { reset, getCountry, resetCountries } from "../features/country/countrySlice";
import { setQueryCountry } from "../features/appState/appStateSlice";

function SearchBar() {
  const { queryCountry } = useSelector((state) => state.appState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (queryCountry.length > 0) {
      dispatch(getCountry(queryCountry));
    } else {
      dispatch(resetCountries());
    }
  }, [queryCountry]);

  let typingTimer;
  let doneTypingInterval = 500;

  const onKeyUp = (e) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      dispatch(setQueryCountry(e.target.value));

    }, doneTypingInterval);
  };

  const onKeyDown = () => {
    clearTimeout(typingTimer);
  };

  // Consider Changing the Search Bar to a normal input field because it is the same.
  return (
    <Combobox
      as="div"
      className="w-[30rem] rounded bg-white text-very-dark-blue2 shadow dark:bg-dark-blue dark:text-white"
    >
      <div className="flex items-center px-6">
        <BsSearch className="mr-6 h-4 w-4" />
        <Combobox.Input
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          className="h-14 w-full rounded border-0 bg-transparent placeholder-dark-gray focus:outline-none dark:placeholder-white"
          placeholder="Search for a country..."
        />
      </div>
    </Combobox>
  );
}

export default SearchBar;
