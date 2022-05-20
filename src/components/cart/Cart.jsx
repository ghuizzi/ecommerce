import React from "react";
import bag from "./bag.png";
import Products from "../products/Products";
const Cart = ({ cart, setCart }) => {
  console.log(cart);
  return (
    <div>
      <img src={bag} alt="" />
      {/* {cart.length === 0 ? (
        <p>0</p>
      ) : (
        cart.map((product) => <Products key={product.id} product={product} />)
      )} */}
    </div>
  );
};

export default Cart;
