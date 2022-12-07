import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'

function Login({ setLoggedIn }) {
  const initFormState = {
    username: '',
    password: '',
  }

  const [formState, setFormState] = useState(initFormState)

  const navigate = useNavigate()

  const formChange = (e) => {
    const { name, value } = e.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
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
        <div class='login-box'>
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
              <div class='logins-button-form'>
                <button type='submit'>login</button>
              </div>
            </form>
          </div>
          <div className='login-footer'>
            <div class='register'>
              <p>
                Don't have an account?
                <span>
                  <a id='signupLink' href='/signup'>
                    Register
                  </a>
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
