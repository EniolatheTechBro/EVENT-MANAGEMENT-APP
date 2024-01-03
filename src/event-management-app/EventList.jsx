import React, { useEffect, useState } from 'react'
import { userRequest } from './Request'
import AppButton from './AppButton'
import { Link } from 'react-router-dom'

const EventList = () => {

    const [event,setEvent] = useState([])
    
    useEffect(()=>{
        getAllEvents()
    },[])

   async function getAllEvents(){
        const {data} = await userRequest().get('/event/userevent')
        console.log(data);
        setEvent(data)
    }
  return (
    <div >
        <Link to={'/dashboard'}><div className='p-4'><AppButton text={'back to dashboard'} style={'text-1xl bg-red-500 rounded-lg text-white px-2 py-1'}/></div></Link>
      <div className='text-4xl font-semibold p-4 text-center'>MY EVENTS</div>
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

export default EventList
