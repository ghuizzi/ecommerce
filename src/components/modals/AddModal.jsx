import React, { useRef } from "react";
import "../styles/modals.css";
// import { api } from "../apis/Config";

const AddModal = ({ closeModal }) => {
  const refContainer = useRef(null);

  const handleEvent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputEl = refContainer.current;

    console.log(inputEl);
  };
  return (
    <form>
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
                <textarea name="areaName" rows="3" cols="40">
                  Write something here
                </textarea>
              </label>
              <label htmlFor="">Description:</label>
              <textarea name="areaDescription" rows="10" cols="40">
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
              <select name="select">
                <option value="value1">Value 1</option>
                <option value="value2" selected>
                  Value 2
                </option>
                <option value="value3">Value 3</option>
              </select>
              <label htmlFor="">Categoria</label>
              <select name="select">
                <option value="value1">Value 1</option>
                <option value="value2" selected>
                  Value 2
                </option>
                <option value="value3">Value 3</option>
              </select>
            </div>
          </div>
          <div className="modalFooter">
            <button className="cancelBtn">Cancel</button>
            <button onClick={handleEvent} className="ContinueBtn">
              Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddModal;
