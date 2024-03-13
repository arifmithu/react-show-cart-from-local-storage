import React from "react";
import Country from "./Country";

function Countries({
  countries,
  selectedCountries,
  setSelectedCountries,
  cart,
  setCart,
}) {
  return (
    <div className="grid grid-cols-3 gap-4 mx-[100px]">
      {countries.map((country) => (
        <Country
          country={country}
          selectedCountries={selectedCountries}
          setSelectedCountries={setSelectedCountries}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default Countries;
