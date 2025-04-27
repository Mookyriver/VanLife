import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  return (
    <>
    
        <nav className='host-nav'>
        <NavLink end style={({isActive})=> isActive? activeStyles: null}  to='.'>Dasboard</NavLink>
        <NavLink style={({isActive})=> isActive? activeStyles: null} to='income'>income</NavLink>
        <NavLink style={({isActive})=> isActive? activeStyles: null} to='vans'>Vans</NavLink>
        <NavLink style={({isActive})=> isActive? activeStyles: null} to='reviews'>reviews</NavLink>
        


        </nav>
        <Outlet />

    </>
  )
}

export default HostLayout