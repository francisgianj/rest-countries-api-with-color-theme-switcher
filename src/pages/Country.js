import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// US Flag https://flagcdn.com/w320/us.png
function Country() {
  return (
    <div className="px-20 pb-12">
      <div className="mb-20 block">
        <Link to="/">
          <button className="flex h-10 w-[8.5rem] items-center rounded bg-white px-8 dark:bg-dark-blue">
            <BsArrowLeft className="mr-3 h-4 w-4" />
            <div>Back</div>
          </button>
        </Link>
      </div>
      <div className="flex">
        <img
          className=" mr-36 h-[25rem] w-[35rem]"
          src="https://flagcdn.com/w320/be.png"
          alt="us"
        />
        <div>
          <h1 className="mb-11 text-[1.5rem] font-extrabold">Belgium</h1>
          <div className="flex mb-20">
            <div className="mr-28">
              <p>
                <span className="font-semibold">Native Name: </span>Belgie
              </p>
              <p>
                <span className="font-semibold">Population: </span> 11,139,511
              </p>
              <p>
                <span className="font-semibold">Region: </span> Europe
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span> Western
                Europe
              </p>
              <p>
                <span className="font-semibold">Capital: </span> Brussels
              </p>
            </div>

            <div>
              <p>
                <span className="font-semibold">Top Level Domain: </span>.be
              </p>
              <p>
                <span className="font-semibold">Currencies: </span> Euro
              </p>
              <p>
                <span className="font-semibold">Languages: </span>Dutch, French,
                German, German
              </p>
            </div>
          </div>
          <div className="flex">
            <p className="font-semibold mr-2">Border Countries: </p>
            <div>
              <button className="mx-1 h-7 w-24 rounded bg-white dark:bg-dark-blue">
                France
              </button>
              <button className="mx-1 h-7 w-24 rounded bg-white dark:bg-dark-blue">
                Germany
              </button>
              <button className="mx-1 h-7 w-24 rounded bg-white dark:bg-dark-blue">
                Netherlands
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
