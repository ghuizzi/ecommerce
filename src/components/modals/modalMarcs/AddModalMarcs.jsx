import React, { useRef } from "react";
import "../modalsCategory/modalCate.css";

const AddModal = ({ closeModal }) => {
  const refInputName = useRef(null);
  const handleBtnSubmit = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const name = refInputName.current.value;

    console.log(name);
  };
  return (
    <div className="modalbgAside">
      <div className="modalContainer ContainerM">
        <div className="titleCloseBtn"></div>
        <button className="close" onClick={() => closeModal(false)}>
          X
        </button>
        <div className="tittle">
          <h1>Add</h1>
        </div>
        <div className="modalBoddy">
          <div className="description txtA">
            <label htmlFor="">
              {" "}
              Name:
              <input ref="refInputName" type="text" />
            </label>
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
