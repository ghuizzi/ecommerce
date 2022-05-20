import React from "react";
import pro1 from "../img/pro1.jpg";
import "./details.css";

const Details = () => {
  return (
    <div className="container">
      <div className="item">
        <img src={pro1} alt="" />
      </div>
      <div className="item">
        <div className="tittle">
          <h4>Products Name</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi
          vitae fugit qui quidem dolore doloremque ex aperiam! Dolorum ipsum
          nulla quod ipsam quaerat quis beatae molestiae obcaecati repudiandae
          quo?
        </p>

        <div className="category">
          {" "}
          <h6>categoria:</h6>
          <p> molestiae </p>
        </div>
        <div className="marcs">
          <h6>Marcs</h6> <p>eatae molestiae </p>{" "}
        </div>
        <div className="cant">
          <input className="cant" type="number" placeholder="Cantidad"></input>
        </div>
        <div className="Price">
          {" "}
          <button className="buy">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
