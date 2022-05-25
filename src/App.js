import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Cart from "./components/cart/Cart";

import Principal from "./components/crud/Principal";

import Navbar from "./components/navbar/Navbar";

import Products from "./components/products/Products";

import User from "./components/user/User";

import Axios from "axios";
function App() {
  const [products, setProduct] = useState([]);
  // useEffect(() => {
  //   // Axios.get("http://127.0.0.1:3333/products").then((response) => {
  //   //   setProduct(response.data);
  //   //   console.log(products);
  //   });
  // });
  const [cart, setCart] = useState([]);

  const addProduct = (id) => {
    const product = products.filter((product) => product.id === id);
    setCart([...cart, product]);
    console.log(product);
    console.log(cart);
  };

  useEffect(() => {
    // console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/user" element={<User />} />

          <Route path="/product" element={<Products />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </BrowserRouter>
      <div>
        {/* <Products addProduct={addProduct} products={products} /> */}

        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
