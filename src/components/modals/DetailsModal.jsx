import React from 'react'
import pro1 from '../img/pro1.jpg'
import '../styles/modals.css'
const DetailsModal = ({closeModal}) => {
  return (
    <div className='modalbg'>
    <div className='modalContainer'>
        <div className='titleCloseBtn'></div>
        <button className='close' onClick={()=> closeModal(false)}>X</button>
        <div className='tittle'>
            <h1>Details</h1>
        </div>
        <div className='modalBoddy'>
            <img src={pro1} alt="" />
            <div className='description'><label>Description:</label><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
            <div className='label'>
            <label htmlFor="">Price: <p>11$</p></label>
            <label htmlFor=""> Stock: <input type="number"defaultValue={1} /></label>
            <label htmlFor="">Sell: <input type="number" defaultValue={1} /></label>
            </div>
            
        </div>
        <div className='footer'>
            <button  className='cancelBtn'>Close</button>
            
        </div>
    </div>

</div>
  )
}

export default DetailsModal