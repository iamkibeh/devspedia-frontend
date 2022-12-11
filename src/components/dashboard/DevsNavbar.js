import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const DevsNavbar = () => {
  const handleClick = () => {
    Navigate('/')
    window.location.reload()
  }
  return (
    <>
      <div className='top'>
        <div className='topLeft'>
          <h1 className='toptitle'>DevsPedia </h1>
        </div>

        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' onClick={handleClick}>
                Get Started as a User
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/contact_us'>
                Contact us
              </Link>
            </li>
            <li className='topListItem'></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default DevsNavbar
