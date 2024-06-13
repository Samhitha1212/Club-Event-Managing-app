import React from 'react'
import './AddEvent.css'
function AddEvent() {
  return (
    < >
   
    <div className="form flex flex-col ">
    <div className="title m-4">Fill Event details</div>
    <div className=' flex flex-col form-section '>
      
      <div class="inputs">
    <label className='form-label'>Event Name</label>
    <input className='form-input' type="text" placeholder="" />
    <label className='form-label'>Event Shedule</label>
    <input className='form-input' type="text" placeholder="" />
    <label className='form-label'>Event venue</label>
    <input className='form-input' type="text" placeholder="" />
    <label className='form-label'>Event Topic</label>
    <input className='form-input' type="text" placeholder="" />
    <label className='form-label'>Conducting members </label>
    <input className='form-input' type="text" placeholder="" />
    <button  id='add-bt' type="submit" className='mt-4 form-button'>Add Event</button>
  </div>
    </div>
    </div>
    </>
  )
}

export default AddEvent
