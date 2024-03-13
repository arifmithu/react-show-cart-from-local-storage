import React from "react";

function Country({
  country,
  selectedCountries,
  setSelectedCountries,
  cart,
  setCart,
}) {
  console.log(country);
  const divStyle = {
    marginBottom: "20px",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid red",
  };
  const handleSelection = (country) => {
    setSelectedCountries([...selectedCountries, country]);
    setCart([...cart, country]);
    const getCartFromLS = () => {
      const cartFromLS = localStorage.getItem("cart");
      if (cartFromLS) {
        return JSON.parse(cartFromLS);
      }
      return [];
    };
    const saveCartToLS = (cart) => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };
    const addToLs = (id) => {
      const prevCart = getCartFromLS();
      prevCart.push(id);
      saveCartToLS(prevCart);
    };
    addToLs(country.cca3);
  };
  return (
    <div style={divStyle}>
      <div className="w-full h-[250px] border rounded-xl">
        <img
          src={country.flags.png}
          alt=""
          className="bg-cover h-full rounded-xl w-full"
        />
      </div>
      <h1>Name: {country.name.common}</h1>
      <h1>Total Area : {country.area}</h1>
      <h1>Population : {country.population}</h1>
      <h1>Capital : {country.capital?.[0]}</h1>
      <button
        onClick={() => handleSelection(country)}
        className="bg-blue-400 rounded px-3 py-2 text-white font-bold"
      >
        Select
      </button>
    </div>
  );
}

export default Country;
