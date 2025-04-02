import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

// Normal fetching data
// const countriesData = fetch("https://restcountries.com/v3.1/all");

const countriesPromise = async () => {
   const res = await fetch("https://restcountries.com/v3.1/all");
   return res.json();
};

function App() {
   const countriesData = countriesPromise();

   return (
      <>
         <Suspense fallback={<h3>Loading...</h3>}>
            <Countries countriesData={countriesData}></Countries>
         </Suspense>
      </>
   );
}

export default App;
