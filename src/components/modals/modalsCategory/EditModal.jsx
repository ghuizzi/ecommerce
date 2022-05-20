import React from 'react'

const EditModal = ({closeModal}) => {
  return (
    <div className='modalbg'>
        <div className='modalContainer ContainerM'>
        <div className='titleCloseBtn'></div>
        <button className='close' onClick={()=> closeModal(false)}>X</button>
        <div className='tittle'>
            <h1>Edit</h1>
        </div>
        <div className='modalBoddy'>
        
        <div className='description txtA'>
          <label htmlFor=""> Name:<textarea name="textarea" rows="3" cols="40">Write something here</textarea></label>
        
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