import React from 'react'
import { Outlet,Navigate,useLocation } from 'react-router-dom'

const AuthRequired = () => {
  const isLoggedIn = localStorage.getItem('loggedin')
  const location = useLocation()
  if(!isLoggedIn){
    return <Navigate
    
    to='/login'
    state={{message:'you muust login first', 
        from: location.pathname
    }} 
    replace 

    />

    /* this code use the NAVIGATE component of react-router to send userss to the logging page if they are not logged-in. 
    REPLACE sends them to the previous page the where when they hit back */
  }
 
    return (
    <Outlet/>
  )
}

export default AuthRequired