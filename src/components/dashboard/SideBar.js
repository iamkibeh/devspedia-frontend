import React from 'react'
import {
  MdOutlineEdit,
  MdOutlineLock,
  MdOutlineSettings,
  MdHelpOutline,
} from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'

const SideBar = () => {
  return (
    <div>
      <h4>Dashboard</h4>
      <ul>
        <li>
          <MdOutlineEdit />
          <p>Edit Profile</p>
        </li>
        <li>
          <IoMdNotificationsOutline />
          <p>Articles</p>
        </li>
        <li>
          <MdOutlineLock />
          <p>Post Articles</p>
        </li>
        <li>
          <MdOutlineSettings />
          <p>Settings</p>
        </li>
        <li>
          <MdHelpOutline />
          <p>Help</p>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
