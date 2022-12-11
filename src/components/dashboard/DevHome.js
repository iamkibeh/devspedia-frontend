import React from 'react'
import Navbar from '../navbar/Navbar'
import DevsDashboard from './DevsDashboard'
import DevsNavbar from './DevsNavbar'

function DevHome() {
  return (
    <>
    <h1>This Is the Dev Panel</h1>
    <DevsNavbar/>
    <DevsDashboard/>
    </>
  )
}

export default DevHome