import React from 'react'
import Profile from './Profile'
import SideBar from './SideBar'
import './dashboard.css'
import { Outlet } from 'react-router-dom'

const DevsDashboard = () => {
  return (
    <>
      <div className='dashboard-container'>
        <div className='side-bar-container'>
          <SideBar />
        </div>
        <div className='dashboard-content'>
          {/* <div><Profile /></div> */}
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default DevsDashboard
