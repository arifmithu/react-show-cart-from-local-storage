import React from "react";

function Cart({ cart }) {
  return (
    <div className="px-[100px] py-6 bg-blue-300 flex justify-center text-white text-xl font-bold mb-12">
      {" "}
      Cart Length : ({cart.length})
    </div>
  );
}

export default Cart;
