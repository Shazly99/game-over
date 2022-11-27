import React from 'react'
import { Outlet } from 'react-router-dom'
import Component from '../constants/Component' 

function Layouts({LogOut}) {
  return (
    <div className='position-relative'>
 
      
      <Component.NavBar LogOut={LogOut}/>
      <Outlet></Outlet>
      <Component.DetectOffline/>
    </div>
  )
}


export default Layouts
