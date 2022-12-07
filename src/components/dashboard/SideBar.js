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
  return (
    <div>
      <h4>Dashboard</h4>
      <ul>
        <li>
          <MdOutlineEdit />
          <NavLink to='/user/:id/dashboard/profile'>
            <p>Edit Profile</p>
          </NavLink>
        </li>
        <li>
          <IoMdNotificationsOutline />
          <NavLink to='/user/:id/articles'>
            <p>Articles</p>
          </NavLink>
        </li>
        <li>
          <MdOutlineLock />
          <NavLink to='/user/:id/articles'>
            <p>Post Articles</p>
          </NavLink>
        </li>
        <li>
          <MdOutlineSettings />
          <NavLink to='/user/:id/settings'>
            <p>Settings</p>
          </NavLink>
        </li>
        <li>
          <MdHelpOutline />
          <NavLink to='/user/:id/help'>
            <p>Help</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
