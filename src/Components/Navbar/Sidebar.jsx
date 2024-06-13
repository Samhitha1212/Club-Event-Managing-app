import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import clubLogo from '../../assets/club-logo.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/Userslice'

function Sidebar() {
  const user=useSelector(selectUser)
  const [showsidebar,setsidebar]=useState(false)
  const  changesidebar=()=>{
    if(showsidebar){
      setsidebar(false)
    }
    else{
      setsidebar(true)
    }
  }
  return (
    <div className='flex flex-col' id='sidebar'>
      <div className='flex sidehead'>
         <div className='club-details flex'>
          <li><img  className='club-logo' src={clubLogo} alt='Club logo'/></li>
          <li><span className='club-name text-3xl text-black'>Lambda</span></li>
        </div>
        <span  className='menu' onClick={changesidebar}><i  class="bi bi-list"></i></span>
        </div>
        <div className={`Sauth flex flex-col ${showsidebar?"show":"hide"}`}>
       {
            !user?(<>
             
            <Link to={'/login'}> <li >LogIn</li></Link>
            <Link to={'/signup'}><li >SingUp</li></Link>
           
            </>):(
              <>
            <li >LogOut</li> 
          <li>Profile</li>
          <Link to={'/addevent'}><li >Add Event</li></Link>
            </>)
          }
      </div>
    </div>
  )
}

export default Sidebar
