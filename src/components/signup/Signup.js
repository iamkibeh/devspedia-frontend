import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Signup.css'

function Signup({ addNewUser }) {
  const initFormState = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
  }

  const navigate = useNavigate()
  const myRouteLocation = window.location.pathname

  const [formState, setFormState] = useState(initFormState)
  const [passConfirmation, setPassConfirmation] = useState({
    passwordConfirm: '',
  })

  const formChange = (e) => {
    const { name, value } = e.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  const passwordConfChange = (e) => {
    const { name, value } = e.target
    setPassConfirmation((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formState.password !== passConfirmation.passwordConfirm) {
      alert('Passwords do not match! Please try again.')
    } else {
      await fetch('http://localhost:9293/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
        .then((resp) => resp.json())
        .then((newUser) => {
          addNewUser(newUser)
          setFormState(initFormState)
          navigate('/')
        })
    }
  }

  return (
    <>
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
                  name='firstname'
                  placeholder='First Name'
                  value={formState.firstname}
                  onChange={formChange}
                  required
                />
                <input
                  id='lastname'
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  value={formState.lastname}
                  onChange={formChange}
                  required
                />
                <input
                  id='username'
                  type='text'
                  name='username'
                  placeholder='Username'
                  value={formState.username}
                  onChange={formChange}
                  required
                />
                <input
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Email address'
                  value={formState.email}
                  onChange={formChange}
                  required
                />
                <input
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formState.password}
                  onChange={formChange}
                  required
                />
                <input
                  id='passwordConfirm'
                  type='password'
                  name='passwordConfirm'
                  placeholder='Confirm password'
                  value={passConfirmation.passwordConfirm}
                  onChange={passwordConfChange}
                  required
                />
              </div>

              <div className='logins-button-form'>
                <button type='submit'>submit</button>
              </div>
            </form>
          </div>
          <div className='login-footer'>
            <div className='register'>
              <p>
                Have an account?
                <span>
                  <Link
                    to={
                      myRouteLocation !== '/dev/signup'
                        ? '/login'
                        : '/dev/login'
                    }
                  >
                    Login
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

export default Signup
