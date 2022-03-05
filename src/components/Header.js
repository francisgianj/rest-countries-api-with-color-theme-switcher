import { BsMoon, BsFillMoonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
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
    <header id="header" className="shadow-sm ring-1 ring-black/5 mb-12">
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

export default Header;
