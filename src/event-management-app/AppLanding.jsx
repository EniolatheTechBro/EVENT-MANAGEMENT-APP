import React from 'react'
import AppNavbar from './AppNavbar'
import { Outlet } from 'react-router-dom'

const AppLanding = () => {
  return (
    <div>
     
      <AppNavbar/>
      <Outlet/>
      
    </div>
  )
}

export default AppLanding
