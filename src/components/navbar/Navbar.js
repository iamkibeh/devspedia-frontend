import './navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  // const user = reactLocalStorage.getObject('users').success
  const [isOpen, setIsOpen] = useState(false)

  const user = localStorage.getItem('user')
  const dev = localStorage.getItem('dev')
  const toggling = () => setIsOpen(!isOpen)

  const handleUserLoginState = () => {
    if (user) {
      window.location.href = '/'
      return localStorage.removeItem('user')
    } else {
      window.location.href = '/login'
      // return reactLocalStorage.setObject
    }
  }

  const handleDevLoginState = () => {
    if (dev) {
      window.location.href = '/'
      return localStorage.removeItem('dev')
    } else {
      window.location.href = '/dev'
      // return reactLocalStorage.setObject
    }
  }

  return (
    <div className='top'>
      <div className='topLeft'>
        <h1 className='toptitle'>
          {' '}
          <Link className='link' to='/'>
            DevsPedia
          </Link>
        </h1>
      </div>

      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            {/* <Link className='link' to='/'>
              Home
            </Link> */}
          </li>

          <li className='topListItem'>
            <Link className='link' to='/articles'>
              Articles
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>
              About
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

      <div className='topRight'>
        <ul className='topList'>
          <li id='topListItem'>
            <div className='drop-down-container'>
              <div className='drop-down-header' onClick={toggling}>
                <Link
                  className='link'
                  // to={user ? '/' : '/login'}
                  // onClick={handleLoginState}
                >
                  {user ? 'Logout' : 'Login'}
                </Link>
              </div>
              {isOpen && (
                <div className='drop-down-list-container'>
                  <ul className='drop-down-list'>
                    <li>
                      <Link className='link' onClick={handleUserLoginState}>
                        {user ? 'Logout' : 'Login'} as a user
                      </Link>
                    </li>
                    <li>
                      <Link className='link' onClick={handleDevLoginState}>
                        {dev ? 'Logout' : 'Login'} as a dev
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/articles'>
              <button className='topButton'>Get Unlimited Access</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
