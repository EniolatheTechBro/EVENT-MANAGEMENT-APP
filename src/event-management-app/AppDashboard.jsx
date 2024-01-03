import React, { useEffect, useState } from 'react'
import AppForm from './appForm'
import { Link } from 'react-router-dom'

const AppDashboard = () => {
  const [name,setName]= useState('Guest');
  const [loggedIn,setLoggedIn] = useState(false)

  function getName(){
    const Username = localStorage.getItem('Username')
    setName(Username)
    if(Username){

      setLoggedIn(true)
    }
    else{
      setLoggedIn(false)
    }
  }

  useEffect(()=>{
    getName()
  },[])
 
  return (
    
    <div>
      <div className='flex justify-start ml-8 pt-5 text-2xl'>
        Welcome,
        <span className='text-green-500 font-semibold'>{name}</span>!
      </div>
     {loggedIn? <div className='w-[50%] mx-auto flex items-center mt-[200px] gap-10'>
        <Link to={'/create-event'}><div className='text-7xl font-semibold border-4 rounded-md p-2 transition hover:text-blue-500 hover:border-blue-500'>Create-Event</div></Link>
        <Link to={'/events'}><div className='text-7xl font-semibold border-4 rounded-md p-2 transition hover:text-blue-500 hover:border-blue-500'>Manage-Event</div></Link>
      </div>: <div className='text-3xl'>Kindly login in or Register</div>}
    </div>
  )
}

export default AppDashboard
