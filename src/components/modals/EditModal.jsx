import React from 'react'
import '../styles/modals.css'
import pro1 from '../img/pro1.jpg'

const EditModal = ({closeModal}) => {
  return (
    <div className='modalbg'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'></div>
            <button className='close' onClick={()=> closeModal(false)}>X</button>
            <div className='tittle'>
                <h1>Edit</h1>
            </div>
            <div className='modalBoddy'>
              <input className='inputImg' type="file" />
            <img src={pro1} alt="" />
            <div className='description'>
            <label htmlFor=""> Name:<textarea name="textarea" rows="1" cols="30">Write something here</textarea></label>
        <label htmlFor="">Description:</label><textarea name="textarea" rows="4" cols="40">Write something here</textarea>
   
            </div>
            <div className='label'>
            <label htmlFor="">Price: <input type="number" defaultValue={1}/></label>
            <label htmlFor=""> Stock: <input type="number"defaultValue={1} /></label>
            </div>
            
            
            </div>
            <div className='modalFooter'>
                <button  className='cancelBtn'>Cancel</button>
                <button className='ContinueBtn'>Continue</button>
            </div>
        </div>

    </div>
  )
}

export default EditModal