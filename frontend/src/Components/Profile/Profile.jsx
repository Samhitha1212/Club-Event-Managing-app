import React from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/Userslice'
import { Link } from 'react-router-dom'

function Profile() {
  const user=useSelector(selectUser)
  return (
    <div>
      <div>
        <p>{user?.name}</p>
        <p>{user?.uid}</p>
        <p>{user?.email}</p>
        <img src={user?.photo}/>
      </div>

      <Link to={'/updateprofile'} ><h3>Update Profile</h3></Link>
      
    </div>
  )
}

export default Profile
