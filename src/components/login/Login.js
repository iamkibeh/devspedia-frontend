import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'

function Login({ setLoggedIn }) {
  const initFormState = {
    username: '',
    password: '',
  }

  const [formState, setFormState] = useState(initFormState)
  const myRoute = window.location.pathname

  const navigate = useNavigate()

  const formChange = (e) => {
    const { name, value } = e.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    console.log(formState)
    e.preventDefault()
    await fetch('http://localhost:9293/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then((resp) => resp.json())
      .then((user) => {
        console.log(user)
        if (user.error) {
          alert(user.error)
        } else {
          setLoggedIn(user)
          setFormState(initFormState)
          localStorage.setItem('user', user)
          console.log(user)
          navigate('/home')
        }
      })
  }

  return (
    <>
      <div className='login-parent-container'>
        <div className='login-box'>
          <h3>Login</h3>
          <h4>Welcome to Devspedia</h4>
          <p>Login to explore developer articles</p>
          <div className='devs-login-form'>
            <form onSubmit={handleSubmit} autoComplete='off'>
              <div className='login-inputs-container'>
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  value={formState.username}
                  onChange={formChange}
                  required
                />
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formState.password}
                  onChange={formChange}
                  required
                />
              </div>
              <div className='logins-button-form'>
                <button type='submit'>login</button>
              </div>
            </form>
          </div>
          <div className='login-footer'>
            <div className='register'>
              <p>
                Don't have an account?
                <span>
                  <Link
                    to={myRoute !== '/dev/login' ? '/signup' : '/dev/signup'}
                  >
                    Register
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
