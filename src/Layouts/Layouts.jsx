import React from 'react'
import { Outlet } from 'react-router-dom'
import Component from '../constants/Component'
import { Toaster } from 'react-hot-toast'

function Layouts({LogOut}) {
  return (
    <div>
 
      <Component.NavBar LogOut={LogOut}/>

      <Outlet></Outlet>
    </div>
  )
}


export default Layouts
