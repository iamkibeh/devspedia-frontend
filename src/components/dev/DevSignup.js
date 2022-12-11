import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Signup from '../signup/Signup'

const DevSignup = () => {
  const [errors, setErrors] = useState([])

  const [formState, setFormState] = useState({})
  const navigate = useNavigate()
  const myRouteLocation = window.location.pathname

  function formChange(e) {
    setErrors('')
    const value = e.target.value
    const name = e.target.name
    setFormState({ ...formState, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
    fetch('https://devspedia-api-production.up.railway.app/signup-dev', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: formState.username,
        email: formState.email,
        fname: formState.fname,
        lname: formState.lname,
        password: formState.password,
        password_confirmation: formState.password_confirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {
          navigate('/dev')
        })
      } else {
        r.json().then((err) => {
          console.log(err)
          setErrors(err.errors)
        })
      }
    })
  }

  return (
    <>
      <div className='devs-signup-container'>
        <div className='parent-container-signup'>
          <div className='login-box'>
            <h3>Signup</h3>
            <h4>Welcome to Devspedia</h4>
            <p>Signup to get unlimited access to articles</p>
            <div className='devs-login-form'>
              <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='login-inputs-container'>
                  <input
                    id='firstname'
                    type='text'
                    name='fname'
                    placeholder='First Name'
                    onChange={(e) => formChange(e)}
                    required
                  />
                  <input
                    id='lastname'
                    type='text'
                    name='lname'
                    placeholder='Last Name'
                    onChange={(e) => formChange(e)}
                    required
                  />
                  <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={(e) => formChange(e)}
                    required
                  />
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email address'
                    onChange={(e) => formChange(e)}
                    required
                  />
                  <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e) => formChange(e)}
                    required
                  />
                  <input
                    id='passwordConfirm'
                    type='password'
                    name='password_confirmation'
                    placeholder='Confirm password'
                    onChange={(e) => formChange(e)}
                    required
                  />
                </div>

                <div className='error-message'>
                  {errors.length > 0 &&
                    errors.map((err, ind) => {
                      return (
                        <p key={ind} style={{ color: 'red' }}>
                          {err}
                        </p>
                      )
                    })}
                </div>
                <div className='logins-button-form'>
                  <button type='submit'>Signup</button>
                </div>
              </form>
            </div>
            <div className='login-footer'>
              <div className='register'>
                <p>
                  Have an account?
                  <span>
                    <Link
                      to={myRouteLocation !== '/dev/signup' ? '/login' : '/dev'}
                    >
                      Login
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DevSignup
