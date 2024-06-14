import Home from './Components/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Login from './Components/Auth/Login.jsx'
import { Route,Routes } from 'react-router-dom'
import Signup from './Components/Auth/Signup.jsx'
import AddEvent from './Components/Admin/AddEvent.jsx'
import Sidebar from './Components/Navbar/Sidebar.jsx'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout  } from './Features/Userslice.js';
import { selectUser } from './Features/Userslice.js'
import { auth } from './Components/firebase/firebase.jsx'
import Profile from './Components/Profile/Profile.jsx'
import UpdateProfile from './Components/Profile/UpdateProfile.jsx'



function App() {
  

const dispatch=useDispatch();

useEffect(()=>{

  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch(login({
        uid:authUser.uid,
        photo:authUser.photoURL,
        name:authUser.displayName,
        email:authUser.email,
        phoneNumber:authUser.phoneNumber,

      }))
    }
    else{
      dispatch(logout())
    }
  })


},[dispatch])

  return (
    <>
     <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/addevent' element={<AddEvent/>} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/updateprofile' element={<UpdateProfile/>}/>

     </Routes>

     <Footer/>
    </>
  )
}

export default App
