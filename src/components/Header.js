import { BsMoon, BsFillMoonFill } from "react-icons/bs";
import { useState, useEffect } from "react";

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
    <header id="header" className="border-b  ring-1 ring-black/5">
      <div className="flex justify-between bg-white px-20 py-7 dark:bg-dark-blue">
        <div className="">
          <h1 className="text-lg font-extrabold">Where in the world?</h1>
        </div>
        <div>
          <button
            className="flex items-center"
            onClick={() => setEnabled(!enabled)}
          >
            {enabled ? <BsMoon /> : <BsFillMoonFill />}
            <p className="ml-2">Dark Mode</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
