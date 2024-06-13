import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Login from './Components/Auth/Login'
import { Route,Routes } from 'react-router-dom'
import Signup from './Components/Auth/Signup'
import AddEvent from './Components/Admin/AddEvent'
import Sidebar from './Components/Navbar/Sidebar'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout  } from './Features/Userslice';
import { selectUser } from './Features/Userslice'
import { auth } from './Components/firebase/firebase'
import Profile from './Components/Profile/Profile'



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
     </Routes>

     <Footer/>
    </>
  )
}

export default App
