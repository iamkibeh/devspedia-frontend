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
          <NavLink to='/dev/:id/dashboard/profile'>
            <p>Edit Profile</p>
          </NavLink>
        </li>
        <li>
          <IoMdNotificationsOutline />
          <NavLink to='/dev/:id/articles'>
            <p>Articles</p>
          </NavLink>
        </li>
        <li>
          <MdOutlineLock />
          <NavLink to='/dev/:id/articles/create'>
            <p>Post Articles</p>
          </NavLink>
        </li>
        <li>
          <MdOutlineSettings />
          <NavLink to='/dev/:id/settings'>
            <p>Settings</p>
          </NavLink>
        </li>
        <li>
          <MdHelpOutline />
          <NavLink to='/dev/:id/logout'>
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
