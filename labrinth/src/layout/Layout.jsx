import React from 'react'
import NavBar from '../pages/NavBar'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Layout() {
  return (
    <div className='grid-container'>
       <Header />
       <SideBar />
        <Outlet />
    </div>
  )
}

export default Layout