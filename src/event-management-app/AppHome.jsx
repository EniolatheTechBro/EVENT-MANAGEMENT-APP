import React, { useEffect, useState } from 'react'
import { publicRequest, userRequest } from './Request'
import { Link } from 'react-router-dom'
import AppButton from './AppButton'

const AppHome = () => {

    const [event,setEvent] = useState()
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
        getEvents()
        getName()
    },[])

    async function getEvents(){
        const {data} = await publicRequest.get('/event/allevent')
        setEvent(data)
    }
  return (
    <div>
       <div className='p-4'> {loggedIn?<Link to={'/dashboard'}><AppButton text={'Go to Dashboard'} style={'bg-red-500 px-2 py-1 rounded-lg text-white'}/></Link>:''}</div>
        
      <div className='text-4xl font-semibold p-4 text-center'>ALL EVENTS</div>
        <div className='block md:grid md:grid-cols-2 lg:grid lg:grid-cols-3'>
        {event && event.map((event)=>{
            return(
                <div className='bg-slate-200 mb-4 mx-auto w-[70%] p-4 text-center space-y-5 rounded-lg shadow-md md:w-[90%] lg:w-[60%] '>
                    <div className='text-5xl font-bold'>{event.eventTitle}</div>
                    <div className=''>{event.eventDescription}</div>
                    <div><span className='text-1xl bg-green-500 rounded-lg text-white px-2 py-1 mr-2'>Venue</span>{event.Venue}</div>
                    <div><AppButton text={'Delete Event'} style={'text-1xl bg-red-500 rounded-lg text-white px-2 py-1'}/></div>
                </div>
            )
        })}
        </div>

    </div>
  )
}

export default AppHome
