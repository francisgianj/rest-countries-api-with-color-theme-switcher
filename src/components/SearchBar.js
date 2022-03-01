import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Combobox } from "@headlessui/react";
import axios from "axios";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const COUNTRY_API = "https://restcountries.com/v3.1/name/";
      axios
        .get(`${COUNTRY_API}/${query}`)
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCountries([]);
    }

    console.log(countries);
  }, [query]);

  let typingTimer;
  let doneTypingInterval = 500;

  const onKeyUp = (e) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setQuery(e.target.value);
    }, doneTypingInterval);
  };

  const onKeyDown = () => {
    clearTimeout(typingTimer);
  };

  return (
    <Combobox
      as="div"
      className="w-[30rem] rounded bg-white text-very-dark-blue2 dark:bg-dark-blue dark:text-white shadow"
    >
      <div className="flex items-center px-4">
        <BsSearch className="mr-4 h-4 w-4" />
        <Combobox.Input
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          className="h-14 w-full rounded border-0 bg-transparent text-sm placeholder-dark-gray focus:outline-none dark:placeholder-white"
          placeholder="Search for a country..."
        />
      </div>
      <div>
        {countries.map((country) => (
          <pre key={country.fifa}>{country.name.common}</pre>
        ))}
      </div>
    </Combobox>
  );
}

export default SearchBar;
