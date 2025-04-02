import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesData }) => {
   const [visitedCountries, setVisitedCountries] = useState([]);
   const [visitedFlags, setVisitedFlags] = useState([]);

   const handleVisitedFlags = (flag) => {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
   };

   const handleVisitedCountries = (country) => {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
   };

   const countries = use(countriesData);
   // console.log(countries);

   return (
      <div>
         <div className="my-5 px-3">
            <h3 className="text-center text-2xl font-bold uppercase mb-5">
               Total of countries: {countries.length}
            </h3>
            <h3 className="text-xl font-semibold">
               Traveled so far: {visitedCountries.length}
            </h3>

            <div className="flex gap-2">
               {visitedFlags.map((flag, index) => (
                  <img
                     key={index}
                     src={flag}
                     alt="Flag"
                     className="w-16 h-10 rounded my-3"
                  />
               ))}
            </div>

            <ol className="text-start">
               {visitedCountries.map((country) => (
                  <li key={country.cca3}>{country.name.common}</li>
               ))}
            </ol>
         </div>

         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-3">
            {countries.map((country) => (
               <Country
                  key={country.cca3}
                  handleVisitedFlags={handleVisitedFlags}
                  handleVisitedCountries={handleVisitedCountries}
                  country={country}
               ></Country>
            ))}
         </div>
      </div>
   );
};

export default Countries;
