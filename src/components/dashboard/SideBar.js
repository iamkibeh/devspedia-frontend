import React from 'react'
import {
  MdOutlineEdit,
  MdOutlineLock,
  MdOutlineSettings,
  MdHelpOutline,
} from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  const handleLogoutClick = () => {
    window.location.href = '/dev'
    return localStorage.clear('dev-token')
  }

  return (
    <div>
      <NavLink to='/dev/dashboard' style={{ textDecoration: 'none' }}>
        {' '}
        <h4>Dashboard</h4>{' '}
      </NavLink>
      <ul>
        <li>
          <MdOutlineEdit />
          <NavLink to='/dev/dashboard/profile'>
            <p>Edit Profile</p>
          </NavLink>
        </li>
        <li>
          <IoMdNotificationsOutline />
          <NavLink to='/dev/dashboard/articles'>
            <p>My Articles</p>
          </NavLink>
        </li>
        <li>
          <MdOutlineLock />
          <NavLink to='/dev/dashboard/create'>
            <p>Post Articles</p>
          </NavLink>
        </li>
        <li>
          <MdOutlineSettings />
          <NavLink to='/dev/dashboard/settings'>
            <p>Settings</p>
          </NavLink>
        </li>
        <li>
          <MdHelpOutline />
          <NavLink onClick={handleLogoutClick}>
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
