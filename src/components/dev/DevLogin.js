import React from 'react'
import Login from '../login/Login'

const DevLogin = (handleDevLogin) => {
  return (
    <>
      <div className='dev-login-container'>
        <Login handleLogin={handleDevLogin} action='devLogin' />
      </div>
    </>
  )
}

export default DevLogin
