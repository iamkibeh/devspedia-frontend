import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup({ }) {
  const initFormState = {
    username: '',
    email: '',
    password: '',
  }

  const navigate = useNavigate()

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
      await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setFormState(user));
      
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          r.json().then((err) => 
            console.log(err.errors)
           
          );
        }
      })
    }
  }

  return (
    <>
      <div className='parent-container-signup'>
        <div class='signup-box'>
          <h2>
            <b>Signup</b>
          </h2>
          <h3>
            <b>Welcome to Devspedia</b>
          </h3>
          <h4>
            {' '}
            <i>Signup to get unlimited access to articles </i>
          </h4>
          <br></br>
          <form
            className='formWrapper'
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <div class='user-box'>
              <label className='label' htmlFor='firstname'></label>
              <input
                className='input'
                id='firstname'
                type='text'
                name='firstname'
                placeholder='First Name'
                value={formState.firstname}
                onChange={formChange}
                required
              />
            </div>
            <br></br>
            <div class='user-box'>
              <label className='label' htmlFor='lastname'></label>
              <input
                className='input'
                id='lastname'
                type='text'
                name='lastname'
                placeholder='Last Name'
                value={formState.lastname}
                onChange={formChange}
                required
              />
            </div>
            <br></br>
            <div class='user-box'>
              <label className='label' htmlFor='username'></label>
              <input
                className='input'
                id='username'
                type='text'
                name='username'
                placeholder='Username'
                value={formState.username}
                onChange={formChange}
                required
              />
            </div>
            <br></br>
            <div class='user-box'>
              <label className='label' htmlFor='email'></label>
              <input
                className='input'
                id='email'
                type='email'
                name='email'
                placeholder='Email address'
                value={formState.email}
                onChange={formChange}
                required
              />
            </div>
            <br></br>
            <div class='user-box'>
              <label className='label' htmlFor='password'></label>
              <input
                className='input'
                id='password'
                type='password'
                name='password'
                placeholder='Password'
                value={formState.password}
                onChange={formChange}
                required
              />
            </div>
            <br></br>
            <div class='user-box'>
              <label className='label' htmlFor='passwordConfirm'></label>
              <input
                className='input'
                id='passwordConfirm'
                type='password'
                name='passwordConfirm'
                placeholder='Confirm password'
                value={passConfirmation.passwordConfirm}
                onChange={passwordConfChange}
                required
              />
              <div class='button-form'></div>
              <button className='formBtn' type='submit'>
                SUBMIT
              </button>
            </div>
            <div class='register'>
              <p className='signup'>
                <h5>Have an account?</h5>
                <a id='signupLink' href='/login'>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
