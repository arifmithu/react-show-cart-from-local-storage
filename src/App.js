import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Cart from "./components/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      const getCart = localStorage.getItem("cart");
      if (getCart) {
        setCart(JSON.parse(getCart));
      }
    };
    getData();
  }, []);
  return (
    <div>
      <Cart cart={cart} setCart={setCart} />
      <Countries
        countries={countries}
        selectedCountries={selectedCountries}
        setSelectedCountries={setSelectedCountries}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default App;
