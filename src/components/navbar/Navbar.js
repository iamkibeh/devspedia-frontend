import './navbar.css'
import { Link } from 'react-router-dom'
import { reactLocalStorage } from 'reactjs-localstorage'

export default function Navbar() {
  const user = reactLocalStorage.getObject('users').success

  const handleLoginState = () => {
    if (user) {
      window.location.href = '/'
      return reactLocalStorage.remove('users')
    } else {
      window.location.href = '/login'
      // return reactLocalStorage.setObject
    }
  }
  return (
    <div className='top'>
      <div className='topLeft'>
        <h1 className='toptitle'>DevPedia </h1>
      </div>

      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              Home
            </Link>
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
            <Link
              className='link'
              // to={user ? '/' : '/login'}
              onClick={handleLoginState}
            >
              {user ? 'Logout' : 'Login'}
            </Link>
          </li>

          <li className='topListItem'>
            <button className='topButton'>Get Unlimited Access</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
