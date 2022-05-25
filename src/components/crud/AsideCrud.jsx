import React, { useState } from "react";
import "../styles/aside.css";
import AddModal from "../modals/modalsCategory/AddModal";
import EditModal from "../modals/modalsCategory/EditModal";
import DeleteModal from "../modals/modalsCategory/DeleteModal";
import AddModalMarcs from "../modals/modalMarcs/AddModalMarcs";
import EditModalMarcs from "../modals/modalMarcs/EditModalMarcs";
import DeleteMarcs from "../modals/modalMarcs/DeleteMarcs";

const AsideCrud = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [AddModalMarc, setAddModalMarc] = useState(false);
  const [EditModalMarc, setEditModalMarc] = useState(false);
  const [deletemarcm, setDeleteMarc] = useState(false);
  return (
    <div className="content">
      <div>
        <div className="tittle">
          <h4>Categories</h4>
          <button onClick={() => setAddModal(true)}>add</button>
        </div>
        <input type="checkbox" /> Lorem{" "}
        <div>
          <button onClick={() => setEditModalMarc(true)} className="btn">
            edit
          </button>
          <button onClick={() => setDeleteModal(true)} className="btn">
            delete
          </button>
        </div>
        <input type="checkbox" /> Lorem{" "}
        <div>
          <button className="btn">edit</button>
          <button className="btn">delete</button>
        </div>
        <input type="checkbox" /> Lorem{" "}
        <div>
          <button className="btn">edit</button>
          <button className="btn">delete</button>
        </div>
      </div>
      <div>
        <h4>Marcs</h4>
        <button onClick={() => setAddModalMarc(true)}>add</button>
        <input type="checkbox" /> Lorem{" "}
        <div>
          <button onClick={() => setEditModalMarc(true)} className="btn">
            edit
          </button>
          <button onClick={() => setDeleteMarc(true)} className="btn">
            delete
          </button>
        </div>
        <input type="checkbox" /> Lorem{" "}
        <div>
          <button className="btn">edit</button>
          <button className="btn">delete</button>
        </div>
        <input type="checkbox" /> Lorem{" "}
        <div>
          <button className="btn">edit</button>
          <button className="btn">delete</button>
        </div>
      </div>
      <div>
        <h4>price</h4>
        <input type="checkbox" /> Lorem{" "}
        <div>
          <button className="btn">edit</button>
          <button className="btn">delete</button>
        </div>
        <input type="checkbox" /> Lorem{" "}
        <div>
          <button className="btn">edit</button>
          <button className="btn">delete</button>
        </div>
        <input type="checkbox" /> Lorem{" "}
        <div>
          <button className="btn">edit</button>
          <button className="btn">delete</button>
        </div>
      </div>
      {addModal && <AddModal closeModal={setAddModal} />}
      {editModal && <EditModal closeModal={setEditModal} />}
      {deleteModal && <DeleteModal closeModal={setDeleteModal} />}
      {AddModalMarc && <AddModalMarcs closeModal={setAddModalMarc} />}
      {EditModalMarc && <EditModalMarcs closeModal={setEditModalMarc} />}
      {deletemarcm && <DeleteMarcs closeModal={setDeleteMarc} />}
    </div>
  );
};

export default AsideCrud;
