import React from 'react'
import NavBar from '../pages/NavBar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default Layout