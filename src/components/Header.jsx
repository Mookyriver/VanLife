import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import imageUrl from "../assets/avatar-icon.png"

const Header = () => {

  const activeStyle ={
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }
  return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink style={({isActive}) => isActive? activeStyle:null} to="/host">Host</NavLink>
                <NavLink style={({isActive}) => isActive? activeStyle:null} to="/about">About</NavLink>
                <NavLink style={({isActive}) => isActive? activeStyle:null} to="/vans">Vans</NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={imageUrl} 
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
  )
}

export default Header