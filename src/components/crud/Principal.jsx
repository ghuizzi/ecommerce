import React, { useState } from "react";
import pro1 from "../img/pro1.jpg";
import AddModal from "../modals/AddModal";
import DeleteModal from "../modals/DeleteModal";
import DetailsModal from "../modals/DetailsModal";
import EditModal from "../modals/EditModal";
import "../styles/crud.css";
import AsideCrud from "./AsideCrud";
import { deleteProduct, getProduct } from "../apis";
import "./products.css";

const Principal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [detailsModal, setDdetailsModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const [productoCard, setProductoCard] = useState([]);

  getProduct().then(function (response) {
    setProductoCard(response.data);
  });
  const handleDelete = () => {};
  deleteProduct().then(function (response) {});
  return (
    <div className="content_pro">
      <div className="tittle-pro">
        <h1>Productos</h1>{" "}
        <button
          onClick={() => {
            setAddModal(true);
          }}
          className="btnAdd"
        >
          Add+
        </button>
      </div>

      <AsideCrud />
      <div className="container containerPrincipal">
        {productoCard.map((item) => (
          <div key={item.id} className="cart">
            <div className="name">
              <h4> {item.name}</h4>
            </div>
            <div className="img">
              <img src={pro1} alt="" />
            </div>
            <div className="details">
              <p>{item.description}</p>
              <div className="price">{item.price}</div>
              <div>
                <button
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className=" edit crud"
                >
                  Editar
                </button>
                <button onClick={handleDelete()} className="delete crud">
                  Eliminar
                </button>
                <button
                  onClick={() => {
                    setDdetailsModal(true);
                  }}
                  className=" details-b crud"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openModal && <EditModal closeModal={setOpenModal} />}
      {deleteModal && <DeleteModal closeModal={setDeleteModal} />}
      {detailsModal && <DetailsModal closeModal={setDdetailsModal} />}
      {addModal && <AddModal closeModal={setAddModal} />}
    </div>
  );
};

export default Principal;
