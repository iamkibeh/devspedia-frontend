import React from 'react'
import SideBar from './SideBar'
import './dashboard.css'
import { Outlet } from 'react-router-dom'

const DevsDashboard = ({ user }) => {
  return (
    <>
      <div className='dashboard-container'>
        <div className='side-bar-container'>
          <SideBar />
        </div>
        <div className='dashboard-content'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default DevsDashboard
