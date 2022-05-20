import React from 'react'
import '../styles/modals.css'
const DeleteModal = ({closeModal}) => {
  return (
    <div className='modalbg'>
      <div className='modalContainer'>
      <button className='close' onClick={()=> closeModal(false)}>X</button>
        <div className='tittle'>
          <h1>Delete</h1>

        </div>
        <div className='modalBoddy'>
          <p>Are you sure?</p>

        </div>
        <div className='footer'>
          <button className='cancelBtn'>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
        

    </div>
   
  )
}

export default DeleteModal