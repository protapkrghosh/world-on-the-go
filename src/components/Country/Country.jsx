import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
   const [visited, setVisited] = useState(false);

   const handleVisited = () => {
      setVisited(!visited);
      handleVisitedCountries(country);
      // visited ? setVisited(false) : setVisited(true);

      // if (visited === true) {
      //    setVisited(false);
      // } else {
      //    setVisited(true);
      // }
   };

   return (
      <div
         className={`mb-5 border border-slate-300 rounded-md p-2 mx-auto ${
            visited && "country-visited"
         }`}
      >
         <div>
            <div className="flex items-center">
               <h3 className="text-xl">{country?.name?.common}</h3>

               {country.independent ? (
                  <small className="text-gray-500 bg-sky-100 ml-2 text-[9px] uppercase border border-sky-300 rounded-full px-1">
                     {country.independent ? "Independent" : ""}
                  </small>
               ) : (
                  ""
               )}
            </div>
            <p className="text-[13px]">Population: {country?.population}</p>

            <img
               src={country?.flags?.png}
               alt={country?.flags?.alt}
               className="w-60 h-36 mt-2 rounded-md border border-gray-400"
            />
         </div>

         <div className="flex justify-between gap-2">
            <button
               onClick={handleVisited}
               className="text-[12px] border border-slate-400 hover:bg-slate-200 py-2 w-full rounded-md mt-5 cursor-pointer"
            >
               {visited ? "Visited" : "Not Visited"}
            </button>

            <button
               onClick={() => handleVisitedFlags(country.flags.png)}
               className="text-[12px] border border-slate-400 hover:bg-slate-200 py-2 w-full rounded-md mt-5 cursor-pointer"
            >
               Add Flag
            </button>
         </div>
      </div>
   );
};

export default Country;
