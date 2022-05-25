import React, { useRef, useState } from "react";
import "../styles/modals.css";
import PropTypes from "prop-types";

const Componente = (props) => {
  return (
    <>
      <p>{props.texto}</p>
      <p>{props.numero}</p>
      <p>{props.correo}</p>
    </>
  );
};
Componente.propTypes = {
  texto: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
const AddModal = ({ closeModal }) => {
  const [text, setText] = useState("");

  const refContainer = useRef(null);
  const refInputName = useRef(null);
  const handleBtnSubmit = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputEl = refContainer.current.value;
    const name = refInputName.current.value;
    console.log(inputEl);
    console.log(name);
  };
  return (
    <div className="modalbg">
      <div className="modalContainer">
        <div className="titleCloseBtn"></div>
        <button className="close" onClick={() => closeModal(false)}>
          X
        </button>
        <div className="tittle">
          <h1>Add</h1>
        </div>
        <div className="modalBoddy">
          <input className="insertImg" type="file" alt="img_pro" />
          <div className="description">
            <label htmlFor="">
              {" "}
              Name:
              <input
                type="text"
                ref={refInputName}
                rows="3"
                cols="40"
                placeholder="Write something here"
              />
            </label>
            <label htmlFor="">Description:</label>
            <textarea
              name="areaDescription"
              rows="10"
              cols="40"
              value={text}
              onChange={(e) => setText(e.target.value)}
            >
              Write something here
            </textarea>
          </div>
          <div className="label">
            <label htmlFor="">
              Price:{" "}
              <input
                ref={refContainer}
                name="price"
                type="number"
                defaultValue={1}
              ></input>
            </label>
            <label htmlFor="">
              {" "}
              Stock: <input type="number" defaultValue={1} />
            </label>
            <label htmlFor="">Marcs</label>

            <label>Marca</label>
            <select name="Marca" defaultValue={1}>
              <option value={1}>Value 1</option>
              <option value={2}>Value 2</option>
              <option value={3}>Value 3</option>
            </select>

            <label>Categoria</label>
            <select name="Category" defaultValue={1}>
              <option value={1}>Value 1</option>
              <option value={2}>Value 2</option>
              <option value={3}>Value 3</option>
            </select>
          </div>
        </div>
        <div className="modalFooter">
          <button className="cancelBtn">Cancel</button>
          <button onClick={handleBtnSubmit} className="ContinueBtn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
