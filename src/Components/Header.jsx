import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import avatar from '../assets/images/avatar-icon.png'


const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

function fakeLogOut(){
  localStorage.removeItem('loggedin')

}

  return (
    <header>
        <NavLink className="site-logo" to="/">#VanLife</NavLink>
        <nav>
          <NavLink className={({isActive}) => isActive ? "active-link" : null}  to="/host">Host</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/vans"> List </NavLink>
          <Link className="login-link" to="/login"> <img src={avatar} className='login-icon' /> </Link>
          <button onClick={fakeLogOut}>X</button>

       
        </nav>
      </header>
  )
}

export default Header