import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/Userslice'

function Home() {

  const user=useSelector(selectUser)
  const events=[1,2,3,4]

  return (
    <div className='Home '>
      {
         user?(
         <>
        <div className=' mt-7 events flex flex-col '> 
          {
          events.map(data=>(<>

<section className=' mt-4  w-1/2 border  border-purple-400 object-center card'>
        <div className='event-head mb-5'>
        <span className='text-center text-2xl mt-3'>Event Name </span>
        <span className='time-details'><i class="bi bi-clock-fill"></i>5:30 pm</span>
        </div>
        <div className='event-info flex flex-col '>
        
        <li><i class="bi bi-geo-alt-fill"></i>Venu : Auditorium</li>
        <li><i class="bi bi-book-fill"></i>Concept:Web Development</li>
        <li><i class="bi bi-person-fill"></i>-By:Josh,Deekshith</li>
        </div>
        </section>
          </>))
        
}
      </div>


         </>):(
        <>
        <div className='msg mt-7 text-3xl text-center '>
         <h2>Login to see Details</h2>
         </div>
         </>)

      }
     
    </div>
  )
}

export default Home
