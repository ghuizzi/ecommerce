import React, { useState } from "react";
import Aside from "../aside/Aside";
import pro1 from "./pro1.jpg";
import "./products.css";
import { getProduct } from "../apis";

const products = ({ products, addProduct }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [productoCard, setProductoCard] = useState([]);

  getProduct().then(function (response) {
    setProductoCard(response.data);
  });

  return (
    <div className="content_pro">
      <h1>Productos</h1>
      <Aside />
      <div className="container">
        {productoCard.map((item) => (
          <div key={item.id} className="cart">
            <div className="name">
              <h4>{item.name}</h4>
            </div>
            <div className="img">
              <img src={pro1} alt="" />
            </div>
            <div className="details">
              <p>{item.description}</p>
              <div className="price">{item.price}</div>
              <button onClick={() => addProduct(item.id)} className="button">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    // <ul>
    //
    // </ul>
  );
};

export default products;
// const {name, price, id} = product
// const addProduct = id =>{
//   const product = products.filter((product)=> product.id === id)
//   setCart([...cart, product])
//   console.log(product)
//   console.log(cart)
// }
// return (

//   <div className="content_pro">
//     <h1>Productos</h1>
//     <Aside />
//     <div className="container">
//       <div className="cart">
//         <div className="name">
//           <h4>{name}</h4>
//         </div>
//         <div className="img">
//           <img src={pro1} alt="" />
//         </div>
//         <div className="details">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
//           </p>
//           <div className="price">{price}</div>
//           <button onClick={()=> addProduct(id)} className="button">Buy</button>
//         </div>
//       </div>
//       <div className="cart">
//         <div className="name">
//           <h4> Products name</h4>
//         </div>
//         <div className="img">
//           <img src={pro1} alt="" />
//         </div>
//         <div className="details">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
//           </p>
//           <div className="price">10$</div>
//           <button className="button">Buy</button>
//         </div>
//       </div>
//       <div className="cart">
//         <div className="name">
//           <h4> Products name</h4>
//         </div>
//         <div className="img">
//           <img src={pro1} alt="" />
//         </div>
//         <div className="details">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
//           </p>
//           <div className="price">10$</div>
//           <button className="button">Buy</button>
//         </div>
//       </div>
//       <div className="cart">
//         <div className="name">
//           <h4> Products name</h4>
//         </div>
//         <div className="img">
//           <img src={pro1} alt="" />
//         </div>
//         <div className="details">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
//           </p>
//           <div className="price">10$</div>
//           <button className="button">Buy</button>
//         </div>
//       </div>
//       <div className="cart">
//         <div className="name">
//           <h4> Products name</h4>
//         </div>
//         <div className="img">
//           <img src={pro1} alt="" />
//         </div>
//         <div className="details">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
//           </p>
//           <div className="price">10$</div>
//           <button className="button">Buy</button>
//         </div>
//       </div>
//       <div className="cart">
//         <div className="name">
//           <h4> Products name</h4>
//         </div>
//         <div className="img">
//           <img src={pro1} alt="" />
//         </div>
//         <div className="details">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
//           </p>
//           <div className="price">10$</div>
//           <button className="button">Buy</button>
//         </div>
//       </div>
//     </div>
//   </div>
