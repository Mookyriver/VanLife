import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRequired = () => {
  const auhthenticated = false

  if (!auhthenticated){
    return <Navigate to='/login'/>
  }
  return <Outlet />
}

export default AuthRequired