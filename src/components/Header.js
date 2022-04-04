import { BsMoon, BsFillMoonFill } from "react-icons/bs";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isDarkMode, setIsDarkMode] = useToggle();

  let darkMode = false;

  if (localStorage.theme) {
    if (localStorage.theme === "dark") {
      darkMode = true;
    }
  } else {
    localStorage.setItem("theme", "light");
  }

  const [enabled, setEnabled] = useState(darkMode);

  useEffect(() => {
    const bodyClass = document.documentElement.classList;
    if (!enabled) {
      bodyClass.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      bodyClass.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [enabled]);

  return (
    <header id="header" className="mb-12 shadow-sm ring-1 ring-black/5">
      <div className="flex justify-between bg-white px-20 py-7 dark:bg-dark-blue">
        <div className="">
          <h1 className="text-detail-page font-extrabold">
            <Link to="/">Where in the world?</Link>
          </h1>
        </div>
        <div>
          <button
            className="flex items-center"
            onClick={() => setEnabled(!enabled)}
          >
            {enabled ? <BsFillMoonFill /> : <BsMoon />}
            <p className="ml-2 font-semibold">Dark Mode</p>
          </button>
        </div>
      </div>
    </header>
  );
}

// useToggle Hook
const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

const useToggleDarkMode = (initialValue = false) => {
  if (localStorage.theme && localStorage.theme === "dark") {
    initialValue = true;
  } else {
    // On first visit of the website or if Dark Mode isn't turned on
    localStorage.setItem("theme", "light");
  }
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => setState((state) => !state), []);

  useEffect(() => {
    const bodyClass = document.documentElement.classList;

    if (!state) {
      bodyClass.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      bodyClass.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [state]);

  

  return [state, toggle];
};

export default Header;
