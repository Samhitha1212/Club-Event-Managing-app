import React from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/Userslice'

function Profile() {
  const user=useSelector(selectUser)
  return (
    <div>
      <div>
        <p>{user.name}</p>
        <p>{user.uid}</p>
        <p>{user.email}</p>
        <img src={user.photo}/>
        <p>{user.phoneNumber} </p>
      </div>
      
    </div>
  )
}

export default Profile
