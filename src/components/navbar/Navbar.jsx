import React from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";


import "../styles/nav.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="tittle-nav">
        <h1>America sonido</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>

      <div className="enlaces">
        <ul>
          <li>
            <Link to="/user">
              user
            </Link>
          </li>
          <li>
            <Link to="/product">products</Link>
          </li>
          <li>
            
            <li>
            <Link to="/principal">Index</Link>
          </li>
          <li>
            <Link to ="/" ><Cart 
            
            /> </Link>
          </li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
