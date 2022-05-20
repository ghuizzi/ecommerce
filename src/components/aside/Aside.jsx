import React from "react";
import "../styles/aside.css";
const Aside = () => {
  return (
    <div className="content">
      <div>
        <h4>Catergorias</h4>
        <ul>
          <li>
            <input type="checkbox" /> Lorem{" "}
          </li>
          <li>
            <input type="checkbox" /> Lorem
          </li>
          <li>
            <input type="checkbox" /> Lorem
          </li>
          <li>
            <input type="checkbox" /> Lorem
          </li>
        </ul>
      </div>
      <div>
        <h4>Marcs</h4>
        <ul>
          <li>
            <input type="checkbox" /> Lorem
          </li>
          <li>
            <input type="checkbox" /> Lorem
          </li>
          <li>
            <input type="checkbox" /> Lorem
          </li>
          <li>
            <input type="checkbox" /> Lorem
          </li>
        </ul>
      </div>
      <div>
        <h4>Price</h4>
        <ul>
          <li>
            <input type="checkbox" /> Lorem
          </li>
          <li>
            <input type="checkbox" /> Lorem
          </li>
          <li>
            <input type="checkbox" /> Lorem
          </li>
          <li>
            <input type="checkbox" /> Lorem
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
